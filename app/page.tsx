import dynamic from "next/dynamic";
import Image from "next/image";
import FeatureMockups from "./components/FeatureMockups";
import HeroVideo from "./components/HeroVideo";
import ProblemIcons from "./components/ProblemIcons";
import SupademoButton from "./components/SupademoButton";

const PAIN_POINT_IMAGES = [
  { src: "/pain-chasing-documents.png", alt: "Chasing documents — daily, repetitive, exhausting" },
  { src: "/pain-manual-data-entry.png", alt: "Manual data entry — time-consuming and risky" },
  { src: "/pain-overloaded-caseload.png", alt: "Overloaded caseload — constant pressure" },
  { src: "/pain-client-stress.png", alt: "Client emotional stress — drains energy" },
  { src: "/pain-policy-changes.png", alt: "Policy changes — adds complexity" },
  { src: "/pain-disorganized-files.png", alt: "Disorganized files — slows everything" },
];

const FloatingIcons = dynamic(() => import("./components/FloatingIcons"), {
  loading: () => null,
});

const QRCodeSection = dynamic(() => import("./components/QRCodeSection"), {
  loading: () => (
    <section className="relative z-10 border-t border-[#E5E5E5] bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-12">
        <div className="h-[280px] animate-pulse rounded-2xl bg-[#F5F5F5]" />
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-white pb-safe">
      {/* Ambient gradient orbs - subtle teal tint (reduced blur on mobile for perf) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-64 w-64 rounded-full bg-[#00A56E]/5 blur-[60px] md:h-96 md:w-96 md:blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-48 w-48 rounded-full bg-[#00A56E]/5 blur-[50px] md:h-80 md:w-80 md:blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#00A56E]/5 blur-[40px] md:h-64 md:w-96 md:blur-[80px]" />
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
              priority
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
              <SupademoButton />
            </div>
            <p className="mt-3 text-xs text-[#ADADAD] md:mt-4 md:text-sm">
              No credit card required · 2-min setup
            </p>
          </div>

          {/* Product visual - full video */}
          <HeroVideo />
        </main>

        {/* Problems / Pain points - playful Google doodle style */}
        <section className="relative z-10 overflow-hidden border-t border-[#E8E8E8] py-20 md:py-28">
          {/* Playful floating orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[15%] h-24 w-24 rounded-full bg-[#00A56E]/10 blur-2xl" />
            <div className="absolute right-[15%] top-[40%] h-32 w-32 rounded-full bg-[#00D4AA]/15 blur-3xl" />
            <div className="absolute left-[30%] bottom-[20%] h-20 w-20 rounded-full bg-[#00A56E]/8 blur-xl" />
            <div className="absolute right-[25%] bottom-[30%] h-16 w-16 rounded-full bg-[#7DD3C0]/20 blur-2xl" />
          </div>
          {/* Floating doodle shapes */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[5%] top-[20%] h-3 w-3 rounded-full bg-[#00A56E]/20 animate-pulse" style={{ animationDelay: "0s" }} />
            <div className="absolute right-[8%] top-[25%] h-2 w-2 rounded-full bg-[#00A56E]/25 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute left-[20%] bottom-[15%] h-2.5 w-2.5 rounded-full bg-[#00D4AA]/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute right-[12%] bottom-[25%] h-2 w-2 rounded-full bg-[#00A56E]/15 animate-pulse" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 md:px-12">
            <div className="mb-14 text-center md:mb-16">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#1A1A1A] md:text-3xl lg:text-4xl">
                Sound familiar?
              </h2>
              <p className="mx-auto max-w-xl text-[#5A5A5A] md:text-lg">
                We get it. Here&apos;s what we&apos;re fixing.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { problem: "Chasing documents", why: "Daily, repetitive, exhausting", icon: ProblemIcons.chasing },
                { problem: "Manual data entry", why: "Time-consuming + risky", icon: ProblemIcons.manualEntry },
                { problem: "Overloaded caseload", why: "Constant pressure", icon: ProblemIcons.overloaded },
                { problem: "Client emotional stress", why: "Drains energy", icon: ProblemIcons.stress },
                { problem: "Policy changes", why: "Adds complexity", icon: ProblemIcons.policy },
                { problem: "Disorganized files", why: "Slows everything", icon: ProblemIcons.disorganized },
              ].map(({ problem, why, icon }, i) => (
                <article
                  key={problem}
                  className="pain-card group relative flex flex-col overflow-hidden rounded-3xl bg-white/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_20px_50px_-15px_rgba(0,165,110,0.25)] hover:bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                    <Image
                      src={PAIN_POINT_IMAGES[i].src}
                      alt={PAIN_POINT_IMAGES[i].alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[#00A56E] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {icon}
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-2 p-5 md:p-6">
                    <h3 className="text-base font-semibold tracking-tight text-[#1A1A1A] md:text-lg">
                      {problem}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6B6B6B]">
                      {why}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[#00A56E] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                      <span className="text-xs font-medium">We fix this</span>
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-[#00A56E]/10 via-[#00D4AA]/5 to-transparent px-6 py-8 text-center md:mt-16 md:flex-row md:justify-between md:px-10">
              <p className="text-lg font-medium text-[#1A1A1A] md:text-xl">
                Installo helps you fix these.
              </p>
              <a
                href="https://app.tryinstallo.com/"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#00A56E] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#00A56E]/25 transition-all hover:-translate-y-0.5 hover:scale-105 hover:bg-[#009660] hover:shadow-xl hover:shadow-[#00A56E]/30 active:scale-[0.98]"
              >
                See how
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
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
