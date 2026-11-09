import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-hair.jpg"
          alt="Cabelo natural bonito"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
            Guia Completo
          </p>
          <h1 className="font-sans text-5xl md:text-7xl font-bold leading-tight text-primary-foreground text-balance">
            Descubra a beleza do seu cabelo
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/80 max-w-lg">
            Conheça os tipos de finalização, entenda sua curvatura e aprenda
            métodos comprovados para um crescimento capilar saudável.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#tipos"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-transform hover:scale-105"
            >
              Explorar Tipos
            </a>
            <a
              href="#crescimento"
              className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Crescimento Capilar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
