import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Social } from "@/components/Social";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Social />
    </main>
  );
};

export default Index;