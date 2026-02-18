const projects = [
  {
    title: "Proyecto 1",
    description:
      "Breve descripcion de tu proyecto. Que problema resuelve y que tecnologias usaste.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Proyecto 2",
    description:
      "Breve descripcion de tu proyecto. Que problema resuelve y que tecnologias usaste.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Proyecto 3",
    description:
      "Breve descripcion de tu proyecto. Que problema resuelve y que tecnologias usaste.",
    tags: ["React", "API REST", "CSS Modules"],
    github: "#",
    live: "#",
  },
]

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
          Proyectos
        </h2>
        <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground">
          Trabajo seleccionado
        </h3>
        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`GitHub de ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`Demo de ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
