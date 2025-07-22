
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-600 to-yellow-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/2f7a299b-4f8e-462a-abd3-4eca40f67e1a.png" 
                alt="Agahozo Farm Logo" 
                className="w-10 h-10 object-contain bg-white rounded-full p-1 transition-transform duration-300 hover:rotate-12"
              />
              <span className="text-xl font-bold">Agahozo Farm</span>
            </div>
            <p className="text-yellow-100 text-sm leading-relaxed">
              Climate-smart agribusiness producing high-quality greenhouse tomatoes 
              while creating sustainable jobs in Rwanda.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold text-orange-300">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <span className="text-yellow-100 text-sm">Kigali City & Bugesera District, Rwanda</span>
              </div>
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <span className="text-yellow-100 text-sm">+250 782 662 940</span>
              </div>
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <span className="text-yellow-100 text-sm">info@agahozofarm.rw</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lg font-semibold text-orange-300">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-yellow-100 text-sm hover:text-orange-300 transition-all duration-300 cursor-pointer hover:translate-x-2">
                Greenhouse Production
              </li>
              <li className="text-yellow-100 text-sm hover:text-orange-300 transition-all duration-300 cursor-pointer hover:translate-x-2">
                Solar-Powered Systems
              </li>
              <li className="text-yellow-100 text-sm hover:text-orange-300 transition-all duration-300 cursor-pointer hover:translate-x-2">
                Water-Smart Irrigation
              </li>
              <li className="text-yellow-100 text-sm hover:text-orange-300 transition-all duration-300 cursor-pointer hover:translate-x-2">
                Community Training
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-lg font-semibold text-orange-300">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-yellow-100 text-sm">
              Stay connected for updates on our sustainable farming initiatives.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-yellow-500 mt-12 pt-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-yellow-200 text-sm text-center md:text-left hover:scale-105 transition-transform duration-300 animate-pulse">
              © 2025 Agahozo Farm Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-yellow-200 hover:text-orange-300 transition-all duration-300 hover:scale-110">
                Privacy Policy
              </a>
              <a href="#" className="text-yellow-200 hover:text-orange-300 transition-all duration-300 hover:scale-110">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
