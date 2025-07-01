
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-primary/20 shadow-lg translate-y-0' 
        : 'bg-transparent translate-y-[-100%]'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div className="text-xl font-bold text-gray-800">
              ZyberNet<span className="text-primary">Solutions</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('consultancy')} className="hover:text-primary transition-colors font-medium">Consultancy</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors font-medium">Contact</button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('consultancy')} className="text-left hover:text-primary transition-colors font-medium">Consultancy</button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-primary transition-colors font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors font-medium">Contact</button>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg w-fit"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
