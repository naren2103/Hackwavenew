
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create Event",
      description: "Set up your hackathon details, timeline, and basic information",
      color: "from-purple-500 to-blue-500"
    },
    {
      number: "2", 
      title: "Pick Your Services",
      description: "Choose from our microservices suite to build your perfect toolkit",
      color: "from-blue-500 to-teal-500"
    },
    {
      number: "3",
      title: "Launch & Monitor", 
      description: "Go live and track everything through your custom dashboard",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="mb-20 py-16 px-8 bg-slate-800/80 rounded-xl relative overflow-hidden" 
         style={{
           backgroundImage: `
             radial-gradient(circle at 20px 20px, rgba(147, 51, 234, 0.1) 2px, transparent 2px),
             radial-gradient(circle at 60px 60px, rgba(34, 197, 94, 0.1) 2px, transparent 2px),
             radial-gradient(circle at 100px 20px, rgba(168, 85, 247, 0.1) 2px, transparent 2px),
             linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(34, 197, 94, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)
           `,
           backgroundSize: '120px 120px, 120px 120px, 120px 120px, 100% 100%'
         }}>
      {/* Rhombus pattern overlay */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `
               repeating-linear-gradient(45deg, 
                 transparent, 
                 transparent 10px, 
                 rgba(147, 51, 234, 0.02) 10px, 
                 rgba(147, 51, 234, 0.02) 20px),
               repeating-linear-gradient(-45deg, 
                 transparent, 
                 transparent 10px, 
                 rgba(34, 197, 94, 0.02) 10px, 
                 rgba(34, 197, 94, 0.02) 20px)
             `
           }}>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works for Organizers
          </h2>
          <p className="text-xl text-white/80">
            Simple 3-step process to launch your hackathon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/90 border border-border text-center shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-md`}>
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{step.title}</h3>
                <p className="text-neutral-700">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
