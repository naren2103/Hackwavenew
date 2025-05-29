
import { useState, useEffect } from "react"; // Added useEffect
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Tool {
  name: string;
  description: string;
}

const PluginMarketplace = () => {
  const availableTools: Tool[] = [
    { name: "Mass campaign Mailer", description: "Efficiently send updates and announcements." },
    { name: "Chatbot helpdesk Integration", description: "Provide 24/7 automated support."},
    { name: "Smart Registration Manager", description: "Streamline participant sign-ups."},
    { name: "Organizer analytics Dashboard", description: "Track event metrics and insights."},
    { name: "Lead capture & CRM", description: "Manage contacts and potential leads."},
    { name: "Smart Feedback Manager", description: "Collect and analyze event feedback."},
    { name: "Virtual Submission & Evaluation portal", description: "Handle project submissions smoothly."},
    { name: "Dynamic Pitchdesk schedular", description: "Organize pitch sessions effectively."},
    { name: "Live issue Board", description: "Address and track issues in real-time."},
    { name: "Micro-website Builder", description: "Create stunning event landing pages." }
  ];

  const defaultToolNames = [
    "Smart Registration Manager",       // For "Registration Portal"
    "Mass campaign Mailer",             // For "Basic Email Automation"
    "Virtual Submission & Evaluation portal", // For "Submission Portal"
    "Organizer analytics Dashboard",    // For "Advanced Analytics"
    "Chatbot helpdesk Integration"      // For "AI Chatbot"
  ];

  const initialSelectedTools = availableTools.filter(tool => defaultToolNames.includes(tool.name));

  const [selectedTools, setSelectedTools] = useState<Tool[]>(initialSelectedTools);

  const handleAddTool = (toolToAdd: Tool) => {
    if (!selectedTools.some(tool => tool.name === toolToAdd.name)) {
      setSelectedTools([...selectedTools, toolToAdd]);
    }
  };
  
  // Optional: If you want to reset to default tools if the component re-mounts or availableTools change (though not typical for this setup)
  // useEffect(() => {
  //   const defaultSelected = availableTools.filter(tool => defaultToolNames.includes(tool.name));
  //   setSelectedTools(defaultSelected);
  // }, []); // Be careful with dependency array if availableTools can change

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {/* Left - Plugin Marketplace Style */}
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Plugin Marketplace</h2> {/* Simplified title */}
        <p className="text-neutral-700 mb-6"> {/* Combined paragraphs */}
          Build your hackathon tools stack like assembling plugins. Each service can be
          toggled on/off with free tier options and premium upgrades. Select from our wide range of tools to build your custom hackathon suite.
        </p>
        
        <Card className="bg-card border border-border shadow-md">
          <CardHeader>
            <CardTitle className="text-black">Available Tools</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96 w-full rounded-b-lg p-4 bg-muted/20">
              <div className="space-y-4">
                {availableTools.map((tool, index) => (
                  <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-black">{tool.name}</h3>
                        <p className="text-sm text-neutral-700">{tool.description}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary text-primary hover:bg-primary/10 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
                        onClick={() => handleAddTool(tool)}
                        disabled={selectedTools.some(selected => selected.name === tool.name)}
                      >
                        {selectedTools.some(selected => selected.name === tool.name) ? (
                          <>
                            <Check className="mr-2 h-4 w-4" /> Added
                          </>
                        ) : (
                          <>
                            <Plus className="mr-2 h-4 w-4" /> Add
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Right - Your Current Stack */}
      <div>
        <h2 className="text-3xl font-bold text-black mb-8">Your Current Stack</h2>
        <Card className="bg-card border-border shadow-md min-h-[300px]">
          <CardHeader>
            <CardTitle className="text-black">Selected Services</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {selectedTools.length > 0 ? (
              <div className="space-y-4">
                {selectedTools.map((item, index) => (
                  <div key={index} className="flex items-center text-black p-3 bg-green-500/10 rounded-md border border-green-500/30">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-700">No tools added yet. Select tools from the marketplace!</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PluginMarketplace;
