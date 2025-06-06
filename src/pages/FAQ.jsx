
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, Phone, Mail } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'booking', label: 'Booking & Payment' },
    { value: 'visa', label: 'Visa & Documentation' },
    { value: 'travel', label: 'Travel & Accommodation' },
    { value: 'religious', label: 'Religious Guidelines' },
    { value: 'health', label: 'Health & Safety' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How do I book a pilgrimage tour with Karwan e Hasan Askari?',
      answer: 'You can book through our website by selecting your preferred package and filling out the booking form, or by calling our office directly. We require a confirmation fee of ₹10,000 to secure your reservation, with the remaining amount payable in installments.'
    },
    {
      id: 2,
      category: 'booking',
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, UPI payments, net banking, and offer installment plans. For international transactions, we also accept wire transfers. All payments are processed securely through our certified payment gateway.'
    },
    {
      id: 3,
      category: 'booking',
      question: 'Can I cancel my booking? What is your cancellation policy?',
      answer: 'Yes, you can cancel your booking. Cancellation charges vary based on the time of cancellation: 45+ days before departure (10% charge), 30-44 days (25% charge), 15-29 days (50% charge), less than 15 days (75% charge). No refund for no-shows.'
    },
    {
      id: 4,
      category: 'visa',
      question: 'Do you provide visa assistance?',
      answer: 'Yes, we provide complete visa assistance for both Iran and Iraq. Our team will guide you through the documentation process and help with visa applications. We have partnerships with visa agencies to ensure smooth processing.'
    },
    {
      id: 5,
      category: 'visa',
      question: 'What documents are required for Iran and Iraq visas?',
      answer: 'For Iran: Valid passport (6+ months), passport photos, visa application form, travel insurance. For Iraq: Valid passport, invitation letter (we provide), passport photos, medical certificate, travel insurance. Specific requirements may vary based on your departure city.'
    },
    {
      id: 6,
      category: 'visa',
      question: 'How long does visa processing take?',
      answer: 'Iran visa typically takes 7-10 working days, while Iraq visa takes 10-15 working days. We recommend applying at least 3-4 weeks before your travel date. Express processing is available for urgent cases with additional fees.'
    },
    {
      id: 7,
      category: 'travel',
      question: 'What type of accommodation is provided?',
      answer: 'We provide 3-5 star hotels depending on your package, all located near the holy shrines for easy access. Rooms are typically double occupancy with modern amenities. Single rooms and family rooms are available upon request with additional charges.'
    },
    {
      id: 8,
      category: 'travel',
      question: 'Are meals included in the tour packages?',
      answer: 'Yes, most packages include breakfast and dinner. Some premium packages include all meals. All food is halal and we cater to dietary requirements like vegetarian, diabetic-friendly options. Local cuisine experiences are also included in cultural tours.'
    },
    {
      id: 9,
      category: 'travel',
      question: 'What should I pack for the pilgrimage?',
      answer: 'Essential items include: comfortable walking shoes, modest clothing, prayer mat, Quran, medications, power adapters, warm clothes (for winter), sunscreen, and personal hygiene items. We provide a detailed packing checklist upon booking confirmation.'
    },
    {
      id: 10,
      category: 'religious',
      question: 'Are there any dress code requirements at the shrines?',
      answer: 'Yes, modest dress is required at all holy sites. Men should wear long pants and shirts with sleeves. Women should wear loose-fitting clothes covering arms and legs, with head covering (hijab). Dark colors are preferred, especially in Karbala and Najaf.'
    },
    {
      id: 11,
      category: 'religious',
      question: 'Can I perform special prayers or rituals at the shrines?',
      answer: 'Absolutely! Our guides are knowledgeable about the recommended prayers and rituals at each shrine. We allocate sufficient time for personal prayers, group recitations, and special ceremonies. Guides can assist with proper etiquette and timing.'
    },
    {
      id: 12,
      category: 'religious',
      question: 'Are there separate arrangements for women pilgrims?',
      answer: 'Yes, we ensure comfortable arrangements for women including separate prayer areas, female guides when requested, and attention to privacy needs. Many shrines have dedicated women-only sections and timings.'
    },
    {
      id: 13,
      category: 'health',
      question: 'What health precautions should I take?',
      answer: 'We recommend consulting your doctor before travel, especially for elderly pilgrims or those with medical conditions. Carry necessary medications, stay hydrated, and follow our guide\'s health and safety instructions. Travel insurance is mandatory.'
    },
    {
      id: 14,
      category: 'health',
      question: 'Is travel insurance included?',
      answer: 'Yes, basic travel insurance is included in all our packages covering medical emergencies, trip cancellation, and baggage loss. We also offer comprehensive insurance upgrades for additional coverage including pre-existing medical conditions.'
    },
    {
      id: 15,
      category: 'health',
      question: 'What if I have a medical emergency during the tour?',
      answer: 'Our guides are trained in basic first aid and we have partnerships with local hospitals and medical facilities. Emergency contact numbers are provided, and our 24/7 support team can assist with medical emergencies and hospital arrangements.'
    },
    {
      id: 16,
      category: 'travel',
      question: 'How many people are typically in a tour group?',
      answer: 'Our group sizes typically range from 15-25 people to ensure personalized attention and comfortable travel. Larger groups may be divided into smaller units with dedicated guides for each group.'
    },
    {
      id: 17,
      category: 'booking',
      question: 'Can I customize my tour package?',
      answer: 'Yes, we offer customizable packages for groups of 10 or more. You can modify the itinerary, accommodation level, and duration based on your preferences. Additional costs may apply for customizations.'
    },
    {
      id: 18,
      category: 'travel',
      question: 'What languages do your guides speak?',
      answer: 'Our guides are fluent in Hindi, Urdu, and English. They also have basic knowledge of Arabic and Persian to assist with local interactions. All guides are well-versed in Islamic history and shrine significance.'
    },
    {
      id: 19,
      category: 'visa',
      question: 'Can I extend my stay after the tour ends?',
      answer: 'Yes, you can extend your stay, but you\'ll need to arrange your own accommodation and return flights. We can assist with visa extensions and provide recommendations for additional places to visit. Extended stay arrangements should be made before departure.'
    },
    {
      id: 20,
      category: 'health',
      question: 'Are there age restrictions for pilgrimage tours?',
      answer: 'There are no strict age restrictions, but we recommend that elderly pilgrims (70+) travel with a companion and have medical clearance. Children under 12 receive discounted rates. Special care arrangements can be made for elderly or disabled pilgrims.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Find answers to common questions about our pilgrimage services, 
              booking process, and travel arrangements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.value
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {filteredFAQs.length} Question{filteredFAQs.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-lg text-gray-600">
                Can't find what you're looking for? Contact our support team.
              </p>
            </motion.div>

            {filteredFAQs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b border-gray-200 last:border-b-0">
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <HelpCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="font-semibold text-gray-800">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pl-8">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          <div className="mt-3">
                            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full capitalize">
                              {categories.find(c => c.value === faq.category)?.label}
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <HelpCircle className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or category filter</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experienced team is here to help you with any questions about your pilgrimage journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100"
              >
                <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our pilgrimage experts</p>
                <p className="text-2xl font-bold text-emerald-600 mb-4">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Available 24/7 for assistance</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
              >
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed answers to your questions</p>
                <p className="text-lg font-semibold text-blue-600 mb-4">info@karwanehasan.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </motion.div>
            </div>

            <div className="mt-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600">
                <a href="/contact">Contact Support Team</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Quick Tips for First-Time Pilgrims</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold mb-2">Book Early</h3>
                <p className="text-sm">Secure better rates and preferred dates by booking 2-3 months in advance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold mb-2">Pack Light</h3>
                <p className="text-sm">Bring essentials only and leave space for spiritual souvenirs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold mb-2">Stay Flexible</h3>
                <p className="text-sm">Be open to schedule changes due to local conditions or special events</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
