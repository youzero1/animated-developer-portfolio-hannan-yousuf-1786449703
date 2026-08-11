import { useState } from 'react';

const quotes = [
  ['Alex brought rare care to every detail. The result was faster, clearer, and far more memorable than we imagined.', 'Maya Chen', 'Founder, Nocturne'],
  ['The perfect balance of an engineer’s rigor and a designer’s eye. Our team loved the process as much as the outcome.', 'Jon Bell', 'Creative Director, Kinetic'],
  ['A truly exceptional collaborator — thoughtful, fast, and always pushing the work toward something more distinctive.', 'Leila Ward', 'Product Lead, Archive 24'],
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [quote, name, title] = quotes[active];
  return (
    <section className="border-y border-white/10 bg-panel px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl text-center"><div className="font-mono text-xs uppercase tracking-[.22em] text-lime">Kind words</div><div className="mt-8 text-7xl leading-none text-lime">“</div><blockquote className="mx-auto -mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">{quote}</blockquote><div className="mt-10 font-semibold">{name}</div><div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/35">{title}</div><div className="mt-10 flex justify-center gap-3">{quotes.map((_, i) => <button key={i} type="button" onClick={() => setActive(i)} aria-label={`Show testimonial ${i + 1}`} className={`h-2 rounded-full transition-all ${active === i ? 'w-8 bg-lime' : 'w-2 bg-white/25 hover:bg-white/50'}`} />)}</div></div>
    </section>
  );
}
