
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <div className="text-center my-8 py-12 bg-muted/50 rounded-xl">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        Ready to power your Next Event?
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        Join thousands of organizers who trust Hackwave to deliver excellence
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Ask for Free Trial <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-foreground/30 text-foreground hover:bg-accent"
        >
          Schedule Demo
        </Button>
      </div>
    </div>
  );
};

export default CallToActionSection;
