"use client"

import Image from "next/image"
import { useAudience } from "./audience-context"

const hairTypes = [
  {
    type: "Tipo 1",
    name: "Liso",
    image: "/images/hair-straight.jpg",
    description:
      "Cabelo naturalmente reto, sem ondulação. Tende a ser mais oleoso devido ao sebo que escorre facilmente pelo fio. Brilhoso e macio, mas pode parecer sem volume.",
    subtypes: [
      { code: "1A", label: "Fino e reto" },
      { code: "1B", label: "Médio com mais corpo" },
      { code: "1C", label: "Grosso e pesado" },
    ],
  },
  {
    type: "Tipo 2",
    name: "Ondulado",
    image: "/images/hair-wavy.jpg",
    description:
      "Possui ondas em formato de 'S' ao longo do comprimento. Um meio-termo entre liso e cacheado, com tendência ao frizz. Pode variar de ondas leves a ondas bem definidas.",
    subtypes: [
      { code: "2A", label: "Ondas leves e soltas" },
      { code: "2B", label: "Ondas definidas em S" },
      { code: "2C", label: "Ondas marcadas e volumosas" },
    ],
  },
  {
    type: "Tipo 3",
    name: "Cacheado",
    image: "/images/hair-curly.jpg",
    description:
      "Cachos bem formados em espiral, com bastante volume e definição natural. Tende a ser mais seco e precisa de hidratação constante para manter a forma e o brilho.",
    subtypes: [
      { code: "3A", label: "Cachos largos e soltos" },
      { code: "3B", label: "Cachos médios em espiral" },
      { code: "3C", label: "Cachos apertados e compactos" },
    ],
  },
  {
    type: "Tipo 4",
    name: "Crespo",
    image: "/images/hair-coily.jpg",
    description:
      "Fios com curvatura muito apertada, podendo formar zigue-zague. É o tipo mais frágil e seco, mas também o mais volumoso e versátil. Precisa de muita hidratação e cuidado.",
    subtypes: [
      { code: "4A", label: "Crespo com cachos definidos" },
      { code: "4B", label: "Crespo em formato Z" },
      { code: "4C", label: "Crespo bem apertado" },
    ],
  },
]

export function HairTypesSection() {
  const { audience } = useAudience()
  const profileLabel = audience === "mulher" ? "para mulheres" : "para homens"

  return (
    <section id="tipos" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Classificação Capilar
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground text-balance">
            Tipos de Cabelo e Finalização
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada cabelo é único. Entender seu tipo é o primeiro passo para uma rotina
            de cuidados personalizada e eficaz {profileLabel}.
          </p>
        </div>

        {/* Hair type cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {hairTypes.map((hair) => (
            <article
              key={hair.type}
              className="group overflow-hidden rounded-2xl bg-card border border-border transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={hair.image}
                  alt={`Cabelo ${hair.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {hair.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-sans text-2xl font-bold text-card-foreground mb-2">
                  {hair.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                  {hair.description}
                </p>

                {/* Subtypes */}
                <div className="flex flex-wrap gap-2">
                  {hair.subtypes.map((sub) => (
                    <span
                      key={sub.code}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      <span className="font-bold">{sub.code}</span>
                      <span className="text-muted-foreground">
                        {sub.label}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
