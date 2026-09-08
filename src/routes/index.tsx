import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { content, type Lang } from "@/lib/beeplus-content";
import coverageMap from "@/assets/egypt-coverage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bee Plus — شبكة تحصيل الفواتير الإلكترونية في مصر" },
      {
        name: "description",
        content:
          "Bee Plus تجمع فواتير الكهرباء والمياه والغاز عبر التطبيق ونقاط البيع وشبكة الوكلاء في كل محافظات مصر.",
      },
      { property: "og:title", content: "Bee Plus — شبكة تحصيل الفواتير الإلكترونية" },
      {
        property: "og:description",
        content:
          "شبكة دفع إلكتروني تربط المرافق بملايين المواطنين — تحصيل فوري في ثوانٍ عبر كل مصر.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const t = content[lang];

  return (
    <div
      dir={t.dir}
      className="bg-background text-foreground font-body antialiased selection:bg-honey/30"
    >
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-honey/15">
        <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 grid place-items-center rotate-6 bg-honey text-honey-foreground font-display font-bold text-lg rounded-md">
              {t.brand.mark}
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-sm tracking-tight">
                {t.brand.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                {t.brand.sub}
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="text-xs font-semibold px-3 py-1.5 rounded-md border border-foreground/20 text-foreground/80 hover:border-honey/50 hover:text-honey transition-colors"
            >
              {t.langBtn}
            </button>
            <a
              href="#contact"
              className="text-sm font-semibold px-4 py-2 rounded-md bg-honey text-honey-foreground hover:bg-honey/90 transition-colors ring-1 ring-honey/40"
            >
              {t.contactCta}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-background">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-24 -left-40 h-[600px] w-[900px] rotate-[-18deg] bg-panel" />
            <div className="absolute -top-24 -left-40 h-[600px] w-[900px] rotate-[-18deg] border-b-2 border-honey/50" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 h-[2px] w-[420px] rotate-[-24deg] bg-honey/30" />
          </div>
          <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="anim-rise inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-panel border border-honey/25 text-xs text-honey mb-8">
                <span className="size-1.5 rounded-full bg-honey" />
                {t.hero.badge}
              </div>
              <h1 className="anim-rise font-display text-balance text-4xl md:text-6xl font-semibold leading-tight tracking-tight [animation-delay:80ms]">
                {t.hero.title1}
                <br />
                <span className="text-honey">{t.hero.title2}</span>
              </h1>
              <p className="anim-rise text-pretty text-foreground/60 text-base md:text-lg mt-6 max-w-xl [animation-delay:160ms]">
                {t.hero.body}
              </p>
              <div className="anim-rise flex flex-wrap items-center gap-4 mt-10 [animation-delay:240ms]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-lg bg-honey text-honey-foreground text-sm font-semibold hover:bg-honey/90 transition-colors ring-1 ring-honey/40"
                >
                  {t.hero.primary}
                  <span className="text-base">{t.dir === "rtl" ? "←" : "→"}</span>
                </a>
                <a
                  href="#network"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-lg border border-foreground/20 text-sm font-semibold text-foreground hover:border-honey/50 transition-colors"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COLLECTION NETWORK */}
        <section id="network" className="bg-panel border-y border-honey/10">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="flex items-end justify-between gap-6 mb-14">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-honey mb-3">
                  {t.network.eyebrow}
                </div>
                <h2 className="font-display text-balance text-3xl md:text-4xl font-medium leading-tight">
                  {t.network.title}
                </h2>
              </div>
              <div className="hidden md:block font-display text-5xl font-semibold text-foreground/10 leading-none select-none">
                01
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-4">
              <div className="md:col-span-7 bg-background rounded-xl ring-1 ring-border p-8 md:p-10 overflow-hidden relative">
                <div
                  className="absolute -bottom-16 -left-10 size-64 rounded-full bg-honey/10 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="size-10 grid place-items-center rounded-md bg-honey text-honey-foreground font-display font-bold mb-6">
                    POS
                  </div>
                  <h3 className="font-display text-2xl font-medium text-balance mb-3">
                    {t.network.pos.title}
                  </h3>
                  <p className="text-pretty text-foreground/60 text-sm max-w-md mb-8">
                    {t.network.pos.body}
                  </p>
                  <div className="grid grid-cols-2 gap-6 max-w-sm">
                    {t.network.pos.stats.map((s, i) => (
                      <div key={s.label}>
                        <div
                          className={`font-display text-3xl font-semibold leading-none ${
                            i === 0 ? "text-honey" : "text-foreground"
                          }`}
                        >
                          {s.value}
                        </div>
                        <div className="text-xs text-foreground/50 mt-2">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-4">
                {[t.network.app, t.network.agents].map((c) => (
                  <div
                    key={c.title}
                    className="flex-1 bg-background rounded-xl ring-1 ring-border p-7"
                  >
                    <div className="text-honey text-xs font-semibold tracking-wide mb-2">
                      {c.eyebrow}
                    </div>
                    <h3 className="font-display text-xl font-medium mb-2">{c.title}</h3>
                    <p className="text-pretty text-foreground/55 text-sm">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section id="coverage" className="bg-background">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-honey mb-3">
                  {t.coverage.eyebrow}
                </div>
                <h2 className="font-display text-balance text-3xl md:text-4xl font-medium leading-tight mb-6">
                  {t.coverage.title}
                </h2>
                <p className="text-pretty text-foreground/60 text-sm max-w-md">{t.coverage.body}</p>
                <div className="grid grid-cols-2 gap-8 mt-10 max-w-md">
                  {t.coverage.stats.map((s) => (
                    <div
                      key={s.label}
                      className={`border-t-2 pt-4 ${s.hl ? "border-honey" : "border-foreground/20"}`}
                    >
                      <div
                        className={`font-display text-4xl font-semibold leading-none ${
                          s.hl ? "text-honey" : "text-foreground"
                        }`}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs text-foreground/50 mt-2">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={coverageMap}
                  alt={t.coverage.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full aspect-square object-cover rounded-xl ring-1 ring-border bg-panel"
                />
                <div className="absolute -bottom-5 -right-5 px-4 py-3 rounded-lg bg-honey text-honey-foreground font-display text-sm font-semibold shadow-lg">
                  {t.coverage.badge}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="bg-panel border-y border-honey/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-8">
              {t.partners.eyebrow}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {t.partners.items.map((p) => (
                <div
                  key={p}
                  className="grid place-items-center text-center px-3 h-20 rounded-lg bg-background ring-1 ring-border font-display font-medium text-foreground/60 text-sm hover:ring-honey/40 transition-all"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-background">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="text-xs uppercase tracking-[0.25em] text-honey mb-3">
              {t.features.eyebrow}
            </div>
            <h2 className="font-display text-balance text-3xl md:text-4xl font-medium leading-tight mb-14">
              {t.features.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.features.items.map((f) => (
                <div key={f.t} className="bg-panel rounded-lg ring-1 ring-border p-7">
                  <div className="font-display text-honey text-2xl font-semibold mb-4 leading-none">
                    {f.k}
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{f.t}</h3>
                  <p className="text-pretty text-foreground/55 text-sm">{f.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-panel border-t border-honey/15">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="font-display text-balance text-3xl font-medium leading-tight mb-3">
                  {t.contact.title}
                </h2>
                <p className="text-pretty text-foreground/55 text-sm">{t.contact.body}</p>
              </div>
              <div className="text-start md:text-end">
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-2">
                  {t.contact.emailLabel}
                </div>
                <a
                  href="mailto:info@beeplus.com.eg"
                  className="font-display text-lg md:text-xl font-medium text-honey hover:underline underline-offset-4"
                >
                  info@beeplus.com.eg
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-8 text-xs text-foreground/40">
          {t.rights}
        </div>
      </footer>
    </div>
  );
}
