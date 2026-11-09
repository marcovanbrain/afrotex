export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-sans text-2xl font-bold text-background mb-3">
              Cabelos & Texturas
            </h3>
            <p className="text-sm text-background/60 leading-relaxed max-w-sm">
              Um guia completo para você entender, cuidar e amar seus fios do
              jeito que eles são.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-background/40 mb-4 font-semibold">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Tipos de Cabelo", href: "#tipos" },
                { label: "Escala de Curvatura", href: "#curvatura" },
                { label: "Crescimento Capilar", href: "#crescimento" },
                { label: "Dicas de Cuidado", href: "#dicas" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-background/40 mb-4 font-semibold">
              Sobre
            </h4>
            <p className="text-sm text-background/60 leading-relaxed">
              Este site é um guia informativo e não substitui o
              acompanhamento de um profissional dermatologista ou
              tricologista.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-xs text-background/40">
            Cabelos & Texturas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
