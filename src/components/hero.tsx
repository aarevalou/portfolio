import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
          Future Developer
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Alejandro Arévalo C.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Apasionado por el diseño UX/UI, el desarrollo frontend y mobile, enfocado en crear experiencias digitales modernas y funcionales.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contacto
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="mt-20 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
