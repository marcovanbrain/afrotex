"use client"

import { useState } from "react"
import { useAudience } from "./audience-context"

const curlPatterns = [
  {
    id: "1",
    range: "1A – 1C",
    title: "Liso",
    icon: "—",
    color: "bg-primary/10 text-primary",
    details: [
      {
        code: "1A",
        description: "Fios finos e completamente retos, sem nenhuma ondulação. Muito brilhante mas pode parecer sem volume.",
        tips: "Use shampoo seco para dar volume na raiz. Evite produtos pesados que deixam o cabelo oleoso.",
      },
      {
        code: "1B",
        description: "Fios de espessura média com corpo, ainda retos mas com mais movimento que o 1A.",
        tips: "Mousse leve pode ajudar a dar forma. Seque com difusor para mais textura.",
      },
      {
        code: "1C",
        description: "Fios grossos e retos, resistentes a modelagem mas com mais volume natural.",
        tips: "Óleos leves como argan ajudam a controlar o frizz sem pesar.",
      },
    ],
  },
  {
    id: "2",
    range: "2A – 2C",
    title: "Ondulado",
    icon: "~",
    color: "bg-accent/10 text-accent",
    details: [
      {
        code: "2A",
        description: "Ondas suaves em formato de S, geralmente a partir da metade do comprimento. Ondas finas e soltas.",
        tips: "Amasse os fios com gel leve para definir. Evite escovar após secar.",
      },
      {
        code: "2B",
        description: "Ondas mais definidas, formando S da raiz às pontas. Mais propensas ao frizz.",
        tips: "Use leave-in e gel com fixação média. A técnica de fitagem ajuda a definir.",
      },
      {
        code: "2C",
        description: "Ondas bem marcadas, quase cachos. Volume alto e tendência forte ao frizz.",
        tips: "Hidratação profunda semanal. Técnica de plopping para secar sem deformar.",
      },
    ],
  },
  {
    id: "3",
    range: "3A – 3C",
    title: "Cacheado",
    icon: "S",
    color: "bg-chart-5/10 text-chart-5",
    details: [
      {
        code: "3A",
        description: "Cachos largos e soltos, do tamanho de um giz de cera. Bastante brilho e definição natural.",
        tips: "Creme de pentear com fixação leve. Finalizar amassando de baixo para cima.",
      },
      {
        code: "3B",
        description: "Cachos médios em espiral, bem definidos. Volume considerável e textura densa.",
        tips: "Hidratação e nutrição regulares. Use técnica de dedoliss para mais definição.",
      },
      {
        code: "3C",
        description: "Cachos apertados e compactos, do tamanho de um lápis. Muita densidade e encolhimento.",
        tips: "Misture creme + gel para fixação duradoura. Day after com borrifador é essencial.",
      },
    ],
  },
  {
    id: "4",
    range: "4A – 4C",
    title: "Crespo",
    icon: "Z",
    color: "bg-primary/10 text-primary",
    details: [
      {
        code: "4A",
        description: "Crespo com cachos pequenos e bem definidos. Padrão de espiral apertado visível.",
        tips: "Umectação com óleos vegetais. Selar com creme de pentear e gel.",
      },
      {
        code: "4B",
        description: "Fios em formato Z, menos definição de cacho mas muito volume. Textura algodão.",
        tips: "Técnica LOC (Líquido, Óleo, Creme). Proteja à noite com touca de cetim.",
      },
      {
        code: "4C",
        description: "Curvatura extremamente apertada, maior encolhimento. Fio mais frágil e seco.",
        tips: "Hidratação intensa com máscaras ricas. Evite manipulação excessiva. Penteados protetores são aliados.",
      },
    ],
  },
]

export function CurlPatternSection() {
  const { audience } = useAudience()
  const [activePattern, setActivePattern] = useState("1")

  const current = curlPatterns.find((p) => p.id === activePattern)

  return (
    <section
      id="curvatura"
      className="py-24 bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Guia de Curvatura
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground text-balance">
            Escala de Curvatura
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            De 1A a 4C, cada curvatura tem suas particularidades. Para {audience === "mulher" ? "mulheres" : "homens"}, selecione um grupo para explorar os subtipos.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {curlPatterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => setActivePattern(pattern.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activePattern === pattern.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-card-foreground border border-border hover:border-primary/30"
              }`}
            >
              <span className="text-lg font-bold">{pattern.icon}</span>
              <span>{pattern.title}</span>
              <span className="text-xs opacity-70">{pattern.range}</span>
            </button>
          ))}
        </div>

        {/* Detail cards */}
        {current && (
          <div className="grid gap-6 md:grid-cols-3">
            {current.details.map((detail) => (
              <div
                key={detail.code}
                className="rounded-2xl bg-card border border-border p-6 transition-shadow hover:shadow-md"
              >
                <span
                  className={`inline-flex items-center justify-center h-12 w-12 rounded-xl text-lg font-bold mb-4 ${current.color}`}
                >
                  {detail.code}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {detail.description}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                    Dica de Cuidado
                  </p>
                  <p className="text-sm text-card-foreground leading-relaxed">
                    {detail.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
