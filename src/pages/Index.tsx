
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Twitter, Linkedin, Shield, Zap, Users, CheckCircle, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-white/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">About ZyberNetSolutions</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                With over 15 years of experience in the IT industry, ZyberNetSolutions has been the trusted technology partner for businesses, enterprises, and homeowners across the region.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you're a Fortune 500 company, a growing startup, or a family looking to upgrade your home network, our team of certified professionals provides comprehensive IT solutions that drive growth, enhance security, and ensure operational excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">Certified IT Professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">24/7 Support & Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">Business & Home Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700 font-medium">Scalable Infrastructure</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/20">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-gray-800 font-semibold mb-2">Security First</h3>
                  <p className="text-gray-600 text-sm">Advanced cybersecurity measures protect your business and home</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/20">
                  <Zap className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-gray-800 font-semibold mb-2">Fast Response</h3>
                  <p className="text-gray-600 text-sm">Rapid issue resolution for all clients</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/20">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-gray-800 font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Experienced professionals serving businesses and families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses and professionals nationwide
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <CardDescription className="text-gray-700 text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-primary/20 pt-4">
                    <CardTitle className="text-gray-800 text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business or home IT infrastructure? Contact us today.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm border-primary/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-gray-800">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+1234567890" className="text-primary hover:text-primary/80 text-lg font-semibold">
                  (123) 456-7890
                </a>
                <p className="text-gray-600 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/95 backdrop-blur-sm border-primary/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-gray-800">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@zybernetsolutions.com" className="text-primary hover:text-primary/80 text-lg font-semibold">
                  info@zybernetsolutions.com
                </a>
                <p className="text-gray-600 mt-2">Quick response guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold mb-4">
                ZyberNet<span className="text-primary">Solutions</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional IT support and solutions for businesses, enterprises, and home users.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
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
