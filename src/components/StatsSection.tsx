
const StatsSection = () => {
  const stats = [
    { number: "Trusted", label: "Technology Experts" },
    { number: "24/7", label: "Nationwide Support" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "Enterprise", label: "Grade Solutions" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold text-white drop-shadow-lg">{stat.number}</div>
              <div className="text-white font-medium drop-shadow">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
