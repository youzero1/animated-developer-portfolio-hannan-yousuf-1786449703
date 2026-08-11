const projects = [
  { n: '01', title: 'NOCTURNE', type: 'Immersive commerce', tags: ['React', 'WebGL', 'Motion'], colors: 'from-[#2d1754] via-[#8d51e8] to-[#ff8cdd]' },
  { n: '02', title: 'KINETIC', type: 'Creative studio', tags: ['TypeScript', 'GSAP', 'CMS'], colors: 'from-[#182818] via-[#65b12c] to-[#d7ff52]' },
  { n: '03', title: 'ARCHIVE 24', type: 'Digital publication', tags: ['Next.js', 'Editorial', 'API'], colors: 'from-[#182733] via-[#2e8bb5] to-[#96ebff]' },
];

export function ProjectsSection() {
  return (
    <section id="work" className="bg-[#eef0e8] px-5 py-28 text-ink md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between"><div><div className="font-mono text-xs uppercase tracking-[.2em]">02 — Selected work</div><h2 className="mt-5 text-6xl font-bold tracking-[-.06em] md:text-9xl">PROJECTS<span className="text-[#97a08d]">.</span></h2></div><span className="hidden max-w-48 text-right text-sm text-black/45 md:block">A selection of digital experiences made with talented people.</span></div>
        <div className="space-y-7">{projects.map((project, i) => <article key={project.title} className={`group grid gap-0 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm md:grid-cols-2 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
          <div className={`relative min-h-80 overflow-hidden bg-gradient-to-br ${project.colors} p-8 md:min-h-[430px]`}><div className="absolute -right-12 top-14 h-64 w-64 rotate-12 rounded-[3rem] border border-white/25 bg-black/20 shadow-2xl backdrop-blur transition duration-700 group-hover:rotate-[-4deg] group-hover:scale-110"><div className="m-5 h-3 w-20 rounded bg-white/40"/><div className="m-5 mt-32 h-16 rounded-xl bg-white/20"/></div><span className="relative z-10 rounded-full border border-white/30 bg-black/20 px-3 py-1 font-mono text-[10px] text-white backdrop-blur">FEATURED / {project.n}</span></div>
          <div className="flex flex-col justify-between p-8 md:p-12"><div><span className="font-mono text-xs uppercase tracking-widest text-black/40">{project.type}</span><h3 className="mt-4 text-5xl font-bold tracking-[-.05em] md:text-7xl">{project.title}</h3><p className="mt-6 max-w-md text-black/50">A distinctive digital experience built around clarity, rhythm, and an uncompromising attention to interaction.</p></div><div className="mt-12 flex items-end justify-between"><div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-black/15 px-3 py-1.5 font-mono text-[10px] uppercase">{tag}</span>)}</div><a href="#contact" aria-label={`Ask about ${project.title}`} className="grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-white transition group-hover:rotate-45 group-hover:bg-lime group-hover:text-ink">↗</a></div></div>
        </article>)}</div>
      </div>
    </section>
  );
}
