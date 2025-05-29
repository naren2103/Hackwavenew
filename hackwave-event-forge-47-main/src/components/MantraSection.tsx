
import { Card, CardContent } from "@/components/ui/card";

const MantraSection = () => {
  const mantras = [
    {
      title: "🔹 Discover",
      description: "Build your profile and add skills."
    },
    {
      title: "🔹 Defend", 
      description: "Compete in best competitions virtually at your ease."
    },
    {
      title: "🔹 Develop",
      description: "Create your portfolio and showcase achievements."
    }
  ];

  return (
    <div className="my-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          For Participants — We Have 3D Mantra
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mantras.map((mantra, index) => (
          <Card key={index} className="bg-navy-900 border border-navy-700 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]" style={{backgroundColor: '#1e3a8a'}}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">{mantra.title}</h3>
              <p className="text-gray-200">{mantra.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MantraSection;
