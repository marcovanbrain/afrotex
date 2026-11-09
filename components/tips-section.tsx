"use client"

import { Sparkles, Heart, Flame, Leaf } from "lucide-react"
import { useAudience } from "./audience-context"

const tips = [
  {
    icon: Sparkles,
    title: "Cronograma Capilar",
    description:
      "Alterne entre hidratação, nutrição e reconstrução. Esse ciclo de 3 etapas garante que o cabelo receba tudo o que precisa para se manter saudável, forte e brilhante.",
    highlight: "Frequência: semanal",
  },
  {
    icon: Heart,
    title: "Técnica do Co-Wash",
    description:
      "Lavar o cabelo apenas com condicionador ajuda a manter a hidratação natural dos fios, especialmente para cabelos cacheados e crespos que tendem a ser mais secos.",
    highlight: "Ideal para: Tipos 3 e 4",
  },
  {
    icon: Flame,
    title: "Fitagem e Dedoliss",
    description:
      "A fitagem envolve separar o cabelo em mechas e aplicar creme, enquanto o dedoliss enrola cada mecha no dedo. Ambas as técnicas ajudam a definir os cachos.",
    highlight: "Ideal para: Tipos 2C a 4A",
  },
  {
    icon: Leaf,
    title: "Day After Perfeito",
    description:
      "Borrife uma mistura de água com condicionador nos fios, amasse de baixo para cima e reaplique gel apenas onde precisa. Seus cachos voltarão renovados.",
    highlight: "Ideal para: Todos os tipos",
  },
]

export function TipsSection() {
  const { audience } = useAudience()
  const profileTip = audience === "mulher"
    ? "Adapte a rotina ao comprimento, à textura e às mudanças hormonais."
    : "Adapte a rotina ao corte, à textura, ao couro cabeludo e à barba."

  return (
    <section id="dicas" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Técnicas Essenciais
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground text-balance">
            Dicas de Cuidado
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Técnicas e truques indispensáveis para manter seus fios sempre saudáveis
            e bonitos. {profileTip}
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {tips.map((tip) => {
            const Icon = tip.icon
            return (
              <article
                key={tip.title}
                className="group rounded-2xl bg-card border border-border p-8 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-card-foreground">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {tip.description}
                </p>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {tip.highlight}
                </span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
