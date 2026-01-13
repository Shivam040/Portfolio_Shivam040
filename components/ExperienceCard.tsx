import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Experience } from "@/data/site";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="section-card p-5 sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <div className="text-base font-semibold text-slate-900">
            {item.org}
          </div>
          <div className="text-sm text-slate-600">{item.role}</div>
        </div>
        <div className="text-sm text-slate-500">{item.date}</div>
      </div>

      <p className="mt-4 whitespace-pre-line text-slate-700 leading-relaxed">
        {item.description}
      </p>

      {item.link ? (
        <div className="mt-4">
          <Link
            href={item.link.href}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-slate-800 underline hover:text-indigo-700"
          >
            {item.link.label} <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
