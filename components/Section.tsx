import { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-10 sm:py-14">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
