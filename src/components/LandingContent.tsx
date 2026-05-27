"use client";

import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { copy } from "@/lib/copy";

export default function LandingContent() {
  const { language } = useLanguage();
  const strings = copy[language];

  return (
    <main className="min-h-screen bg-obsidian text-bone">
      <header className="border-b border-border/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 sm:px-8">
          <div className="leading-tight">
            <p className="text-sm tracking-[0.35em] text-ash">TONALLI</p>
            <p className="hidden mt-2 text-xs text-ash sm:block">{strings.navTagline}</p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-ash">
              <a href="https://docs.tonalli.cash" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition">
                Docs
              </a>
              <a href="https://github.com/xolosarmy" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition">
                GitHub
              </a>
            </nav>

            <LanguageToggle />

            <a
              href="https://app.tonalli.cash"
              className="rounded-full bg-ember px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:opacity-90 sm:px-5"
            >
              {strings.ctaOpenWallet}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-24 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-[180px]" />
          <div className="absolute -bottom-32 -right-20 h-[26rem] w-[26rem] rounded-full bg-jade/5 blur-[200px]" />
        </div>

        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24 sm:px-8 sm:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2 text-xs text-ash">
            <span className="h-2 w-2 rounded-full bg-jade" />
            {strings.badgeText}
          </p>

          <h1
            className="mt-6 font-serif text-5xl tracking-tight md:text-6xl"
          >
            {strings.heroTitle}
          </h1>

          <div
            className="mt-6 max-w-2xl space-y-3 text-lg text-bone/85"
          >
            {strings.heroDescription.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://app.tonalli.cash"
              className="rounded-2xl bg-ember px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:opacity-90"
            >
              {strings.ctaOpenWallet}
            </a>

            <a
              href="https://docs.tonalli.cash"
              className="rounded-2xl border border-border/60 bg-transparent px-6 py-3 text-sm font-medium text-bone transition hover:bg-bone/5"
            >
              {strings.ctaDocs}
            </a>
          </div>

          <div className="mt-10 max-w-3xl rounded-2xl border border-border/50 bg-card/35 p-5 text-sm text-ash">
            <span className="text-bone/90">{strings.security}</span>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="border-t border-border" />
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border/70" />
      </div>

      <section className="bg-bone py-20 text-obsidian">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2 className="font-serif text-3xl tracking-tight">
            {strings.sectionTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-obsidian/70">
            {strings.sectionIntro}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strings.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {strings.steps.map((step) => (
              <StepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-20 text-bone">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="font-serif text-3xl tracking-tight">
            {strings.whyTitle}
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-bone/80 sm:text-xl">
            {strings.whyStatements.map((statement) => (
              <li key={statement} className="list-disc pl-5">
                {statement}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border/40 bg-obsidian">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 py-12 text-sm text-ash sm:flex-row sm:px-8">
          <div className="flex max-w-xs flex-col gap-3">
            <span className="text-bone text-xs font-bold tracking-[0.2em] uppercase">Tonalli Wallet</span>
            <span className="leading-relaxed">{strings.footer}</span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-bone">Recursos</span>
              <a href="https://docs.tonalli.cash" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition">
                Documentación
              </a>
              <a href="https://github.com/xolosarmy" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition">
                Código Fuente
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-medium text-bone">Comunidad</span>
              <a href="https://t.me/ecashmx" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition">
                Telegram eCash MX
              </a>
              <a href="https://twitter.com/eCashOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition">
                Twitter / X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border/20 bg-bone/90 p-6 shadow-soft">
      <h3 className="text-base font-medium text-obsidian">{title}</h3>
      <p className="mt-3 text-sm text-obsidian/70">{description}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border/20 bg-bone/90 p-6 shadow-soft">
      <p className="text-xs font-medium tracking-widest text-obsidian/60">
        {step}
      </p>
      <h4 className="mt-2 font-medium text-obsidian">{title}</h4>
      <p className="mt-3 text-sm text-obsidian/70">{description}</p>
    </div>
  );
}
