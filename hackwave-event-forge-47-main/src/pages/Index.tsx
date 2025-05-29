
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import OrganizerSection from "@/components/OrganizerSection";
import ParticipantSection from "@/components/ParticipantSection";
import MicroservicesSection from "@/components/MicroservicesSection";
import CallToActionSection from "@/components/CallToActionSection";
import HeroSection from "@/components/HeroSection";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"organizers" | "participants" | null>(null);
  const navigate = useNavigate();

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#marketplace", label: "Marketplace" },
    { href: "#pricing", label: "Pricing" },
  ];

  const handleNavLinkClick = (link: any, e: React.MouseEvent) => {
    if (link.label === "Services") {
      e.preventDefault();
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.label === "Marketplace" || link.label === "Pricing") {
      e.preventDefault();
      navigate(`/organize${link.href.startsWith('#') ? '' : link.href}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between mb-4 bg-card/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-border shadow-md sticky top-4 z-50">
          {/* Logo */}
          <div className="flex items-center w-40 h-30">
            <img 
              src="https://i.ibb.co/3YfL3fYb/IMG-20250527-WA0037-2.jpg" 
              alt="Hackwave Logo" 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Host and Join Event Buttons */}
            <Button
                className="w-full bg-blue-600 text-white border border-blue-600 hover:bg-blue-700"
                onClick={() => navigate("/organize")}
              >
                Host an Event
              </Button>
            <Button
                className="w-full bg-green-600 text-white border border-green-600 hover:bg-green-700"
                onClick={() => navigate("/join")}
              >
                Join an Event
              </Button>
            
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.label === "Marketplace" || link.label === "Pricing" ? "/organize" + link.href : link.href} 
                onClick={(e) => handleNavLinkClick(link, e)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
              Login
            </Button>
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-100 border border-blue-600" onClick={() => navigate("/organize")}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button & Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
                <SheetHeader className="mb-6">
                  <SheetTitle>
                <div className="w-40 h-30 mb-4"> {/* Increased width & height */}
              <img 
                src="https://i.ibb.co/3YfL3fYb/IMG-20250527-WA0037-2.jpg" 
                alt="Hackwave Logo" 
                className="w-full h-full object-contain" 
              />
            </div>

                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4">
                  {/* Mobile Host and Join Event Buttons */}
                  <Button
                    className="w-full bg-transparent text-blue-600 border border-blue-500 hover:bg-blue-50"
                    onClick={() => navigate("/organize")}
                  >
                    Host an Event
                  </Button>
                  <Button
                    className="w-full bg-transparent text-green-600 border border-green-500 hover:bg-green-50"
                    onClick={() => navigate("/join")}
                  >
                    Join an Event
                  </Button>
                  
                  {navLinks.map(link => (
                    <a 
                      key={link.href} 
                      href={link.label === "Marketplace" || link.label === "Pricing" ? "/organize" + link.href : link.href} 
                      onClick={(e) => handleNavLinkClick(link, e)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10 mt-6">
                    Login
                  </Button>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-100 border border-blue-600" onClick={() => navigate("/organize")}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Hero Section - Simple container */}
        <div className="mb-8">
          <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Conditional Content based on activeTab */}
        { (activeTab === "organizers" || activeTab === null) && (
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <OrganizerSection /> 
            <div id="services">
              <MicroservicesSection />
            </div>
          </div>
        )}

        {activeTab === "participants" && (
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <ParticipantSection />
          </div>
        )}

        <div className="mt-6">
          <CallToActionSection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
