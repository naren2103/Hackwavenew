
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ParticipantHeroSection from "@/components/ParticipantHeroSection";
import MantraSection from "@/components/MantraSection";
import EventSearch from "@/components/EventSearch";
import HackathonList from "@/components/HackathonList";
import FeaturedGrid from "@/components/FeaturedGrid";
import UpskillSection from "@/components/UpskillSection";

const Join = () => {
  const navigate = useNavigate();
  const featuredEventsRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: string) => {
    if (tab === "Events" && featuredEventsRef.current) {
      featuredEventsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Navigation Bar */}
        <Navigation />

        {/* Page Content */}
        <ParticipantHeroSection />
        

        
        <MantraSection />
        
        {/* Layout for EventSearch with image on the right */}
        <div className="flex flex-col lg:flex-row gap-8 my-6 animate-fade-in">
          <div className="lg:w-2/3">
            <EventSearch onTabChange={handleTabChange} />
            <HackathonList />
          </div>
          <div className="lg:w-1/3">
            <img 
              src="https://img.freepik.com/free-vector/isometric-cms-concept_23-2148807389.jpg" 
              alt="Isometric CMS Concept" 
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
        
        <div ref={featuredEventsRef}>
          <FeaturedGrid />
        </div>
        <UpskillSection />
      </div>

      <Footer />
    </div>
  );
};

export default Join;
