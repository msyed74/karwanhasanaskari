
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Heart, Star, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Spiritual Devotion",
      description: "Every journey is guided by deep spiritual understanding and reverence for the sacred traditions."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety and comfort are our top priorities, with comprehensive insurance and support."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting bonds among pilgrims through shared spiritual experiences and brotherhood."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing exceptional service that exceeds expectations on every pilgrimage."
    }
  ];
{/*
  const milestones = [
    { year: "2010", event: "Founded with a vision to serve pilgrims", count: "First 100 pilgrims" },
    { year: "2015", event: "Expanded to Iraq pilgrimage services", count: "1,000+ pilgrims served" },
    { year: "2018", event: "Received Tourism Excellence Award", count: "5,000+ happy pilgrims" },
    { year: "2020", event: "Launched digital booking platform", count: "Contactless services" },
    { year: "2024", event: "Celebrating 14 years of service", count: "10,000+ pilgrims served" }
  ];
*/}
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
              About <span className="text-gradient">Karwan e Hasan Askari</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Serving the spiritual journey of pilgrims for over a decade with devotion, 
              expertise, and unwavering commitment to the sacred tradition of Dua-e-Zehra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-2xl shadow-2xl" 
                alt="Pilgrims at holy shrine in spiritual gathering"
               src="https://images.pexels.com/photos/26841371/pexels-photo-26841371/free-photo-of-gathering-in-holy-shrine-of-abu-fadhl-al-abbas.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To facilitate meaningful and transformative pilgrimage experiences that connect 
                  devotees with their spiritual heritage. We are dedicated to providing safe, 
                  comfortable, and spiritually enriching journeys to the sacred shrines of Iran and Iraq, 
                  guided by the blessed tradition of Dua-e-Zehra.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the most trusted and respected pilgrimage service provider, known for our 
                  spiritual guidance, exceptional service, and deep understanding of the sacred journey. 
                  We envision a world where every pilgrim can access the transformative power of ziyarat 
                  with complete peace of mind.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every aspect of our service and define our commitment to pilgrims
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Milestones 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in pilgrimage services
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.count}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Dedicated Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals committed to making your pilgrimage journey meaningful and memorable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
            
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rakshanda Rizvi</h3>
              <p className="text-emerald-600 font-semibold mb-4">Founder & Spiritual Guide</p>
              <p className="text-gray-600">
                Rakshanda Rizvi founded the organization with a vision to serve pilgrims with devotion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg  text-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Syed Mohammad Baqir</h3>
              <p className="text-emerald-600 font-semibold mb-4">Operations Manager</p>
              <p className="text-gray-600">
                Ensures seamless coordination of all pilgrimage activities 
                in international ziyarat tour operations and logistics management.
              </p>
            </motion.div>
{/*
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <img  
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
                alt="Customer service representative helping pilgrims"
               src="https://images.unsplash.com/photo-1603991414220-51b87b89a371" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fatima Khan</h3>
              <p className="text-emerald-600 font-semibold mb-4">Customer Relations</p>
              <p className="text-gray-600">
                Dedicated to providing exceptional customer service and support throughout the pilgrimage 
                journey, ensuring every pilgrim feels cared for and valued.
              </p>
            </motion.div>
            */}
          </div>
        </div>
      </section>

      {/* Statistics 
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <p className="text-xl">Happy Pilgrims</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">14</div>
              <p className="text-xl">Years of Service</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-xl">Tour Packages</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <p className="text-xl">Average Rating</p>
            </div>
          </motion.div>
        </div>
      </section>
*/}
      {/* Dua-e-Zehra Context */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              The Blessing of <span className="text-gradient font-arabic">دعا زہرا</span>
            </h2>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our organization is blessed with the spiritual guidance of Dua-e-Zehra, a sacred tradition 
                that emphasizes the importance of seeking divine blessings through the intercession of 
                Hazrat Fatima Zehra (SA). This spiritual foundation guides every aspect of our service, 
                ensuring that each pilgrimage is not just a journey to sacred places, but a transformative 
                spiritual experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that through sincere devotion and proper spiritual guidance, every pilgrim 
                can experience the profound blessings and spiritual elevation that comes from visiting 
                the holy shrines of the Ahlul Bayt (AS).
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
