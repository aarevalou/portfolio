export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
          Sobre mi
        </h2>
        <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground">
          Un poco sobre quien soy
        </h3>
        <div className="mt-8 space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Soy un desarrollador frontend con experiencia en la creacion de
            aplicaciones web modernas. Me especializo en React, TypeScript y el
            ecosistema de JavaScript.
          </p>
          <p>
            Disfruto construyendo productos que combinan un buen diseno con
            codigo robusto y mantenible. Siempre estoy aprendiendo nuevas
            tecnologias y mejorando mis habilidades.
          </p>
          <p>
            Cuando no estoy programando, me gusta [tus hobbies aqui].
          </p>
        </div>
      </div>
    </section>
  )
}
