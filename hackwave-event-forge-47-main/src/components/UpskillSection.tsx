
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UpskillSection = () => {
  const courses = [
    {
      title: "Java (FAANG Trusted)",
      price: "₹299 / 4 weeks",
      description: "Master Java programming with industry-standard practices"
    },
    {
      title: "No-code Tools (for MVP)",
      price: "₹299 / month",
      description: "Build MVPs without coding using modern no-code platforms"
    }
  ];

  return (
    <div className="my-8 py-8 bg-muted/30 rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-4">Upskill Yourself</h2>
        <p className="text-lg text-muted-foreground">Solve coding problems & earn rewards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {courses.map((course, index) => (
          <Card key={index} className="bg-card border border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
              <div className="text-primary font-semibold">{course.price}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="px-8">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default UpskillSection;
