
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HackathonCardProps {
  eventName: string;
  daysLeft: number;
  mode: "Online" | "Hybrid" | "Offline";
  prize: string;
  registrations: string;
  posterUrl?: string;
}

const HackathonCard = ({ eventName, daysLeft, mode, prize, registrations, posterUrl }: HackathonCardProps) => {
  // Get poster URL based on event name
  const getPosterUrl = () => {
    switch (eventName) {
      case "AI in Action":
        return "https://i.pinimg.com/736x/c1/55/bb/c155bbaf77944bfa767d8b357c53583b.jpg";
      case "Build 4 Bharat":
        return "https://i.pinimg.com/736x/d6/72/85/d67285cf753c2a99e25e6f366f4138f4.jpg";
      case "APJ Hackathon":
        return "https://i.pinimg.com/736x/c9/fb/b6/c9fbb6795d2cc80226d31d4af0a21f54.jpg";
      default:
        return posterUrl;
    }
  };

  return (
    <Card className="bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mb-4">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Poster Image */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              {getPosterUrl() ? (
                <img src={getPosterUrl()} alt={eventName} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-xs text-muted-foreground text-center">Poster</span>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="flex-1">
            <div className="flex flex-wrap items-start gap-2 mb-3">
              <h3 className="text-lg font-semibold text-foreground">{eventName}</h3>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                🕒 {daysLeft} days left
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
              <span>🌐 {mode}</span>
              <span>🏆 {prize}</span>
              <span>👥 {registrations}</span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Know More
              </Button>
              <Button size="sm">
                Register
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HackathonCard;
