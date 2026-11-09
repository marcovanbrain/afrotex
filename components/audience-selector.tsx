"use client"

import { Scissors, UserRound } from "lucide-react"
import { useAudience, type Audience } from "./audience-context"

const options: { id: Audience; label: string; description: string }[] = [
  { id: "mulher", label: "Mulher", description: "Rotinas, comprimento e fases hormonais" },
  { id: "homem", label: "Homem", description: "Cabelo, couro cabeludo e barba" },
]

export function AudienceSelector() {
  const { audience, setAudience } = useAudience()
  return (
    <section className="border-y border-border bg-card py-8" aria-label="Personalize seu guia">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Seu guia personalizado</p>
          <h2 className="mt-1 font-sans text-2xl font-bold text-foreground">Para quem é esta rotina?</h2>
          <p className="mt-1 text-sm text-muted-foreground">Escolha um perfil para adaptar as recomendações em todo o site.</p>
        </div>
        <div className="flex gap-2 rounded-2xl bg-secondary p-1.5" role="tablist" aria-label="Público">
          {options.map((option) => {
            const active = audience === option.id
            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setAudience(option.id)}
                className={`flex min-w-32 items-center gap-2 rounded-xl px-4 py-3 text-left transition-colors ${active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                {option.id === "mulher" ? <UserRound className="h-4 w-4" aria-hidden="true" /> : <Scissors className="h-4 w-4" aria-hidden="true" />}
                <span>
                  <span className="block text-sm font-semibold">{option.label}</span>
                  <span className={`block text-[10px] ${active ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{option.description}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
