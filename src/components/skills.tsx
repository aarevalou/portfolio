const skills = [
  { name: "React", level: "Experimentado" },
  { name: "TypeScript", level: "Experimentado" },
  { name: "JavaScript", level: "Intermedio" },
  { name: "HTML & CSS", level: "Intermedio" },
  { name: "Flutter", level: "Principiante" },
  { name: "Next.js", level: "Principiante" },
  { name: "Node.js", level: "Experimentado" },
  { name: "Git", level: "Experimentado" },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
          Skills
        </h2>
        <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground">
          Tecnologias y herramientas
        </h3>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <p className="text-sm font-semibold text-foreground">{skill.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
