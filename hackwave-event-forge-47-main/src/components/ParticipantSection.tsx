
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ParticipantSection = () => {
  const navigate = useNavigate();

  return (
    <Card className="bg-card border border-border rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-[1.02] mt-16">
      <CardContent className="p-12 text-center relative overflow-hidden">
        {/* Futuristic background patterns removed for light theme compatibility */}
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            Hackwave for Participants
          </h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover events, submit projects, showcase your work, and build your portfolio with cutting-edge tools
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white px-8 py-4 text-lg rounded-2xl border-2 border-green-400/30 hover:border-green-300/50 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40"
              onClick={() => navigate("/join")}
            >
              Join Community <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100 px-8 py-4 text-lg rounded-2xl hover:border-neutral-400 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/10 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParticipantSection;
