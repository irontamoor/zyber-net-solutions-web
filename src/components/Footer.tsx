
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              ZyberNet<span className="text-blue-400">Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional IT support and solutions for businesses, enterprises, and home users. 
              We provide reliable, efficient, and cost-effective technology solutions.
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                (123) 456-7890
              </a>
              <a href="mailto:info@zybernetsolutions.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                info@zybernetsolutions.com
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-1" />
                <span>123 Tech Street<br />Business District<br />City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ZyberNetSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
