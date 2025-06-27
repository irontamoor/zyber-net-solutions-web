
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              (123) 456-7890
            </a>
            <a href="mailto:info@zybernetsolutions.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              info@zybernetsolutions.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              ZyberNet<span className="text-blue-600">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Phone className="h-4 w-4 mr-1" />
              <a href="tel:+1234567890">Call Us</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <a href="tel:+1234567890" className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  (123) 456-7890
                </a>
                <a href="mailto:info@zybernetsolutions.com" className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  info@zybernetsolutions.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
