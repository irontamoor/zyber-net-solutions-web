import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Shield, Zap, Users, CheckCircle, Star, Quote, ArrowRight, Monitor, Server, Lock, Headphones, Cloud, Smartphone, Home } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      text: "ZyberNetSolutions transformed our IT infrastructure completely. Their 24/7 support has been invaluable.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Global Manufacturing Corp",
      role: "IT Director", 
      text: "Professional, reliable, and always available when we need them most. Excellent cybersecurity expertise.",
      rating: 5
    },
    {
      name: "Emily Chen",
      company: "Creative Design Agency",
      role: "Operations Manager",
      text: "Working from home became seamless after their network setup. Outstanding remote support.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">
              ZyberNet<span className="text-blue-400">Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+1234567890">Call Now</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Empowering businesses, enterprises, and homes with reliable technology support, cybersecurity, and infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+1234567890">Get Started Today</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored for businesses, enterprises, and home users
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About ZyberNetSolutions</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With over 15 years of experience in the IT industry, ZyberNetSolutions has been the trusted technology partner for businesses, enterprises, and homeowners across the region.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Whether you're a Fortune 500 company, a growing startup, or a family looking to upgrade your home network, our team of certified professionals provides comprehensive IT solutions that drive growth, enhance security, and ensure operational excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Certified IT Professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">24/7 Support & Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Business & Home Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Scalable Infrastructure</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg">
                  <Shield className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Security First</h3>
                  <p className="text-blue-100 text-sm">Advanced cybersecurity measures protect your business and home</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 rounded-lg">
                  <Zap className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Fast Response</h3>
                  <p className="text-green-100 text-sm">Rapid issue resolution for all clients</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-lg">
                <Users className="h-8 w-8 text-white mb-3" />
                <h3 className="text-white font-semibold mb-2">Expert Team</h3>
                <p className="text-purple-100 text-sm">Experienced professionals serving businesses and families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">
              Trusted by businesses and professionals nationwide
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />
                  <CardDescription className="text-gray-300 text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-gray-700 pt-4">
                    <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-400 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400">
              Ready to transform your business or home IT infrastructure? Contact us today.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-700 text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 text-lg">
                  (123) 456-7890
                </a>
                <p className="text-gray-400 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-700 text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@zybernetsolutions.com" className="text-blue-400 hover:text-blue-300 text-lg">
                  info@zybernetsolutions.com
                </a>
                <p className="text-gray-400 mt-2">Quick response guaranteed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-700 text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">123 Tech Street</p>
                <p className="text-gray-300">Business District</p>
                <p className="text-gray-300">City, State 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold mb-4">
                ZyberNet<span className="text-blue-400">Solutions</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional IT support and solutions for businesses, enterprises, and home users.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">IT Support</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Home Setup</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-3">
                <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mr-3" />
                  (123) 456-7890
                </a>
                <a href="mailto:info@zybernetsolutions.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mr-3" />
                  info@zybernetsolutions.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZyberNetSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
