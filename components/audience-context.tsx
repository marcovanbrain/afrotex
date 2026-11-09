"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Audience = "mulher" | "homem"

const AudienceContext = createContext<{
  audience: Audience
  setAudience: (audience: Audience) => void
} | null>(null)

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("mulher")
  return <AudienceContext.Provider value={{ audience, setAudience }}>{children}</AudienceContext.Provider>
}

export function useAudience() {
  const context = useContext(AudienceContext)
  if (!context) throw new Error("useAudience deve ser usado dentro de AudienceProvider")
  return context
}
