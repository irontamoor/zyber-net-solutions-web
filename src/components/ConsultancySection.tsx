
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Lightbulb, BarChart3, Cog, Zap } from "lucide-react";

const ConsultancySection = () => {
  const consultancyServices = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Strategic planning and implementation of digital solutions to modernize your business operations."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "IT Strategy & Planning",
      description: "Comprehensive IT roadmaps aligned with your business goals and budget requirements."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Technology Assessment",
      description: "In-depth analysis of your current IT infrastructure with recommendations for improvement."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance optimization",
      description: "System performance analysis and optimization strategies to maximize efficiency."
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Process Automation",
      description: "Identify and implement automation opportunities to streamline business processes."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation Consulting",
      description: "Emerging technology consultation to keep your business ahead of the competition."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="consultancy" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">IT Consultancy Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Strategic IT consulting to drive your business forward. Our experts help you make informed technology decisions that deliver real business value.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Schedule a Consultation
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {consultancyServices.map((service, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-gray-800 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 border border-primary/20 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Our Consultancy?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Over a decade of proven IT expertise across various sectors
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Proven track record of successful digital transformations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Vendor-neutral recommendations based on your needs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Post-implementation support and monitoring
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Free Initial Consultation</h4>
                <p className="mb-4">Get expert advice on your IT challenges</p>
                <Button 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => scrollToSection('contact')}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
