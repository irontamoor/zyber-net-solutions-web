
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Lock, Headphones, Cloud, Home, Smartphone, Database, Wifi, Shield, Settings, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "IT Support & Maintenance",
      description: "24/7 technical support and proactive system maintenance for businesses of all sizes."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure Setup",
      description: "Complete network infrastructure design, implementation, and optimization."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security audits, threat protection, and compliance management."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      description: "Cloud migration, backup solutions, and hybrid infrastructure management."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Help Desk Support",
      description: "Remote and on-site technical support with rapid response times."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Home Technology Setup",
      description: "Smart home installations, network setup, and personal tech support for families."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Device Management",
      description: "Enterprise mobile device security, deployment, and management solutions."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Management & Backup",
      description: "Data recovery, backup strategies, and database optimization services."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Network Solutions",
      description: "Wireless networks, VPN setup, and network performance optimization."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance & Auditing",
      description: "GDPR, HIPAA, and industry compliance auditing and implementation."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "System Integration",
      description: "Seamless integration of business systems and software solutions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Training & Support",
      description: "Staff training programs and ongoing technical education services."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored for businesses, enterprises, and home users. From basic support to advanced enterprise solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-gray-800 text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
