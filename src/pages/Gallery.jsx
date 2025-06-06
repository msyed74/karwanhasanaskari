
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, MapPin, Calendar } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    { value: 'all', label: 'All Media' },
    { value: 'karbala', label: 'Karbala' },
    { value: 'najaf', label: 'Najaf' },
    { value: 'mashhad', label: 'Mashhad' },
    { value: 'qom', label: 'Qom' },
    { value: 'pilgrims', label: 'Pilgrims' },
    { value: 'videos', label: 'Videos' }
  ];

  const galleryItems = [
   
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : selectedCategory === 'videos'
    ? galleryItems.filter(item => item.type === 'video')
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

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
              Sacred <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Witness the spiritual beauty and transformative moments from our pilgrimage journeys. 
              Experience the divine atmosphere of holy shrines through our collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
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
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {filteredItems.length} {selectedCategory === 'all' ? 'Items' : categories.find(c => c.value === selectedCategory)?.label}
            </h2>
            <p className="text-lg text-gray-600">
              Explore our collection of sacred moments and spiritual experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => openModal(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    alt={item.title}
                   src="https://images.unsplash.com/photo-1625496784769-5b5f18456f7e" />
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <Play className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {item.duration}
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-2 left-2 bg-emerald-600 text-white px-2 py-1 rounded text-xs font-semibold capitalize">
                    {item.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Play className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No media found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="relative h-96">
                {selectedMedia.type === 'video' ? (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Video Player</p>
                      <p className="text-sm opacity-75">Duration: {selectedMedia.duration}</p>
                    </div>
                  </div>
                ) : (
                  <img  
                    className="w-full h-full object-cover" 
                    alt={selectedMedia.title}
                   src="https://images.unsplash.com/photo-1625496784769-5b5f18456f7e" />
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{selectedMedia.title}</h2>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{selectedMedia.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(selectedMedia.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedMedia.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
