
import { Button } from "@/components/ui/button";

const ParticipantHeroSection = () => {
  return (
  <div 
      className="relative rounded-3xl overflow-hidden py-8 px-8 bg-white animate-fade-in"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-vector/abstract-blue-wavy-business-style-background_573652-2342.jpg")`, // New background image
        backgroundSize: '100% 100%',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
         
         
      }}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Hackwave for Participants
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
          Discover events, compete with the best, build your portfolio.
        </p>
        
        <Button size="lg" className="px-8 py-4 text-lg rounded-xl">
          View Demo
        </Button>
        <div className="my-2 animate-fade-in">
          <img 
            src="https://img.freepik.com/free-vector/illustration-with-business-people-design_23-2148468477.jpg" 
            alt="Business People Illustration" 
            className="rounded-xl shadow-lg w-full max-w-lg mx-auto h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipantHeroSection;
