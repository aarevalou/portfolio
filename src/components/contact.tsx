import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/aarevalou",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aarevalou",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "a.arevalou@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">

        <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground">
          Contacto
        </h3>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Abierto a nuevas oportunidades y colaboraciones. No dudes en
          escribirme.
        </p>

        <a
          href="mailto:tu@email.com"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Enviar email
        </a>

        <div className="mt-12 flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
