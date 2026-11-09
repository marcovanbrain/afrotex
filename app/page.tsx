import { Navbar } from "@/components/navbar"
import { AudienceProvider } from "@/components/audience-context"
import { AudienceSelector } from "@/components/audience-selector"
import { HeroSection } from "@/components/hero-section"
import { HairTypesSection } from "@/components/hair-types-section"
import { CurlPatternSection } from "@/components/curl-pattern-section"
import { GrowthMethodsSection } from "@/components/growth-methods-section"
import { TipsSection } from "@/components/tips-section"
import { InclusiveCareSection } from "@/components/inclusive-care-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <AudienceProvider>
      <main>
        <Navbar />
        <HeroSection />
        <AudienceSelector />
        <HairTypesSection />
        <CurlPatternSection />
        <GrowthMethodsSection />
        <TipsSection />
        <InclusiveCareSection />
        <Footer />
      </main>
    </AudienceProvider>
  )
}
