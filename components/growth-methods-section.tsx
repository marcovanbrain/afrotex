"use client"

import Image from "next/image"
import { useAudience } from "./audience-context"
import {
  Droplets,
  Scissors,
  Apple,
  Moon,
  FlaskConical,
  ShieldCheck,
} from "lucide-react"

const methods = [
  {
    icon: Droplets,
    title: "Hidratação Profunda",
    description:
      "Cabelos bem hidratados são mais elásticos e resistentes à quebra. Faça hidratação profunda com máscaras nutritivas ao menos 1x por semana.",
    details: [
      "Use máscaras com ingredientes como aloe vera, mel e pantenol",
      "Deixe agir por 15-30 minutos com touca térmica",
      "Alterne entre hidratação, nutrição e reconstrução (cronograma capilar)",
    ],
  },
  {
    icon: Scissors,
    title: "Corte Regular",
    description:
      "Aparar as pontas a cada 3-4 meses evita pontas duplas que se propagam pelo fio, dando aparência de cabelo mais saudável e em crescimento.",
    details: [
      "Corte de 1 a 2 cm a cada trimestre",
      "Evite estilos que causem tração excessiva nas pontas",
      "Considere o corte em lua crescente (tradição popular)",
    ],
  },
  {
    icon: Apple,
    title: "Alimentação Balanceada",
    description:
      "O crescimento capilar começa de dentro para fora. Vitaminas do complexo B, ferro, zinco e biotina são essenciais para fios fortes.",
    details: [
      "Consuma proteínas (ovos, peixes, leguminosas)",
      "Inclua alimentos ricos em ferro e zinco",
      "Biotina presente em nozes, amêndoas e sementes",
    ],
  },
  {
    icon: Moon,
    title: "Descanso e Proteção Noturna",
    description:
      "O cabelo cresce durante o sono. Além do descanso adequado, proteger os fios com fronha de cetim ou seda reduz o atrito e a quebra.",
    details: [
      "Durma 7-8 horas por noite para o ciclo de crescimento",
      "Use fronha de cetim ou seda para reduzir atrito",
      "Faça penteados soltos como abacaxi ou tranças frouxas",
    ],
  },
  {
    icon: FlaskConical,
    title: "Óleos e Tônicos Capilares",
    description:
      "Óleos vegetais como rícino, alecrim e jojoba estimulam a circulação no couro cabeludo e nutrem os fios desde a raiz.",
    details: [
      "Massageie o couro cabeludo com óleo de rícino 2x por semana",
      "Óleo essencial de alecrim pode estimular o crescimento",
      "Tônicos com cafeína e aminoácidos fortalecem os folículos",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Proteção Térmica e Solar",
    description:
      "O calor de secadores e chapinhas, e a radiação UV, danificam a fibra capilar. Sempre proteja seus fios antes da exposição.",
    details: [
      "Aplique protetor térmico antes de usar fontes de calor",
      "Use chapéus ou sprays com filtro UV no verão",
      "Reduza a frequência de uso de ferramentas de calor",
    ],
  },
]

export function GrowthMethodsSection() {
  const { audience } = useAudience()
  const profileText = audience === "mulher"
    ? "Incluímos cuidados para diferentes comprimentos, fases hormonais e proteção contra tração."
    : "Incluímos cuidados para diferentes comprimentos, couro cabeludo, rotina de corte e barba."

  return (
    <section id="crescimento" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Left: image + intro */}
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hair-growth.jpg"
                alt="Produtos naturais para crescimento capilar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-2">
                  Crescimento Capilar
                </p>
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
                  Métodos para um cabelo mais forte e longo
                </h2>
              </div>
            </div>
          </div>

          {/* Right: methods */}
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed mb-2">
              O crescimento capilar saudável depende de um conjunto de hábitos
              consistentes. {profileText} Combinando cuidados internos e externos,
              é possível fortalecer os fios e preservar o couro cabeludo.
            </p>

            {methods.map((method) => {
              const Icon = method.icon
              return (
                <article
                  key={method.title}
                  className="rounded-2xl bg-card border border-border p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-lg font-bold text-card-foreground mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {method.description}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {method.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-card-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
