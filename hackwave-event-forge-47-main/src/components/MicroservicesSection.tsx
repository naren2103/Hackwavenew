
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Globe, Mail, MessageCircle, Users, BarChart3, Building2, MessageSquare, FileText, ClipboardList, LucideIcon, Plus, Info } from "lucide-react";

interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
}

const MicroservicesSection = () => {
  const services: Service[] = [
    { name: "Digital Credential Generator", description: "Automated certificates, badges, and awards with Background Verification", icon: Award, iconColor: "text-purple-600" },
    { name: "Micro-Website Builder", description: "Custom event landing pages with AI-powered design", icon: Globe, iconColor: "text-blue-600" },
    { name: "Automated Confirmation Mailer", description: "Smart email workflows with personalized content", icon: Mail, iconColor: "text-green-600" },
    { name: "Mass Email Campaign Tool", description: "Targeted participant communications with analytics", icon: MessageCircle, iconColor: "text-yellow-500" },
    { name: "Volunteer Task Manager", description: "Assign tasks, and follow up on updates of works", icon: BarChart3, iconColor: "text-red-600" },
    { name: "Mentor/Jury Panel Management", description: "Expert coordination tools with scheduling automation", icon: Users, iconColor: "text-indigo-600" },
    { name: "Rubric-Based Scoring System", description: "Customizable judging criteria with real-time scoring", icon: Building2, iconColor: "text-pink-600" },
    { name: "Custom Dashboard & Analytics", description: "Real-time event insights with predictive analytics", icon: BarChart3, iconColor: "text-teal-600" },
    { name: "Chatbot Helpdesk Integration", description: "24/7 automated support with natural language processing", icon: MessageSquare, iconColor: "text-cyan-600" },
    { name: "Feedback & Review Collector", description: "Post-event insights with sentiment analysis", icon: MessageCircle, iconColor: "text-orange-500" },
    { name: "Submission Portal & Judging", description: "End-to-end project workflow with automated evaluation", icon: FileText, iconColor: "text-gray-700" },
    { name: "Live Event Management", description: "Real-time event coordination with automated announcements", icon: ClipboardList, iconColor: "text-lime-600" }
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-foreground mb-4">
          Microservices Suite for Organizers
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Build your perfect hackathon toolkit with our modular, AI-powered services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card 
              key={index} 
              className="bg-slate-800 border border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/20 rounded-2xl flex flex-col group cursor-pointer"
            >
              <CardContent className="p-6 flex-grow flex flex-col items-start">
                <div className={`p-3 rounded-xl mb-4 bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors duration-300`}>
                  <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {service.name}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex gap-2 w-full">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Suite
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Info className="h-4 w-4 mr-1" />
                    Know More
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MicroservicesSection;
