
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-background text-white p-4">
      <div className="max-w-4xl text-center">
        <h1 className="font-space text-5xl md:text-7xl font-bold mb-6 animate-float">
          What If AI Encoding Wasn't A{" "}
          <span className="text-secondary animate-glow">Total Dumpster Fire?</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          You don't know what 'tokenization errors' are, but you know they cost you money.
        </p>
        <Button 
          className="bg-secondary hover:bg-secondary/80 text-primary font-bold text-lg px-8 py-6"
          onClick={() => window.open('https://firebasestorage.googleapis.com/v0/b/flexpertsdev-pb6ym6.appspot.com/o/JSohNO_White_Paper_Final%20(1).pdf?alt=media&token=ef54889b-2b7c-4c7f-b82d-3499e8ff3d97', '_blank')}
        >
          READ THE WHITE PAPER
        </Button>
      </div>
    </div>
  );
};
