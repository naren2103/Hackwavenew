
import HackathonCard from "@/components/HackathonCard";

const HackathonList = () => {
  const hackathons = [
    {
      eventName: "AI in Action",
      daysLeft: 22,
      mode: "Online" as const,
      prize: "₹1 Lakh prizes",
      registrations: "500+ registrations"
    },
    {
      eventName: "Build 4 Bharat",
      daysLeft: 5,
      mode: "Online" as const,
      prize: "₹50k prize + perks",
      registrations: "200 registrations"
    },
    {
      eventName: "APJ Hackathon",
      daysLeft: 2,
      mode: "Hybrid" as const,
      prize: "Free registration",
      registrations: "150 registrations"
    }
  ];

  return (
    <div className="my-2">
      {/* Vertically Scrollable Container */}
      <div className="max-h-96 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={index} {...hackathon} />
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
