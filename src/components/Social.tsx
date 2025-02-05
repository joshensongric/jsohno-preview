
import { Button } from "@/components/ui/button";
import { Github, Star, MessageSquare, Twitter, Laugh, TrendingUp, Users, Award, Rocket, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Social = () => {
  const whitePaperUrl = "https://firebasestorage.googleapis.com/v0/b/flexpertsdev-pb6ym6.appspot.com/o/JSohNO_White_Paper_Final%20(1).pdf?alt=media&token=ef54889b-2b7c-4c7f-b82d-3499e8ff3d97";
  const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <section className="py-20 bg-background/50" id="social">
      <div className="container">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="px-4 py-2 text-base font-medium flex items-center gap-2">
            <FileText className="w-4 h-4" />
            White Paper Available Now!
          </Badge>
        </div>

        <h2 className="text-4xl font-space font-bold text-white text-center mb-12">
          Join the Movement
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          <Card className="p-4 bg-primary/10 border-secondary/20">
            <div className="text-center">
              <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">14.2k</div>
              <div className="text-sm text-gray-400">GitHub Stars</div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/10 border-secondary/20">
            <div className="text-center">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">87k+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/10 border-secondary/20">
            <div className="text-center">
              <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">YC W24</div>
              <div className="text-sm text-gray-400">Y Combinator</div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/10 border-secondary/20">
            <div className="text-center">
              <Rocket className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">#2</div>
              <div className="text-sm text-gray-400">Product Hunt</div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-primary/10 border-secondary/20">
            <div className="flex items-start space-x-4">
              <div className="flex-1 space-y-4">
                <p className="text-xl text-gray-300 italic leading-relaxed">
                  "I'll be honest - when I first read about JSohNO, I felt completely lost. Had to read it three times to understand what was going on... but once I figured it out (maybe not 100%), it turned out to be pretty amazing. It actually got me excited about diving deeper into AI prompt engineering!"
                </p>
                <div className="flex items-center space-x-2 text-secondary">
                  <Laugh size={24} className="animate-bounce" />
                  <span className="text-sm font-medium">@esam on Discord</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

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
                  <MessageSquare className="mr-2" />
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
