// import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Pill } from "@/components/Pill";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="section-card overflow-hidden">
      {/* <div className="relative h-44 w-full bg-slate-50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div> */}

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        {project.links?.length ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-soft hover:bg-slate-50"
              >
                {l.label} <ExternalLink className="h-4 w-4" />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
