
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-primary/20 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            ZyberNet<span className="text-primary">Solutions</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors font-medium">Contact</button>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg">
            <Phone className="mr-2 h-4 w-4" />
            <a href="tel:+1234567890">Call Now</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
