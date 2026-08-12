export function HeroSection() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_82%_18%,rgba(139,92,246,.16),transparent_30%),radial-gradient(circle_at_15%_75%,rgba(255,79,216,.11),transparent_28%)] px-5 pb-16 pt-32 md:px-8">
      <div className="absolute left-[12%] top-28 h-60 w-60 rounded-full bg-lime/20 blur-[100px]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_360px]">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[.2em] text-white/60"><span className="h-2 w-2 animate-pulse rounded-full bg-lime shadow-[0_0_18px_#ff4fd8]" />Available for select projects · 2025</div>
          <h1 className="font-display text-[clamp(4.2rem,12vw,10.5rem)] font-bold uppercase leading-[.78] tracking-[-.075em]">
            Creative<br/><span className="text-lime">Developer</span>
          </h1>
          <div className="mt-10 flex flex-col gap-7 border-l border-white/20 pl-5 md:ml-[40%] md:max-w-xl">
            <p className="text-lg leading-relaxed text-white/65 md:text-xl">I design and build memorable digital experiences where sharp engineering meets expressive motion.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-lime px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition hover:scale-105">Explore my work ↓</a>
              <a href="#contact" className="rounded-full border border-white/20 px-7 py-3.5 font-mono text-xs uppercase tracking-wider transition hover:border-white">Start a project ↗</a>
            </div>
          </div>
        </div>
        <aside className="group relative z-10 mx-auto w-full max-w-[360px] lg:mx-0">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[conic-gradient(from_0deg,rgba(255,79,216,.35),rgba(139,92,246,.3),transparent_60%)] opacity-60 blur-3xl" />
          <div className="float overflow-hidden rounded-[2rem] bg-gradient-to-br from-lime via-[#c026d3] to-[#7c3aed] p-px shadow-[0_0_80px_rgba(168,85,247,.28)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#12091b]/95 p-6 backdrop-blur">
              <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent shine" />

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0">
                  <div className="spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#ff4fd8,#8b5cf6,#ff4fd8)]" />
                  <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-[#12091b] font-display text-xl font-bold tracking-tight">
                    H<span className="text-lime">N</span>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg font-bold leading-tight">Hannan</div>
                  <div className="truncate font-mono text-[10px] uppercase tracking-[.18em] text-white/45">Creative Web Developer</div>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-lime">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />Open to work
                  </div>
                </div>
              </div>

              <p className="mt-5 border-l border-white/15 pl-3 text-sm leading-relaxed text-white/60">
                Currently crafting motion-led interfaces and design systems that feel alive.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  { v: '5+', l: 'Years' },
                  { v: '40+', l: 'Projects' },
                  { v: '25+', l: 'Clients' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-white/10 bg-white/[.04] py-3 transition group-hover:border-lime/30">
                    <div className="font-display text-xl font-bold text-lime">{s.v}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-white/40">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'Next.js', 'Motion', 'Node'].map((t) => (
                  <span key={t} className="rounded-full border border-white/12 bg-white/[.04] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/55">{t}</span>
                ))}
              </div>

              <a href="#contact" className="mt-6 flex items-center justify-between rounded-xl border border-white/12 bg-white/[.04] px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-white/70 transition hover:border-lime/50 hover:bg-lime/10 hover:text-white">
                Let’s build something<span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[.3em] text-white/35"><span>Scroll</span><span className="pulse-line h-8 w-px origin-top bg-lime" /></div>
    </section>
  );
}
