import Link from "next/link";
import { Github, Linkedin, ArrowDownRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Pill } from "@/components/Pill";
import { CopyCmd } from "@/components/CopyCmd";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/data/site";
import { HackathonGallery } from "@/components/HackathonGallery";

function Nav() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <div className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="#" className="font-semibold tracking-tight no-underline">
            {site.name}
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden gap-4 sm:flex">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="text-sm text-slate-700 no-underline hover:text-indigo-700"
                >
                  {it.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href={site.socials[0]?.href ?? "https://github.com"}
                target="_blank"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-2 shadow-soft hover:bg-slate-50"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href={site.socials[1]?.href ?? "https://linkedin.com"}
                target="_blank"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-2 shadow-soft hover:bg-slate-50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-hero-glow">
      <Nav />

      <main>
        <Container>
          <header className="py-14 sm:py-20">
            <div className="section-card p-7 sm:p-10">
              <p className="text-sm text-slate-600">Hi, I&apos;m</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                {site.headline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CopyCmd value={site.npx} />
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm text-white no-underline shadow-soft hover:bg-slate-800"
                >
                  View projects <ArrowDownRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </header>

          <Section id="about" title="About">
            <div className="section-card p-5 sm:p-6 prose-like">
              {site.about.split("\n\n").map((para, idx) => (
                <p key={idx} className={idx === 0 ? "" : "mt-4"}>
                  {para}
                </p>
              ))}
            </div>
          </Section>

          <Section id="work" title="Work Experience">
            <div className="grid gap-4">
              {site.experience.map((e) => (
                <ExperienceCard key={`${e.org}-${e.role}`} item={e} />
              ))}
            </div>
          </Section>

          <Section id="certs" title="Certifications">
            <div className="section-card p-5 sm:p-6">
              <ul className="space-y-3">
                {site.certifications.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      target="_blank"
                      className="text-slate-800 underline hover:text-indigo-700"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="section-card p-5 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {site.skills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="projects"
            title="My Projects"
            subtitle="A few things I’ve built recently."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {site.projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>

            <div className="mt-6">
              <Link
                href={site.socials[0]?.href ?? "https://github.com"}
                target="_blank"
                className="text-sm text-slate-800 underline hover:text-indigo-700"
              >
                See all at GitHub
              </Link>
            </div>
          </Section>

          <Section id="hackathon" title={site.hackathon.title} subtitle={site.hackathon.subtitle}>
            <HackathonGallery photos={site.hackathon.photos} />
          </Section>


          <footer className="py-10">
            <div className="section-card p-5 sm:p-6">
              <p className="text-sm text-slate-600">
                {site.footer.creditText}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link
                  href={site.socials[0]?.href ?? "https://github.com"}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-slate-800 underline hover:text-indigo-700"
                >
                  GitHub <ArrowDownRight className="h-4 w-4" />
                </Link>
                <Link
                  href={site.socials[1]?.href ?? "https://linkedin.com"}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-slate-800 underline hover:text-indigo-700"
                >
                  LinkedIn <ArrowDownRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </footer>
        </Container>
      </main>
    </div>
  );
}
