
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store contact inquiry in localStorage
    const inquiry = {
      ...formData,
      id: `INQ${Date.now()}`,
      date: new Date().toISOString(),
      status: 'new'
    };
    
    const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    existingInquiries.push(inquiry);
    localStorage.setItem('inquiries', JSON.stringify(existingInquiries));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours. Thank you for contacting us.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9691938002', '+91 98765 43211'],
      description: 'Available 24/7 for assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['karwanehasanaskari786@gmail.com', 'booking@karwanehasan.com'],
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Locations',
      details: ['Mandla (Main Office)'],
      description: 'Visit us for personal consultation'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      description: 'Emergency support available 24/7'
    }
  ];

  const offices = [
    {
      city: 'Mandla',
      type: 'Main Office',
      address: ' Eden Garden, Mandla - 481661',
      phone: '+91 9691938002',
      email: 'karwanehasanaskari786@gmail.com',
      manager: 'Rakshanda Rizvi'
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'booking', label: 'Booking Information' },
    { value: 'visa', label: 'Visa Assistance' },
    { value: 'packages', label: 'Tour Packages' },
    { value: 'support', label: 'Customer Support' },
    { value: 'feedback', label: 'Feedback' }
  ];

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
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Get in touch with our experienced team for personalized assistance 
              with your pilgrimage journey. We're here to help make your spiritual dreams come true.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for all your pilgrimage needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-semibold">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 py-3"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map and Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <img  
                    className="w-full h-full object-cover" 
                    alt="Map showing Karwan e Hasan Askari office locations in Delhi, Mumbai, and Lucknow"
                   src="https://images.unsplash.com/photo-1621273974925-b5b6d7a32140" />
                  <div className="absolute inset-0 bg-emerald-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Our Office Locations</p>
                      <p className="text-sm text-gray-600">Mandla, 481661 (Madhya Pradesh)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="tel:+919876543210"
                    className="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-emerald-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Call Now</p>
                      <p className="text-sm text-gray-600">+91 9691938002</p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="https://wa.me/919691938002"
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-sm text-gray-600">Chat with us instantly</p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="mailto:info@karwanehasan.com"
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-sm text-gray-600">karwanehasanaskari786@gmail.com</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Office Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our convenient locations for personal consultation and assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{office.city}</h3>
                    <p className="text-sm text-emerald-600 font-semibold">{office.type}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Address:</p>
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Phone:</p>
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Email:</p>
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Manager:</p>
                    <p className="text-gray-600">{office.manager}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Quick Answers?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Check our comprehensive FAQ section for instant answers to common questions 
              about pilgrimage tours, booking, and travel requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <a href="/faq">View FAQ</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="/packages">Browse Packages</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
