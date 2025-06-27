
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, Server, Shield, Cloud, Settings, Users, Home, Building, Building2, CheckCircle, Zap, Clock, HeadphonesIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const businessServices = [
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Network Setup & Management",
      description: "Complete network infrastructure design, installation, and ongoing management for optimal performance.",
      features: ["Network Design & Planning", "Server Configuration", "Firewall Setup", "Performance Monitoring"]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your business from cyber threats and data breaches.",
      features: ["Security Audits", "Threat Detection", "Data Encryption", "Security Training"]
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Cloud Services",
      description: "Cloud migration, management, and optimization services for improved scalability and efficiency.",
      features: ["Cloud Migration", "Backup Solutions", "Cloud Security", "Cost Optimization"]
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-blue-600" />,
      title: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services to keep your business running smoothly.",
      features: ["24/7 Phone Support", "Remote Assistance", "On-site Support", "Issue Tracking"]
    }
  ];

  const enterpriseServices = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Infrastructure",
      description: "Large-scale IT infrastructure solutions designed for enterprise-level requirements.",
      features: ["Datacenter Solutions", "High Availability Systems", "Disaster Recovery", "Scalable Architecture"]
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Digital Transformation",
      description: "Strategic IT consulting to modernize your enterprise and improve operational efficiency.",
      features: ["Legacy System Migration", "Process Automation", "Technology Roadmapping", "Change Management"]
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Managed IT Services",
      description: "Complete IT management services for enterprises requiring comprehensive support.",
      features: ["Proactive Monitoring", "Patch Management", "Asset Tracking", "Compliance Management"]
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Performance Optimization",
      description: "Advanced optimization services to maximize your enterprise IT performance and ROI.",
      features: ["System Optimization", "Performance Analytics", "Capacity Planning", "Cost Analysis"]
    }
  ];

  const homeServices = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Home Network Setup",
      description: "Professional home network installation and configuration for reliable connectivity.",
      features: ["WiFi Optimization", "Smart Home Integration", "Parental Controls", "Guest Networks"]
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Computer Repair & Maintenance",
      description: "Comprehensive computer repair and maintenance services for all your devices.",
      features: ["Hardware Diagnostics", "Software Troubleshooting", "Virus Removal", "Performance Tuning"]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Home Security Solutions",
      description: "Protect your home network and devices from cyber threats and unauthorized access.",
      features: ["Antivirus Installation", "Security Configuration", "Safe Browsing Setup", "Privacy Protection"]
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Remote Support",
      description: "Convenient remote technical support for quick resolution of common issues.",
      features: ["Screen Sharing Support", "Software Installation", "Problem Diagnosis", "Training & Guidance"]
    }
  ];

  const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <Card key={index} className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center mb-4">
          {service.icon}
          <CardTitle className="text-xl ml-4">{service.title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200">
              Comprehensive IT solutions tailored for businesses, enterprises, and home users
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Service Category</h2>
            <p className="text-xl text-gray-600">
              We provide specialized services for different needs and scales
            </p>
          </div>

          <Tabs defaultValue="business" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="business" className="flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Business
              </TabsTrigger>
              <TabsTrigger value="enterprise" className="flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                Enterprise
              </TabsTrigger>
              <TabsTrigger value="home" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Home
              </TabsTrigger>
            </TabsList>

            <TabsContent value="business">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business IT Solutions</h3>
                <p className="text-gray-600">Perfect for small to medium businesses looking to optimize their IT infrastructure</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {businessServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="enterprise">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Solutions</h3>
                <p className="text-gray-600">Advanced IT solutions for large organizations with complex requirements</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {enterpriseServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="home">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Home IT Services</h3>
                <p className="text-gray-600">Reliable IT support and solutions for your home technology needs</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {homeServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional IT solutions</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">We analyze your needs and assess your current IT infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">We create a customized solution plan tailored to your requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Our experts implement the solution with minimal disruption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Ongoing support and maintenance to ensure optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-200">
            Contact us today for a free consultation and customized quote for your IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+1234567890">Call (123) 456-7890</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailto:info@zybernetsolutions.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
