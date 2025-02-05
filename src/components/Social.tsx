import { Button } from "@/components/ui/button";
import { Github, Star, Discord, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Social = () => {
  const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <section className="py-20 bg-background/50" id="social">
      <div className="container">
        <h2 className="text-4xl font-space font-bold text-white text-center mb-12">
          Join the Movement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-primary/20 border-secondary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-space font-bold text-white">The Origin Story</h3>
              <p className="text-gray-400">
                TJ Crigson was bartending at a Red Bull tent when he saw an influencer's laptop 
                open (while the guy was taking a leak). The screen showed LLM text-processing bugs. 
                TJ fixed it in 45 seconds, and left. That fix became JSohNO.
              </p>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => window.open(rickroll, '_blank')}
              >
                Read Full Story
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-primary/20 border-secondary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-space font-bold text-white">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(rickroll, '_blank')}
                >
                  <Github className="mr-2" />
                  Star Repo
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(rickroll, '_blank')}
                >
                  <Star className="mr-2" />
                  Product Hunt
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(rickroll, '_blank')}
                >
                  <Discord className="mr-2" />
                  Join Discord
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(rickroll, '_blank')}
                >
                  <Twitter className="mr-2" />
                  Follow Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};