
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Shield, Award, ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const featuredPackages = [
   
    {
      id: 2,
      name: "Complete Iran-Iraq Ziyarat",
      duration: "24 Days",
      price: "₹1,14,000",
      image: "Panoramic view of holy shrines across Iran and Iraq",
      highlights: ["All Major Shrines", "Expert Guides", "Comfortable Stay", "Full Board"]
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover opacity-30" 
            alt="Golden dome of Karbala shrine at night with pilgrims"
           src="https://images.unsplash.com/photo-1700722376849-3aec8fc51991" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">دعا زہرا</span>
              <br />
              <span className="text-3xl md:text-5xl">Karwan e Hasan Askari</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Embark on a sacred journey to the holy shrines of Iran and Iraq. 
              Experience spiritual transformation with our certified pilgrimage services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4 shrine-glow"
              >
                <Link to="/TourPackages">
                  View Tour Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="glass-effect text-white border-white hover:bg-white/20 text-lg px-8 py-4"
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 float-animation">
          <div className="w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-32 right-16 float-animation" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-emerald-400/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Trust Badges 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
              >
                <badge.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">{badge.text}</h3>
                <p className="text-sm text-gray-600">{badge.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Your Spiritual Journey Begins Here
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              For over a decade, Karwan e Hasan Askari has been guiding devoted pilgrims on 
              transformative ziyarat journeys to the sacred shrines of Iran and Iraq. Our mission 
              is rooted in the blessed tradition of Dua-e-Zehra, ensuring every step of your 
              pilgrimage is filled with spiritual significance and divine blessings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Knowledgeable guides with deep spiritual understanding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Safe & Secure</h3>
                <p className="text-gray-600">Comprehensive safety measures and travel insurance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Premium Service</h3>
                <p className="text-gray-600">Comfortable accommodations and seamless arrangements</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated pilgrimage packages designed to provide 
              the most meaningful and comfortable ziyarat experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={`${pkg.name} tour package`}
                   src="https://images.unsplash.com/photo-1633642941406-4b8e71b4f23f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGthcmJhbGF8ZW58MHx8MHx8fDA%3D" />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{pkg.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-emerald-600">{pkg.price}</span>
                    <span className="text-gray-500">per person</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-teal-600">
                    <Link to="/packages">View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Pilgrims Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from thousands of satisfied pilgrims who experienced spiritual transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Latest Updates & Tips
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with our latest travel tips and spiritual insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <img  
                className="w-full h-48 object-cover" 
                alt="Pilgrimage preparation guide"
               src="https://images.unsplash.com/photo-1585226256695-e8e7738b7c72" />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>December 15, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Essential Packing Guide for Ziyarat
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete checklist of items to pack for your spiritual journey to Iran and Iraq...
                </p>
                <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  Read More →
                </Link>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <img  
                className="w-full h-48 object-cover" 
                alt="Visa requirements for pilgrimage"
               src="https://images.unsplash.com/photo-1581656702382-9ae90e68e7b7" />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>December 10, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Updated Visa Requirements 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Latest information on visa processes and requirements for Indian pilgrims...
                </p>
                <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  Read More →
                </Link>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <img  
                className="w-full h-48 object-cover" 
                alt="Spiritual significance of shrines"
               src="https://images.unsplash.com/photo-1562575786-95ceba8a4237" />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>December 5, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Spiritual Significance of Karbala
                </h3>
                <p className="text-gray-600 mb-4">
                  Understanding the deep spiritual meaning and historical importance of Karbala...
                </p>
                <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  Read More →
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Begin Your Journey?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link to="/destinations">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explore Destinations
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link to="/TourPackages">
                  <Clock className="mr-2 h-5 w-5" />
                  View Packages
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
