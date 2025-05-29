

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PluginMarketplace from "@/components/PluginMarketplace";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection"; 

const Organize = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Header with wave background */}
        <div 
          className="relative rounded-3xl overflow-hidden py-16 px-8 mb-4 bg-white"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600'%3E%3Cdefs%3E%3ClinearGradient id='waveGrad1' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23e6e6fa;stop-opacity:0.8'/%3E%3Cstop offset='50%25' style='stop-color:%23ffc0cb;stop-opacity:0.6'/%3E%3Cstop offset='70%25' style='stop-color:%2300ffff;stop-opacity:0.4'/%3E%3Cstop offset='100%25' style='stop-color:%23ffffe0;stop-opacity:0.2'/%3E%3C/linearGradient%3E%3ClinearGradient id='waveGrad2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e6e6fa;stop-opacity:0.8'/%3E%3Cstop offset='50%25' style='stop-color:%23ffc0cb;stop-opacity:0.6'/%3E%3Cstop offset='70%25' style='stop-color:%2300ffff;stop-opacity:0.4'/%3E%3Cstop offset='100%25' style='stop-color:%23ffffe0;stop-opacity:0.2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,600 Q250,450 500,525 T1000,488 L0,600 Z' fill='url(%23waveGrad1)'/%3E%3Cpath d='M1000,0 Q750,150 500,75 T0,112 L1000,0 Z' fill='url(%23waveGrad2)'/%3E%3C/svg%3E")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Customize Your<br />Hackathon Space!
            </h1>
            <p className="text-2xl text-neutral-700 mb-4">
              Pick and choose the tools you need
            </p>
            <p className="text-xl text-black font-semibold">
              Pay only for what you use
            </p>
            <div className="my-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <img 
            src="https://img.freepik.com/free-vector/team-concept-illustration_114360-28826.jpg" 
            alt="Team Concept Illustration" 
            className="rounded-xl shadow-lg w-full max-w-lg mx-auto h-96 object-cover"
          />
        </div>
          </div>
        </div>

        

        {/* Plugin Marketplace */}
        <div id="marketplace" className="animate-fade-in" style={{animationDelay: '0.3s'}}>
          <PluginMarketplace />
        </div>
        
        {/* How It Works Section */}
        <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
         <HowItWorks />
        </div>

        <div className="my-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <img 
            src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_52683-26979.jpg" 
            alt="Brainstorming Concept Landing Page" 
            className="rounded-xl shadow-lg w-full max-w-md mx-auto h-96 object-cover"
          />
        </div>

        {/* Pricing Section */}
         <div id="pricing" className="animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div id="services">
            <PricingSection />
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
          <CallToActionSection /> 
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Organize;