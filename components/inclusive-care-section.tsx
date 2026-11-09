"use client"

import { CircleUserRound, HeartPulse, Scissors, Sparkles } from "lucide-react"
import { useAudience } from "./audience-context"

const profiles = {
  mulher: {
    label: "Mulher",
    icon: CircleUserRound,
    intro: "Uma rotina pensada para diferentes comprimentos, texturas e momentos da vida.",
    focus: "Foco: proteção, saúde do couro cabeludo e manutenção da fibra.",
    tips: [
      "Escolha a finalização pela curvatura e porosidade, seja o cabelo curto, médio ou longo.",
      "Evite prender os fios molhados ou com muita tensão para reduzir quebra e tração.",
      "Em pós-parto, menopausa ou alterações hormonais, procure dermatologista se houver queda intensa.",
      "Mantenha proteção térmica e apare as pontas quando perceber ressecamento ou pontas duplas.",
    ],
  },
  homem: {
    label: "Homem",
    icon: Scissors,
    intro: "Cuidados práticos para cabelos curtos ou longos, diferentes curvaturas e rotina de barba.",
    focus: "Foco: limpeza adequada, hidratação e cuidado integrado entre cabelo, couro cabeludo e barba.",
    tips: [
      "Lave conforme oleosidade, suor e uso de pomadas; limpeza não precisa ressecar o couro cabeludo.",
      "Use condicionador também em fios curtos e escolha finalizadores leves para não pesar.",
      "Para barba, prefira produtos próprios e hidrate a pele sem aplicar fórmulas em áreas irritadas.",
      "Entradas, falhas ou queda persistente merecem avaliação profissional, sem automedicação.",
    ],
  },
} as const

export function InclusiveCareSection() {
  const { audience: profile, setAudience: setProfile } = useAudience()
  const content = profiles[profile]
  const Icon = content.icon

  return (
    <section id="para-todos" className="bg-secondary py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Guia personalizado</p>
          <h2 className="font-sans text-4xl font-bold text-foreground md:text-5xl">Escolha seu perfil</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Selecione uma opção para visualizar recomendações direcionadas. A curvatura e as necessidades do fio continuam sendo o principal critério para qualquer pessoa.
          </p>
        </div>

        <div className="mx-auto mb-8 flex max-w-md rounded-full border border-border bg-card p-1.5 shadow-sm" role="tablist" aria-label="Perfil de cuidados">
          {(Object.keys(profiles) as Array<keyof typeof profiles>).map((key) => {
            const item = profiles[key]
            const isActive = profile === key
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setProfile(key)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </button>
            )
          })}
        </div>

        <article className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10" role="tabpanel">
          <div className="mb-7 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-sans text-3xl font-bold text-card-foreground">Cuidados para {content.label.toLowerCase()}</h3>
              <p className="mt-2 text-muted-foreground">{content.intro}</p>
              <p className="mt-3 text-sm font-semibold text-primary">{content.focus}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {content.tips.map((tip) => (
              <div key={tip} className="flex items-start gap-3 rounded-2xl bg-secondary/60 p-4 text-sm leading-relaxed text-card-foreground">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-primary/20 bg-card/70 p-5 text-sm leading-relaxed text-muted-foreground">
          <HeartPulse className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p><strong className="text-foreground">Atenção:</strong> queda repentina, falhas, coceira persistente ou descamação devem ser avaliadas por dermatologista. Cosméticos não substituem diagnóstico ou tratamento.</p>
        </div>
      </div>
    </section>
  )
}
