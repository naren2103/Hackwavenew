import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  activeTab: "organizers" | "participants" | null;
  setActiveTab: (tab: "organizers" | "participants" | null) => void;
}

const HeroSection = ({ activeTab, setActiveTab }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative rounded-3xl overflow-hidden py-16 px-8 bg-white"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/blue-wavy-background-design_1035-9410.jpg")`, // New background image
        backgroundSize: '100% 100%',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10">
        {/* Choose Experience Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 flex items-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <span className="text-primary text-sm font-medium">🚀 Choose your Hackwave experience</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in">
          {/* Left Content Block */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              We're <span className="text-green-400">Hackwave</span> -<br />
              Enabling Events Effortlessly
            </h1>
            
            <p className="text-xl text-gray-700 mb-6 max-w-2xl md:max-w-full mx-auto md:mx-0 leading-relaxed">
              Your Complete virtual-first suite to host, manage, and scale all your events — from hackathons to hybrid fests — with zero chaos
            </p>
            
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
              <Button
                size="lg"
                className={`px-10 py-6 text-lg transition-all duration-300 rounded-2xl border-2 ${
                  activeTab === "organizers" || activeTab === null
                    ? "bg-primary text-primary-foreground border-primary/50 shadow-xl shadow-primary/30" 
                    : "bg-white/90 text-foreground hover:bg-accent border-border hover:border-primary/70"
                } hover:scale-105 hover:shadow-2xl`}
                onClick={() => setActiveTab(activeTab === "organizers" ? null : "organizers")}
              >
                For Organizers
              </Button>
              <Button
                size="lg"
                className={`px-10 py-6 text-lg transition-all duration-300 rounded-2xl border-2 ${
                  activeTab === "participants" 
                    ? "bg-green-600 text-white border-green-400/50 shadow-xl shadow-green-500/30" 
                    : "bg-white/90 text-foreground hover:bg-accent border-border hover:border-green-400/70"
                } hover:scale-105 hover:shadow-2xl`}
                onClick={() => navigate("/join")}
              >
                For Participants
              </Button>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="md:w-1/2 mt-6 md:mt-0 animate-fade-in relative flex flex-col items-center" style={{ animationDelay: '0.2s' }}>
            <div 
              className="relative w-96 h-80 rounded-xl overflow-hidden bg-white"
              style={{
                backgroundImage: `
                  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600'%3E%3Cdefs%3E%3ClinearGradient id='waveGrad3' x1='0%25' y1='50%25' x2='50%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b;stop-opacity:0.3'/%3E%3Cstop offset='50%25' style='stop-color:%23ffdbac;stop-opacity:0.6'/%3E%3Cstop offset='100%25' style='stop-color:%23f0f8ff;stop-opacity:0.4'/%3E%3C/linearGradient%3E%3ClinearGradient id='waveGrad4' x1='100%25' y1='50%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b;stop-opacity:0.3'/%3E%3Cstop offset='50%25' style='stop-color:%23ffdbac;stop-opacity:0.6'/%3E%3Cstop offset='100%25' style='stop-color:%23f0f8ff;stop-opacity:0.4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,150 Q200,50 400,100 T800,75 L0,0 L0,150 Z' fill='url(%23waveGrad3)'/%3E%3Cpath d='M1000,450 Q800,550 600,500 T200,525 L1000,600 L1000,450 Z' fill='url(%23waveGrad4)'/%3E%3C/svg%3E")
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <img 
                src="https://img.freepik.com/free-vector/gradient-asynchronous-work-illustration_52683-140251.jpg" 
                alt="Team collaboration illustration" 
                className="w-full h-full object-cover relative z-10 opacity-90" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
