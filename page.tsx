"use client"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import ExpertiseSection from "@/components/expertise-section"
import AIGrowthSection from "@/components/ai-growth-section"
import MetricsSection from "@/components/metrics-section"
import CaseStudiesSection from "@/components/case-studies-section"
import FreeToolsSection from "@/components/free-tools-section"
import FinancialInsightsSection from "@/components/financial-insights-section"
import KnowledgeSection from "@/components/knowledge-section"
import BlogSection from "@/components/blog-section"
import AdditionalSections from "@/components/additional-sections"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import PremiumLoader from "@/components/premium-loader"
import PremiumCursor from "@/components/premium-cursor"
import ScrollProgress from "@/components/scroll-progress"
import FloatingElements from "@/components/floating-elements"
import PremiumTransitions from "@/components/premium-transitions"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <PremiumLoader />
        <PremiumCursor />
        <ScrollProgress />
        <FloatingElements />

        <PremiumTransitions>
          <Navigation />

          <main className="relative">
            <HeroSection />
            <TestimonialsSection />
            <ExpertiseSection />
            <AIGrowthSection />
            <MetricsSection />
            <CaseStudiesSection />
            <FreeToolsSection />
            <FinancialInsightsSection />
            <KnowledgeSection />
            <BlogSection />
            <AdditionalSections />
            <AboutSection />
            <ContactSection />
          </main>

          <Footer />
        </PremiumTransitions>
      </div>
    </ThemeProvider>
  )
}
