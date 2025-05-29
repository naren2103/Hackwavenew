
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

interface EventSearchProps {
  onTabChange?: (tab: string) => void;
}

const EventSearch = ({ onTabChange }: EventSearchProps) => {
  const [activeFilter, setActiveFilter] = useState("Hackathons");
  const filters = ["Hackathons", "Events", "Other Competitions"];

  const handleTabClick = (filter: string) => {
    setActiveFilter(filter);
    if (onTabChange) {
      onTabChange(filter);
    }
  };

  return (
    <div className="my-6 py-2">
      <div className="text-center mb-4">
        <h3 className="text-3xl font-bold text-foreground mb-6">Exclusively for you</h3>
        
        {/* Search Interface */}
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-4">
          <div className="flex-1 relative">
            <Input 
              placeholder="Find your next hackathon"
              className="pl-4 pr-12 py-3 text-lg"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
          <Button size="lg" className="px-6">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" size="lg" className="px-6">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => handleTabClick(filter)}
              className="px-6 py-2"
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSearch;
