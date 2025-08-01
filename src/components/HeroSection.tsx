import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background-gradient opacity-90"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent animate-glow">
            Hello World
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to a beautiful digital experience where creativity meets technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-3"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-3 border-primary/30 text-foreground hover:border-primary"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-hero-gradient rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Modern Design</h3>
            <p className="text-muted-foreground">Clean, contemporary aesthetics</p>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-hero-gradient rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Responsive</h3>
            <p className="text-muted-foreground">Perfect on every device</p>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-hero-gradient rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive</h3>
            <p className="text-muted-foreground">Engaging user experience</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};