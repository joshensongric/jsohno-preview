import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default Index;