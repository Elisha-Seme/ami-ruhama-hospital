import { serviceIcons, type ServiceIconKey } from "./icons";

export default function ServiceCard({
  title,
  summary,
  icon,
}: {
  title: string;
  summary: string;
  icon: string;
}) {
  const Icon = serviceIcons[icon as ServiceIconKey] ?? serviceIcons.heart;

  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-brand-50 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lift">
      {/* corner wash */}
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-brand-950">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{summary}</p>
      </div>
    </article>
  );
}
