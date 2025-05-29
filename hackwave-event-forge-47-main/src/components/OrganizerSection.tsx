
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrganizerSection = () => {
  const navigate = useNavigate();

  return (
    <Card className="mb-12 bg-card border border-border rounded-3xl animate-fade-in shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]">
      <CardContent className="p-12 text-center relative overflow-hidden">
        {/* Futuristic background patterns removed for light theme compatibility */}
        
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-neutral-800 mb-6">
            Hackwave for Organizers
          </h2>
          <p className="text-2xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Manage, host, and automate end-to-end hackathons with our comprehensive suite
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 text-lg rounded-2xl border-2 border-blue-400/30 hover:border-blue-300/50 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40"
              onClick={() => navigate("/organize")}
            >
              Start Organizing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-100 px-8 py-4 text-lg rounded-2xl hover:border-neutral-400 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/10 backdrop-blur-sm"
            >
              View Demo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizerSection;
