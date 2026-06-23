import type { ReactNode } from "react";

/**
 * ImpactCard — highlights a single impact/outreach theme with an icon and copy.
 * Used on the home + impact pages.
 */
export default function ImpactCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="flex h-full gap-4 rounded-3xl border border-brand-50 bg-white p-6 shadow-soft">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-care-50 text-care-600">
        {icon}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-brand-950">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{body}</p>
      </div>
    </article>
  );
}
