import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <title>Dev Portfolio</title>
        <meta name="description" content="Portafolio de desarrollador - React & TypeScript" />
      </head>
      <body className="font-sans antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  )
}
