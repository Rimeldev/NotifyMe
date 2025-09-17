import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import UseCasesSection from '@/components/landing/use-cases-section';
import ProblemSection from '@/components/landing/problem-section';
import SolutionSection from '@/components/landing/solution-section';
import DemoSection from '@/components/landing/demo-section';
import SocialProofSection from '@/components/landing/social-proof-section';
import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <UseCasesSection />
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <SocialProofSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}