export default function ValueCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <article className="relative h-full rounded-3xl border border-brand-50 bg-white p-6 shadow-soft">
      <span
        aria-hidden
        className="font-display text-4xl font-bold text-brand-100"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-1 font-display text-lg font-bold text-brand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
      <span className="mt-4 block h-1 w-10 rounded-full bg-gradient-to-r from-brand-500 to-gold-400" />
    </article>
  );
}
