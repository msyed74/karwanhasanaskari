import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Star, Clock, Plane, Hotel, Utensils, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TourPackages = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedDeparture, setSelectedDeparture] = useState('all');

  const packages = [
   
    {
      id: 3,
      name: "Complete Iran-Iraq Ziyarat",
      duration: "24 days",
      price: "₹1,14,000",
      originalPrice: "₹1,25,000",
      category: "combined",
      departure: "nagpur",
      rating: 5.0,
      reviews: 234,
      image: "Panoramic view of multiple holy shrines across Iran and Iraq with golden domes",
      highlights: ["All Major Shrines", "Expert Guides", "Comfortable Stay", "Full Board"],
      inclusions: ["Round-trip flights", "5-star accommodation", "All meals", "Visa assistance", "Senior guide", "Transportation"],
      itinerary: [
        "Day 1-2: Nagpur to Tehran, Shah Abdol Azim",
        "Day 3-5: Mashhad - Imam Reza shrine",
        "Day 6-7: Qom - Fatima Masumeh shrine",
        "Day 8-10: Iraq - Karbala & Najaf",
        "Day 11-12: Baghdad & Samarra",
        "Day 13-14: Return journey"
      ]
    },
  
  ];

      itinerary: [
        "Day 1-2: Nagpur to Tehran, Shah Abdol Azim",
        "Day 3-5: Mashhad - Imam Reza shrine",
        "Day 6-7: Qom - Fatima Masumeh shrine",
        "Day 8-10: Iraq - Karbala & Najaf",
        "Day 11-12: Baghdad & Samarra",
        "Day 13-14: Return journey"
      ]
    
  
  

  const filterOptions = [
    { value: 'all', label: 'All Packages' },
    { value: 'iran', label: 'Iran Tours' },
    { value: 'iraq', label: 'Iraq Tours' },
    { value: 'combined', label: 'Combined Tours' }
  ];

  const durationOptions = [
    { value: 'all', label: 'Any Duration' },
    { value: 'short', label: '4-6 Days' },
    { value: 'medium', label: '7-10 Days' },
    { value: 'long', label: '21+ Days' }
  ];

  const departureOptions = [
    { value: 'all', label: 'All Cities' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'lucknow', label : 'Nagpur'}
  ];

  const filteredPackages = packages.filter(pkg => {
    const categoryMatch = selectedFilter === 'all' || pkg.category === selectedFilter;
    const departureMatch = selectedDeparture === 'all' || pkg.departure === selectedDeparture;
    
    let durationMatch = true;
    if (selectedDuration !== 'all') {
      const days = parseInt(pkg.duration);
      if (selectedDuration === 'short') durationMatch = days >= 4 && days <= 6;
      else if (selectedDuration === 'medium') durationMatch = days >= 7 && days <= 10;
      else if (selectedDuration === 'long') durationMatch = days >= 21;
    }
    
    return categoryMatch && departureMatch && durationMatch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tour <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Choose from our carefully crafted pilgrimage packages designed to provide 
              the most meaningful and comfortable ziyarat experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tour Type</label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {durationOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Departure Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Departure City</label>
              <select
                value={selectedDeparture}
                onChange={(e) => setSelectedDeparture(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {departureOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {filteredPackages.length} Package{filteredPackages.length !== 1 ? 's' : ''} Available
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect pilgrimage package for your spiritual journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={`${pkg.name} pilgrimage tour`}
                     src="https://images.unsplash.com/photo-1711594937687-eed59068e043?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGthcmJhbGF8ZW58MHx8MHx8fDA%3D" />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.duration}
                    </div>
                    {pkg.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{pkg.rating}</span>
                        <span className="text-sm text-gray-500">({pkg.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="capitalize">{pkg.departure}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-emerald-600">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                        )}
                        <span className="text-gray-500">per person</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Includes:</p>
                      <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                        {pkg.inclusions.slice(0, 4).map((inclusion, idx) => (
                          <div key={idx} className="flex items-center">
                            <Star className="h-3 w-3 text-emerald-500 mr-1" />
                            {inclusion}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button asChild className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600">
                        <Link to="/booking" state={{ selectedPackage: pkg }}>
                          Book Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="px-4">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Calendar className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No packages found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more options</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Our Packages?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every package is designed with care to ensure your spiritual journey is comfortable, 
              meaningful, and transformative.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Convenient Travel</h3>
              <p className="text-gray-600">Direct flights and comfortable transportation throughout your journey</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Accommodation</h3>
              <p className="text-gray-600">Comfortable hotels near holy shrines for easy access and rest</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Knowledgeable guides with deep spiritual understanding</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Halal Meals</h3>
              <p className="text-gray-600">Delicious halal cuisine and local specialties included</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Package?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our travel experts are here to help you select the perfect pilgrimage package 
              based on your preferences and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link to="/contact">Speak to Expert</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;
