import Image from "next/image";
import FloatingIcons from "./components/FloatingIcons";
import FeatureMockups from "./components/FeatureMockups";
import QRCodeSection from "./components/QRCodeSection";
import ProblemIcons from "./components/ProblemIcons";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-white pb-safe">
      {/* Ambient gradient orbs - subtle teal tint */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#00A56E]/5 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-[#00A56E]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[#00A56E]/5 blur-[80px]" />
      </div>

      {/* Floating icons layer - antigravity effect */}
      <FloatingIcons />

      {/* Content - above floating icons with z-index */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))] md:px-12 md:py-8">
          <div className="flex items-center gap-2">
            <Image
              src="/installo-logo.svg"
              alt="Installo"
              width={28}
              height={28}
              className="h-7 w-7 md:h-8 md:w-8"
            />
            <span className="text-lg font-semibold tracking-tight text-[#1A1A1A] md:text-xl">
              Installo
            </span>
          </div>
          <nav className="flex items-center gap-3 md:gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] md:hidden"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hidden"
            >
              Pricing
            </a>
            <a
              href="https://app.tryinstallo.com/"
              className="rounded-full border border-[#E5E5E5] bg-white px-3 py-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F5] md:px-4"
            >
              Sign in
            </a>
            <a
              href="https://app.tryinstallo.com/"
              className="rounded-full bg-[#00A56E] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#009660] md:px-4"
            >
              Get started
            </a>
          </nav>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 pb-12 pt-8 text-center md:px-12 md:pb-16 md:pt-0">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#00A56E] md:mb-4 md:text-sm">
              Structured case intake
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-[1.15] tracking-tight text-[#1A1A1A] sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl">
              Case Intake,{" "}
              <span className="text-[#00A56E]">
                Rebuilt.
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:mb-10 md:text-lg lg:text-xl">
              Stop chasing documents. Automatically collect and structure
              immigration case data in minutes — not hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://app.tryinstallo.com/"
                className="group flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#00A56E] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#009660] hover:shadow-lg hover:shadow-[#00A56E]/25 active:scale-[0.98] sm:w-auto"
              >
                Start Free
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#"
                className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-8 py-4 text-base font-semibold text-[#1A1A1A] transition-all hover:bg-[#F5F5F5] active:scale-[0.98] sm:w-auto"
              >
                View Demo
              </a>
            </div>
            <p className="mt-3 text-xs text-[#ADADAD] md:mt-4 md:text-sm">
              No credit card required · 2-min setup
            </p>
          </div>

          {/* Product visual - dashboard mock */}
          <div className="relative mx-auto mt-10 w-full max-w-5xl px-2 md:mt-24 md:px-4">
            <div className="absolute -inset-2 rounded-2xl bg-[#00A56E]/5 blur-2xl md:-inset-4" />
            <div className="relative overflow-hidden rounded-lg border border-[#E5E5E5] bg-white shadow-xl shadow-black/5 md:rounded-xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-[#FAFAFA] px-3 py-2 md:px-4 md:py-3">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] md:h-3 md:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] md:h-3 md:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] md:h-3 md:w-3" />
                </div>
                <div className="mx-auto flex flex-1 min-w-0 items-center justify-center rounded-lg bg-white border border-[#E5E5E5] px-2 py-1.5 md:max-w-md md:px-4 md:py-2">
                  <span className="truncate text-[10px] text-[#ADADAD] md:text-xs">app.tryinstallo.com/case/12345</span>
                </div>
              </div>
              {/* Dashboard mock content - mobile: simplified single column */}
              <div className="flex min-h-[220px] md:min-h-[400px]">
                <div className="hidden w-1/4 border-r border-[#E5E5E5] bg-[#FAFAFA] p-4 md:block">
                  <div className="mb-4 h-8 w-24 rounded bg-[#E5E5E5]" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-6 rounded bg-[#E5E5E5]/60" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 p-3 md:p-6">
                  <div className="mb-3 flex gap-2 md:mb-4 md:gap-4">
                    <div className="h-8 flex-1 rounded-lg bg-[#E5E5E5]/60 md:h-10" />
                    <div className="h-8 w-16 rounded-lg bg-[#00A56E]/20 md:h-10 md:w-24" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-16 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] md:h-24" />
                    ))}
                  </div>
                  <div className="mt-3 flex flex-col gap-2 md:mt-6 md:flex-row md:gap-4">
                    <div className="h-28 flex-1 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] md:h-48" />
                    <div className="h-28 w-full rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] md:h-48 md:w-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Problems / Pain points - sell by showing what we fix */}
        <section className="relative z-10 overflow-hidden border-t border-[#E5E5E5] py-16 md:py-24">
          {/* Subtle background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA]" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00A56E]/5 blur-[80px]" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#00A56E]/5 blur-[60px]" />
          <div className="relative mx-auto max-w-5xl px-4 md:px-12">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-3 text-2xl font-bold text-[#1A1A1A] md:text-3xl lg:text-4xl">
                Sound familiar?
              </h2>
              <p className="mx-auto max-w-xl text-[#4A4A4A] md:text-lg">
                These are the daily pains that slow you down.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { problem: "Chasing documents", why: "Daily, repetitive, exhausting", icon: ProblemIcons.chasing },
                { problem: "Manual data entry", why: "Time-consuming + risky", icon: ProblemIcons.manualEntry },
                { problem: "Overloaded caseload", why: "Constant pressure", icon: ProblemIcons.overloaded },
                { problem: "Client emotional stress", why: "Drains energy", icon: ProblemIcons.stress },
                { problem: "Policy changes", why: "Adds complexity", icon: ProblemIcons.policy },
                { problem: "Disorganized files", why: "Slows everything", icon: ProblemIcons.disorganized },
              ].map(({ problem, why, icon }) => (
                <div
                  key={problem}
                  className="group flex items-start gap-4 rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-sm transition-all hover:border-[#00A56E]/30 hover:shadow-lg hover:shadow-[#00A56E]/5 md:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A56E]/10 text-[#00A56E] transition-colors group-hover:bg-[#00A56E]/15">
                    {icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[#1A1A1A] md:text-base">{problem}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A4A4A]">{why}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-[#00A56E]/20 bg-gradient-to-r from-[#00A56E]/5 to-[#00A56E]/10 px-6 py-8 text-center md:mt-16 md:flex-row md:justify-between md:px-10">
              <p className="text-lg font-medium text-[#1A1A1A] md:text-xl">
                Installo helps you fix these.
              </p>
              <a
                href="https://app.tryinstallo.com/"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#00A56E] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#009660] hover:shadow-lg hover:shadow-[#00A56E]/25 active:scale-[0.98]"
              >
                See how
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features strip */}
        <section
          id="features"
          className="relative z-10 border-t border-[#E5E5E5] bg-[#FAFAFA] py-16 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-12">
            <h2 className="mb-10 text-center text-xl font-semibold text-[#1A1A1A] md:mb-16 md:text-2xl lg:text-3xl">
              Everything you need to streamline intake
            </h2>
            <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {[
                {
                  key: "upload",
                  title: "Upload Everything at Once",
                  desc: "Drop full case folders. We organize them for you.",
                  mockup: FeatureMockups.upload,
                },
                {
                  key: "extract",
                  title: "Extract Key Case Data",
                  desc: "Names, dates, IDs — we get them automatically.",
                  mockup: FeatureMockups.extract,
                },
                {
                  key: "review",
                  title: "Review Side-by-Side",
                  desc: "Check documents and data in one screen.",
                  mockup: FeatureMockups.review,
                },
                {
                  key: "consolidate",
                  title: "Consolidate Case Information",
                  desc: "All case info in one place.",
                  mockup: FeatureMockups.consolidate,
                },
                {
                  key: "detect",
                  title: "Detect Data Issues Early",
                  desc: "Find problems and missing info fast.",
                  mockup: FeatureMockups.detect,
                },
                {
                  key: "track",
                  title: "Track Case Readiness",
                  desc: "See what's done and what's left.",
                  mockup: FeatureMockups.track,
                },
              ].map((feature) => (
                <div
                  key={feature.key}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-sm transition-all hover:border-[#00A56E]/30 hover:shadow-lg md:rounded-2xl"
                >
                  <div className="flex min-h-[100px] items-center justify-center bg-[#FAFAFA] p-4 md:min-h-[140px] md:p-6">
                    <div className="w-full max-w-[140px] md:max-w-[180px]">
                      {feature.mockup}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4 md:p-6">
                    <h3 className="mb-1.5 text-base font-semibold text-[#1A1A1A] md:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 py-20 md:py-32">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-12">
            <h2 className="mb-3 text-2xl font-bold text-[#1A1A1A] md:mb-4 md:text-3xl lg:text-4xl">
              Start Structuring Your Cases Today.
            </h2>
            <p className="mb-8 text-[#4A4A4A] md:mb-10">
              Modern tools for modern paralegals.
            </p>
            <a
              href="https://app.tryinstallo.com/"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#00A56E] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#009660] hover:shadow-lg hover:shadow-[#00A56E]/25 active:scale-[0.98] md:w-auto"
            >
              Start Free
              <span>→</span>
            </a>
            <p className="mt-3 text-xs text-[#ADADAD] md:mt-4 md:text-sm">
              No credit card required · 2-min setup
            </p>
          </div>
        </section>

        {/* QR Code - Scan to visit */}
        <QRCodeSection />

        {/* Footer */}
        <footer className="relative z-10 border-t border-[#E5E5E5] bg-white py-6 md:py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-12">
            <span className="text-sm text-[#4A4A4A]">© 2025 Installo</span>
            <div className="flex gap-8 text-sm text-[#4A4A4A]">
              <a href="#" className="hover:text-[#1A1A1A]">
                Privacy
              </a>
              <a href="#" className="hover:text-[#1A1A1A]">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
