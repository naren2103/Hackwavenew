import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#marketplace", label: "Marketplace" },
    { href: "#pricing", label: "Pricing" },
  ];

  const handleNavLinkClick = (link: any, e: React.MouseEvent) => {
    e.preventDefault();

    if (link.label === "Services") {
      if (location.pathname === "/join") {
        navigate("/organize#services");
      } else {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate("/organize#services");
        }
      }
    } else if (link.label === "Marketplace") {
      if (location.pathname === "/join") {
        navigate("/organize#marketplace");
      } else {
        const marketplaceSection = document.getElementById('marketplace');
        if (marketplaceSection) {
          marketplaceSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate("/organize#marketplace");
        }
      }
    } else if (link.label === "Pricing") {
      if (location.pathname === "/join") {
        navigate("/organize#pricing");
      } else {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate("/organize#pricing");
        }
      }
    }
  };

  return (
    <nav className="flex items-center justify-between mb-8 bg-card/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-border shadow-md sticky top-4 z-50">
      {/* Logo */}
      <div className="flex items-center w-40 h-30">
        <img
          src="https://i.ibb.co/3YfL3fYb/IMG-20250527-WA0037-2.jpg"
          alt="Hackwave Logo"
          className="w-full h-full object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Host and Join Event Buttons */}
        <Button
          variant="outline"
          className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
          onClick={() => navigate("/organize")}
        >
          Host an Event
        </Button>
        <Button
          variant="outline"
          className="bg-green-600 text-white border-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium"
          onClick={() => navigate("/join")}
        >
          Join an Event
        </Button>
        
        {navLinks.map(link => (
          <a 
            key={link.href} 
            href={link.href} 
            onClick={(e) => handleNavLinkClick(link, e)}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
          >
            {link.label}
          </a>
        ))}
        <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
          Login
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate("/organize")}>
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
                <div className="w-40 h-30">
                  <img 
                    src="https://i.ibb.co/3YfL3fYb/IMG-20250527-WA0037-2.jpg" 
                    alt="Hackwave Logo" 
                    className="w-full h-full object-contain mb-4" 
                  />
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4">
              {/* Mobile Host and Join Event Buttons */}
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
                  href={link.href} 
                  onClick={(e) => handleNavLinkClick(link, e)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10 mt-6">
                Login
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-blue-100 border border-blue-600" onClick={() => navigate("/organize")}>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
