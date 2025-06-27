
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Facebook, Twitter, Linkedin, Shield, Zap, Users, CheckCircle, Star, Quote, ArrowRight, Monitor, Server, Lock, Headphones, Cloud, Smartphone, Home } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [backgroundImages.length]);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-purple-200 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">
              ZyberNet<span className="text-purple-600">Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-purple-600 transition-colors font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 transition-colors font-medium">Contact</button>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+1234567890">Call Now</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Slides */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-30' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/60 to-pink-600/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent drop-shadow-lg">
              Professional IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
              Empowering businesses, enterprises, and homes with reliable technology support, cybersecurity, and infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 shadow-xl border-2 border-white/20">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+1234567890">Get Started Today</a>
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 hover:border-white/70 text-lg px-8 py-4 backdrop-blur-sm shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored for businesses, enterprises, and home users
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="text-green-600 mb-4">
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">About ZyberNetSolutions</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                With over 15 years of experience in the IT industry, ZyberNetSolutions has been the trusted technology partner for businesses, enterprises, and homeowners across the region.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Whether you're a Fortune 500 company, a growing startup, or a family looking to upgrade your home network, our team of certified professionals provides comprehensive IT solutions that drive growth, enhance security, and ensure operational excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Certified IT Professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">24/7 Support & Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Business & Home Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Scalable Infrastructure</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg">
                  <Shield className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Security First</h3>
                  <p className="text-blue-100 text-sm">Advanced cybersecurity measures protect your business and home</p>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-teal-500 p-6 rounded-lg shadow-lg">
                  <Zap className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Fast Response</h3>
                  <p className="text-green-100 text-sm">Rapid issue resolution for all clients</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-lg shadow-lg">
                <Users className="h-8 w-8 text-white mb-3" />
                <h3 className="text-white font-semibold mb-2">Expert Team</h3>
                <p className="text-purple-100 text-sm">Experienced professionals serving businesses and families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses and professionals nationwide
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-pink-500 mb-4" />
                  <CardDescription className="text-gray-700 text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-pink-200 pt-4">
                    <CardTitle className="text-gray-800 text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-pink-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business or home IT infrastructure? Contact us today.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-white border-indigo-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Phone className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-gray-800">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-700 text-lg font-semibold">
                  (123) 456-7890
                </a>
                <p className="text-gray-600 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-indigo-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-gray-800">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@zybernetsolutions.com" className="text-indigo-600 hover:text-indigo-700 text-lg font-semibold">
                  info@zybernetsolutions.com
                </a>
                <p className="text-gray-600 mt-2">Quick response guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold mb-4">
                ZyberNet<span className="text-purple-400">Solutions</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional IT support and solutions for businesses, enterprises, and home users.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
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
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZyberNetSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
