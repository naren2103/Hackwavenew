
import { Card, CardContent } from "@/components/ui/card";

const FeaturedGrid = () => {
  const featuredEvents = [
    { title: "Featured Event 1" },
    { title: "Featured Event 2" },
    { title: "Featured Event 3" },
    { title: "Featured Event 4" }
  ];

  return (
    <div className="my-8 py-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-4">Featured Events</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredEvents.map((event, index) => (
          <Card key={index} className="bg-navy-900 border border-navy-700 hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#1e3a8a'}}>
            <CardContent className="p-8 text-center">
              <div className="w-full h-32 bg-navy-800 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: '#1e40af'}}>
                <span className="text-gray-200">Featured</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{event.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGrid;
