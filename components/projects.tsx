import { ExternalLink, Github } from "lucide-react"

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
    tags: ["Next.js", "Node.js", "PostgreSQL"],
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
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`Demo de ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
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
