"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PARALEGAL_ICONS = [
  { icon: "📄", label: "Document" },
  { icon: "📋", label: "Checklist" },
  { icon: "📁", label: "Folder" },
  { icon: "⚡", label: "Automate" },
  { icon: "✓", label: "Complete" },
  { icon: "📊", label: "Report" },
];

function FloatingIcon({
  icon,
  label,
  style,
  onPointerDown,
}: {
  icon: string;
  label: string;
  style: React.CSSProperties;
  onPointerDown: (e: React.PointerEvent) => void;
}) {
  return (
    <div
      className="floating-icon group absolute flex h-10 w-10 cursor-grab items-center justify-center rounded-lg border border-[#E5E5E5] bg-white/80 text-lg shadow-sm backdrop-blur-sm transition-all duration-300 max-md:h-8 max-md:w-8 max-md:text-sm max-md:opacity-70 md:h-12 md:w-12 md:text-xl md:hover:scale-105 md:hover:border-[#00A56E]/30 md:hover:shadow-md md:active:cursor-grabbing"
      style={style}
      onPointerDown={onPointerDown}
      draggable={false}
      role="img"
      aria-label={label}
    >
      <span className="select-none">{icon}</span>
    </div>
  );
}

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState(() =>
    PARALEGAL_ICONS.map((_, i) => ({
      x: 5 + (i * 9) % 85,
      y: 10 + (i * 7) % 75,
    }))
  );
  const dragRef = useRef<{
    index: number;
    startX: number;
    startY: number;
    startPosX: number;
    startPosY: number;
  } | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent, index: number) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = {
      index,
      startX: e.clientX,
      startY: e.clientY,
      startPosX: positions[index].x,
      startPosY: positions[index].y,
    };
  }, [positions]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!dragRef.current || !containerRef.current) return;
    const { index, startX, startY, startPosX, startPosY } = dragRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = 100 / rect.width;
    const scaleY = 100 / rect.height;
    const dx = (e.clientX - startX) * scaleX;
    const dy = (e.clientY - startY) * scaleY;
    setPositions((prev) => {
      const next = [...prev];
      next[index] = {
        x: Math.max(0, Math.min(90, startPosX + dx)),
        y: Math.max(0, Math.min(85, startPosY + dy)),
      };
      return next;
    });
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden max-md:pointer-events-none">
      {PARALEGAL_ICONS.map(({ icon, label }, i) => (
        <FloatingIcon
          key={i}
          icon={icon}
          label={label}
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
            animationDelay: `${i * 0.3}s`,
          }}
          onPointerDown={(e) => handlePointerDown(e, i)}
        />
      ))}
    </div>
  );
}
