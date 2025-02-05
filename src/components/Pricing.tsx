import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Pricing = () => {
  return (
    <section className="py-20 bg-primary" id="pricing">
      <div className="container">
        <h2 className="text-4xl font-space font-bold text-white text-center mb-12">
          Simple Pricing
        </h2>
        <Card className="max-w-md mx-auto p-8 bg-background/50 backdrop-blur">
          <div className="text-center">
            <h3 className="text-2xl font-space font-bold text-secondary mb-2">
              Beta Access
            </h3>
            <div className="text-5xl font-bold text-white mb-4">FREE</div>
            <p className="text-gray-300 mb-6">
              (until we figure out how to monetize this thing)
            </p>
            <Button className="w-full bg-secondary hover:bg-secondary/80 text-primary font-bold">
              Get Started Now
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};