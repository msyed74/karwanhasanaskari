
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');

  const destinations = [
    {
      id: 1,
      country: 'iraq',
      name: 'Karbala',
      shrine: 'Imam Hussain (AS) Shrine',
      description: 'The most sacred site for Shia Muslims, where Imam Hussain (AS) was martyred. Experience the spiritual atmosphere of this holy city.',
      image: 'Magnificent golden dome of Imam Hussain shrine in Karbala with thousands of pilgrims',
      significance: 'Site of the Battle of Karbala and martyrdom of Imam Hussain (AS)',
      duration: '2-3 days recommended',
      highlights: ['Imam Hussain Shrine', 'Abbas Ibn Ali Shrine', 'Mukhayyam of Imam Hussain', 'Ghadeer Khumm']
    },
    {
      id: 2,
      country: 'iraq',
      name: 'Najaf',
      shrine: 'Imam Ali (AS) Shrine',
      description: 'The resting place of Imam Ali (AS), the first Imam and cousin of Prophet Muhammad (PBUH). A center of Islamic learning and spirituality.',
      image: 'Beautiful golden dome and minarets of Imam Ali shrine in Najaf with pilgrims gathering',
      significance: 'Burial place of Imam Ali (AS), the first Imam',
      duration: '2-3 days recommended',
      highlights: ['Imam Ali Shrine', 'Wadi-us-Salaam Cemetery', 'Masjid-e-Kufa', 'House of Imam Ali']
    },
    {
      id: 3,
      country: 'iraq',
      name: 'Baghdad',
      shrine: 'Kadhimayn Shrine',
      description: 'Home to the shrines of the 7th and 9th Imams, Imam Musa Kadhim (AS) and Imam Muhammad Taqi (AS).',
      image: 'Twin golden domes of Kadhimayn shrine in Baghdad with beautiful Islamic architecture',
      significance: 'Burial place of 7th and 9th Imams',
      duration: '1-2 days recommended',
      highlights: ['Imam Kadhim Shrine', 'Imam Jawad Shrine', 'Mustansiriya University', 'Abbasid Palace']
    },
    {
      id: 4,
      country: 'iraq',
      name: 'Samarra',
      shrine: 'Imam Hasan Askari (AS) Shrine',
      description: 'The sacred city where the 10th and 11th Imams are buried, and the birthplace of Imam Mahdi (AS).',
      image: 'Golden dome of Imam Askari shrine in Samarra with distinctive spiral minaret in background',
      significance: 'Burial place of 10th and 11th Imams, birthplace of 12th Imam',
      duration: '1 day recommended',
      highlights: ['Imam Askari Shrine', 'Sirdab (Cellar of Occultation)', 'Great Mosque of Samarra', 'Malwiya Minaret']
    },
    {
      id: 5,
      country: 'iran',
      name: 'Mashhad',
      shrine: 'Imam Reza (AS) Shrine',
      description: 'The largest mosque in the world by area, housing the shrine of the 8th Imam, Imam Reza (AS).',
      image: 'Spectacular view of Imam Reza shrine complex in Mashhad with golden dome and courtyards',
      significance: 'Burial place of 8th Imam Reza (AS)',
      duration: '3-4 days recommended',
      highlights: ['Imam Reza Shrine', 'Goharshad Mosque', 'Razavi Museum', 'Nader Shah Tomb']
    },
    {
      id: 6,
      country: 'iran',
      name: 'Qom',
      shrine: 'Hazrat Fatima Masumeh (SA) Shrine',
      description: 'The holy city of Qom, home to the shrine of Hazrat Fatima Masumeh (SA), sister of Imam Reza (AS).',
      image: 'Beautiful golden dome of Fatima Masumeh shrine in Qom with intricate tilework and minarets',
      significance: 'Burial place of Hazrat Fatima Masumeh (SA)',
      duration: '2-3 days recommended',
      highlights: ['Fatima Masumeh Shrine', 'Jamkaran Mosque', 'Qom Seminary', 'Astane Quds Museum']
    },
    {
      id: 7,
      country: 'iran',
      name: 'Tehran',
      shrine: 'Shah Abdol Azim Shrine',
      description: 'Visit the capital city and the shrine of Shah Abdol Azim, along with other important religious sites.',
      image: 'Shah Abdol Azim shrine in Tehran with modern city skyline and traditional Islamic architecture',
      significance: 'Important religious site in Iran\'s capital',
      duration: '1-2 days recommended',
      highlights: ['Shah Abdol Azim Shrine', 'Imamzadeh Saleh', 'National Museum', 'Golestan Palace']
    },
    {
      id: 8,
      country: 'iran',
      name: 'Shiraz',
      shrine: 'Shah Cheragh Shrine',
      description: 'The magnificent mirror-work shrine of Shah Cheragh, brother of Imam Reza (AS), in the city of poets.',
      image: 'Stunning mirror work interior of Shah Cheragh shrine in Shiraz with thousands of reflective pieces',
      significance: 'Burial place of Ahmad ibn Musa, brother of Imam Reza (AS)',
      duration: '2 days recommended',
      highlights: ['Shah Cheragh Shrine', 'Nasir al-Mulk Mosque', 'Persepolis', 'Hafez Tomb']
    }
  ];

  const filteredDestinations = selectedCountry === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.country === selectedCountry);

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
              Sacred <span className="text-gradient">Destinations</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Discover the holy shrines and sacred sites that await your spiritual journey. 
              Each destination offers unique blessings and transformative experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedCountry('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCountry === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setSelectedCountry('iraq')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCountry === 'iraq'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Iraq
            </button>
            <button
              onClick={() => setSelectedCountry('iran')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCountry === 'iran'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Iran
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={`${destination.name} - ${destination.shrine}`}
                   src="https://images.unsplash.com/photo-1718680962024-0fa899e1815e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYmFsYXxlbnwwfHwwfHx8MA%3D%3D" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {destination.country}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    <Clock className="inline h-3 w-3 mr-1" />
                    {destination.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{destination.name}</h3>
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-emerald-600 mb-3">{destination.shrine}</h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-emerald-800 mb-2">Spiritual Significance:</p>
                    <p className="text-sm text-emerald-700">{destination.significance}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button asChild className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600">
                      <Link to="/packages">
                        View Tours <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/booking">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Pilgrimage Routes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the sacred geography of Iran and Iraq, where each destination 
              holds profound spiritual significance and historical importance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100"
          >
            <img  
              className="w-full h-96 object-cover rounded-xl" 
              alt="Map showing pilgrimage routes across Iran and Iraq with marked holy sites"
             src="https://images.unsplash.com/photo-1621273974925-b5b6d7a32140" />
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Our carefully planned routes ensure you visit all major shrines while maximizing 
                your spiritual experience and comfort throughout the journey.
              </p>
              <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-600">
                <Link to="/packages">Explore Tour Packages</Link>
              </Button>
            </div>
          </motion.div>
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
              Ready to Begin Your Sacred Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us guide you through these blessed destinations with our expert knowledge 
              and spiritual understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link to="/packages">Browse Packages</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
