import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/event",
      description: "Perfect for small hackathons",
      features: [
        "Up to 100 participants",
        "Basic analytics", 
        "Email automation",
        "Digital certificates"
      ],
      popular: false,
      buttonText: "Get Started",
      cardStyle: "bg-card border-border text-foreground",
      buttonVariant: "outline" as "outline" | "default",
      textColor: "text-foreground",
      priceColor: "text-primary"
    },
    {
      name: "Professional", 
      price: "₹1,999",
      period: "/event",
      description: "For medium-large events",
      features: [
        "Up to 1000 participants",
        "Advanced Analytics",
        "Custom branding", 
        "Priority Support",
        "Team management tools"
      ],
      popular: true,
      buttonText: "Get Started",
      cardStyle: "bg-primary/10 border-primary shadow-primary/20 scale-105",
      buttonVariant: "default" as "outline" | "default",
      textColor: "text-primary-foreground",
      priceColor: "text-primary",
      titleColor: "text-primary"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale events", 
      features: [
        "Unlimited participants",
        "White-label solution",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false,
      buttonText: "Contact Sales",
      cardStyle: "bg-card border-border text-foreground",
      buttonVariant: "outline" as "outline" | "default",
      textColor: "text-foreground",
      priceColor: "text-primary"
    }
  ];

  return (
    <div className="mb-12 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">simple, transparent and affordable pricing</h2>
        <p className="text-xl text-neutral-700">
          Choose the plan that fits your event size and requirements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className={`${plan.cardStyle} relative flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                Most Popular
              </Badge>
            )}
            <CardHeader className="pt-8">
              <CardTitle className={`text-2xl font-bold mb-2 ${plan.popular ? plan.titleColor : 'text-black'}`}>
                {plan.name}
              </CardTitle>
              <p className={`${plan.popular ? 'text-primary/80' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="p-6 text-center flex flex-col flex-grow">
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.popular ? plan.priceColor : 'text-black'}`}>
                  {plan.price}
                </span>
                {plan.period && 
                  <span className={`text-lg ${plan.popular ? 'text-primary/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                }
              </div>

              <div className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`flex items-center ${plan.popular ? 'text-primary/90' : 'text-foreground'}`}>
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                variant={plan.buttonVariant}
                className={`w-full mt-auto ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
