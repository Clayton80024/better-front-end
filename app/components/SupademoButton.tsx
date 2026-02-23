"use client";

declare global {
  interface Window {
    Supademo?: { open: (id: string) => void };
  }
}

export default function SupademoButton() {
  return (
    <button
      type="button"
      onClick={() => window.Supademo?.open("cmlyg97pn0vze1435rd4b52cf")}
      className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-8 py-4 text-base font-semibold text-[#1A1A1A] transition-all hover:border-[#00A56E]/30 hover:bg-[#F5F5F5] hover:text-[#00A56E] active:scale-[0.98] sm:w-auto"
    >
      Try the tour
    </button>
  );
}
