
import React from 'react';
import { Leaf, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-green-500 to-orange-500 p-2 rounded-full">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Agahozo Farm</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Climate-smart agribusiness producing high-quality greenhouse tomatoes 
              while creating sustainable jobs in Rwanda.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">Kigali City & Bugesera District, Rwanda</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">info@agahozofarm.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-green-100 text-sm hover:text-orange-300 transition-colors cursor-pointer">
                Greenhouse Production
              </li>
              <li className="text-green-100 text-sm hover:text-orange-300 transition-colors cursor-pointer">
                Solar-Powered Systems
              </li>
              <li className="text-green-100 text-sm hover:text-orange-300 transition-colors cursor-pointer">
                Water-Smart Irrigation
              </li>
              <li className="text-green-100 text-sm hover:text-orange-300 transition-colors cursor-pointer">
                Community Training
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-green-100 text-sm">
              Stay connected for updates on our sustainable farming initiatives.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm text-center md:text-left">
              © 2025 Agahozo Farm Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-green-200 hover:text-orange-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-green-200 hover:text-orange-300 transition-colors">
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
