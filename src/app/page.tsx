import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { Features } from '@/components/sections/Features';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Footer />
    </main>
  );
}
