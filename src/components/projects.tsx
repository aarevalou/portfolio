import { ExternalLink, Figma, Github } from "lucide-react";

const projects = [
  {
    title: "Hardmony",
    description:
      "Diseño UX/UI de una aplicación informativa sobre la comunidad de estilo de música Hardstyle Dance Music (HDM).",
    tags: ["UX/UI", "Figma", "Mobile"],
    live: "https://www.figma.com/design/OBBzjj5MOnSoGBpBL8blLL/Mock-up-ET2?node-id=0-1&t=1nUwoq3MbjrcKXMK-1",
    image: "static/projects/hardmony.png",
  },
  {
    title: "Intranet UFRO",
    description:
      "Diseño UX/UI de una aplicación de Intranet para la Universidad de la Frontera.",
    tags: ["UX/UI", "Figma", "Mobile"],
    live: "https://www.figma.com/design/mduCljEQshk0zsT9Dk7ZSG/Untitled?node-id=2-16&p=f",
    image: "static/projects/intranet.png",
  },
  {
    title: "Hardtech",
    description:
      "Diseño UX/UI de una página Web de venta de artículos de Hardware",
    tags: ["UX/UI", "Figma", "Mobile"],
    live: "https://www.figma.com/design/JZDBFe5Jmd20vJ1nCkKUj8/Mockup-HardTech?node-id=0-1&p=f",
    image: "static/projects/hardtech.png",
  },
];

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
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h4>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.live}
                          className="text-muted-foreground transition-colors hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
