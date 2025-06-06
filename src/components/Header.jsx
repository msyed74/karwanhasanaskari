import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Tour Packages", href: "/TourPackages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    {
      /*
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    */
    },
  ];

  return (
    <header className="relative">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 9691938002</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>karwanehasanaskari786@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Mandla, Madhya Pradesh</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              {/*
              <div className="w-20 h-20  rounded-full flex ">
                <img
                  src="./src/images/logo.png"
                  alt="nothing to display"
                  className="w-20 h-20 object-fit"
                />
              </div>
*/}
              <div>
                <p className="text-sm text-emerald-600 font-arabic">دعا زہرا</p>
                <h1 className="text-xl font-bold text-gray-800">
                  Karwan-e-Hasan Askari
                </h1>
              </div>
              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-1xl font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.href
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-emerald-600 to-teal-600"
                >
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
