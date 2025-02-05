import { ArrowRight, Zap, DollarSign, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed",
      description: "Processes and recombines text with near-zero latency.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Savings",
      description: "Cut your LLM costs by up to 70% with our totally real compression.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "AI-First",
      description: "Purpose-built for sending AI-compatible payloads without hallucinations.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="features">
      <div className="container">
        <h2 className="text-4xl font-space font-bold text-white text-center mb-12">
          Why JSohNO?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-primary/20 border-secondary/20">
              <div className="text-secondary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-space font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};