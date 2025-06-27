
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Shield, Server, Users, Zap, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: <Server className="h-12 w-12 text-blue-600" />,
      title: "IT Infrastructure",
      description: "Complete setup and management of your business IT infrastructure"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Cybersecurity",
      description: "Protect your business from cyber threats with advanced security solutions"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support when you need it most"
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Quick Response",
      description: "Fast troubleshooting and resolution to minimize downtime"
    }
  ];

  const benefits = [
    "Certified IT professionals",
    "Proven track record",
    "24/7 emergency support",
    "Scalable solutions",
    "Competitive pricing",
    "Free initial consultation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              ZyberNet<span className="text-blue-300">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              Professional IT Support & Solutions for Businesses, Enterprises & Home Users
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+1234567890">Call (123) 456-7890</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:info@zybernetsolutions.com">Email Us</a>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-blue-300">500+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-blue-300">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-blue-300">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your specific needs, from small businesses to large enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose ZyberNetSolutions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in the IT industry, we've built a reputation for delivering 
                reliable, efficient, and cost-effective solutions that help businesses thrive in the digital age.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                alt="IT Professional at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Star className="h-8 w-8 text-yellow-400 mr-2" />
                  <div>
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-sm">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-200">
            Contact us today for a free consultation and discover how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+1234567890">Call Now: (123) 456-7890</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailto:info@zybernetsolutions.com">Email: info@zybernetsolutions.com</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
