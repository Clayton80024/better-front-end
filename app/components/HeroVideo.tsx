"use client";

const DEMO_ID = "cmlyg97pn0vze1435rd4b52cf";

declare global {
  interface Window {
    Supademo?: { open: (id: string) => void };
  }
}

export default function HeroVideo() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.Supademo) {
      window.Supademo.open(DEMO_ID);
    } else {
      window.open("https://app.tryinstallo.com/", "_blank");
    }
  };

  return (
    <div className="relative mx-auto mt-10 w-full max-w-5xl px-2 md:mt-24 md:px-4">
      <div className="absolute -inset-2 rounded-2xl bg-[#00A56E]/5 blur-xl md:-inset-4 md:blur-2xl" />
      <button
        type="button"
        onClick={handleClick}
        className="group relative block w-full overflow-hidden rounded-xl border border-[#E5E5E5] bg-black shadow-xl shadow-black/10 transition-all hover:border-[#00A56E]/40 hover:shadow-[#00A56E]/15 hover:shadow-xl active:scale-[0.99] md:rounded-2xl"
      >
        {/* Browser-style frame */}
        <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-[#FAFAFA] px-3 py-2 md:px-4 md:py-3">
          <div className="flex gap-1.5 md:gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] md:h-3 md:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] md:h-3 md:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] md:h-3 md:w-3" />
          </div>
          <div className="mx-auto flex flex-1 min-w-0 items-center justify-center rounded-lg border border-[#E5E5E5] bg-white px-2 py-1.5 md:max-w-md md:px-4 md:py-2">
            <span className="truncate text-[10px] text-[#ADADAD] md:text-xs">
              tryinstallo.com
            </span>
          </div>
        </div>
        {/* Mockup content - dashboard preview */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#111]">
          <video
            src="/hero-video.mp4"
            preload="metadata"
            muted
            playsInline
            className="h-full w-full object-cover object-center"
            aria-hidden
          />
          {/* Green play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00A56E] shadow-lg shadow-[#00A56E]/40 transition-all group-hover:scale-110 group-hover:bg-[#009660] group-hover:shadow-xl group-hover:shadow-[#00A56E]/50 md:h-20 md:w-20">
              <svg
                className="ml-1 h-6 w-6 text-white md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm md:text-sm">
            Click to try the tour
          </p>
        </div>
      </button>
    </div>
  );
}
