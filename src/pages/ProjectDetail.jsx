import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock, ExternalLink, Github, Lock } from "lucide-react";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/projectDetails";
import { Reveal } from "@/components/motion/Reveal";

const stripEmoji = (text) => text.replace(/^\p{Extended_Pictographic}\s*/u, "");

export const ProjectDetail = () => {
  const { id } = useParams();
  const index = projects.findIndex((p) => String(p.id) === id);
  const project = projects[index];

  if (!project) {
    return (
      <section className="container mx-auto px-4 py-32 text-left">
        <p className="mb-6 text-muted-foreground">Project not found.</p>
        <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </section>
    );
  }

  const detail = projectDetails[project.id];
  const next = projects[(index + 1) % projects.length];
  const techStack = detail?.techStack ?? [{ group: "Tech stack", items: project.tags.filter(Boolean) }];

  return (
    <section className="container mx-auto px-4 pb-24 pt-28 text-left md:pt-32">
      <Reveal>
        <Link
          to="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} /> All projects
        </Link>

        {project.badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-2/60 bg-accent-2/15 px-3 py-1 text-xs font-medium text-foreground">
            {project.status === "private" ? <Lock size={13} /> : <Clock size={13} />}
            {stripEmoji(project.badge)}
          </span>
        )}
        <h1 className="mt-5 max-w-4xl text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {project.title}
        </h1>
        {detail?.tagline && (
          <p className="mt-5 max-w-2xl font-serif text-xl italic text-primary md:text-2xl">{detail.tagline}</p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Live demo <ExternalLink size={15} />
            </a>
          )}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
              <Github size={16} /> View on GitHub
            </a>
          ) : (
            project.status === "private" && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
                <Lock size={14} /> Source code private while in development
              </span>
            )
          )}
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
          <img src={project.image} alt={project.title} className="aspect-[16/10] w-full object-cover" />
        </div>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-12">
          {detail ? (
            <>
              <Reveal>
                <p className="section-label mb-4">The problem</p>
                <p className="leading-relaxed text-muted-foreground">{detail.problem}</p>
              </Reveal>
              <Reveal>
                <p className="section-label mb-4">The solution</p>
                <p className="leading-relaxed text-muted-foreground">{detail.solution}</p>
              </Reveal>
              <Reveal>
                <p className="section-label mb-4">Key features</p>
                <ul className="space-y-3">
                  {detail.features.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </>
          ) : (
            <Reveal>
              <p className="section-label mb-4">Overview</p>
              <p className="leading-relaxed text-muted-foreground">{project.description}</p>
            </Reveal>
          )}
        </div>

        <aside className="space-y-10">
          <Reveal>
            <p className="section-label mb-4">Tech stack</p>
            <div className="space-y-5">
              {techStack.map(({ group, items }) => (
                <div key={group}>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{group}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-border px-3 py-1 text-xs text-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          {detail?.status && (
            <Reveal>
              <p className="section-label mb-4">Status</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{detail.status}</p>
            </Reveal>
          )}
        </aside>
      </div>

      <Reveal className="mt-20 border-t border-border pt-8">
        <Link to={`/projects/${next.id}`} className="group flex items-center justify-between gap-4">
          <span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Next project</span>
            <span className="mt-2 block text-lg text-foreground transition-colors group-hover:text-primary md:text-2xl">
              {next.title}
            </span>
          </span>
          <ArrowUpRight className="shrink-0 text-foreground" />
        </Link>
      </Reveal>
    </section>
  );
};
