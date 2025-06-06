
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'news', label: 'News & Updates' },
    { value: 'tips', label: 'Travel Tips' },
    { value: 'religious', label: 'Religious Significance' },
    { value: 'dua-e-zehra', label: 'Dua-e-Zehra' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Essential Packing Guide for Ziyarat 2024',
      excerpt: 'Complete checklist of items to pack for your spiritual journey to Iran and Iraq. From clothing requirements to spiritual essentials.',
      content: 'Planning for a pilgrimage requires careful consideration of what to pack. This comprehensive guide covers everything from modest clothing requirements at holy shrines to essential spiritual items...',
      category: 'tips',
      author: 'Hasan Askari',
      date: '2024-12-15',
      readTime: '5 min read',
      image: 'Neatly packed suitcase with modest clothing and spiritual items for pilgrimage',
      tags: ['Packing', 'Travel Tips', 'Pilgrimage', 'Preparation']
    },
    {
      id: 2,
      title: 'Updated Visa Requirements for Iran and Iraq 2024',
      excerpt: 'Latest information on visa processes, documentation requirements, and processing times for Indian pilgrims traveling to Iran and Iraq.',
      content: 'Visa requirements have been updated for 2024. Here\'s everything you need to know about the latest documentation requirements, processing times, and important changes...',
      category: 'news',
      author: 'Ahmed Rahman',
      date: '2024-12-10',
      readTime: '7 min read',
      image: 'Passport with visa stamps and official documents for Iran Iraq travel',
      tags: ['Visa', 'Documentation', 'Travel Requirements', 'Updates']
    },
    {
      id: 3,
      title: 'The Spiritual Significance of Karbala',
      excerpt: 'Understanding the deep spiritual meaning and historical importance of Karbala in Islamic tradition and its relevance to modern pilgrims.',
      content: 'Karbala holds a special place in Islamic history and spirituality. This article explores the profound significance of this holy city and what it means for pilgrims today...',
      category: 'religious',
      author: 'Dr. Fatima Khan',
      date: '2024-12-05',
      readTime: '10 min read',
      image: 'Golden dome of Imam Hussain shrine in Karbala with pilgrims in contemplation',
      tags: ['Karbala', 'Islamic History', 'Spirituality', 'Imam Hussain']
    },
    {
      id: 4,
      title: 'Health and Safety Guidelines for Elderly Pilgrims',
      excerpt: 'Important health considerations, safety tips, and special arrangements for elderly pilgrims undertaking the sacred journey.',
      content: 'Pilgrimage is a spiritual journey that should be accessible to all ages. This guide provides essential health and safety information for elderly pilgrims...',
      category: 'tips',
      author: 'Dr. Mohammad Ali',
      date: '2024-11-28',
      readTime: '6 min read',
      image: 'Elderly pilgrims receiving care and assistance during their spiritual journey',
      tags: ['Health', 'Safety', 'Elderly Care', 'Medical Tips']
    },
    {
      id: 5,
      title: 'The Blessed Tradition of Dua-e-Zehra',
      excerpt: 'Exploring the spiritual foundation of our organization and the significance of Dua-e-Zehra in guiding pilgrims on their sacred journey.',
      content: 'Dua-e-Zehra represents the spiritual heart of our mission. This article delves into the blessed tradition that guides our approach to pilgrimage services...',
      category: 'dua-e-zehra',
      author: 'Hasan Askari',
      date: '2024-11-20',
      readTime: '8 min read',
      image: 'Beautiful calligraphy of Dua-e-Zehra with spiritual Islamic patterns',
      tags: ['Dua-e-Zehra', 'Spirituality', 'Islamic Tradition', 'Blessings']
    },
    {
      id: 6,
      title: 'Arbaeen 2024: What Pilgrims Need to Know',
      excerpt: 'Complete guide to participating in Arbaeen pilgrimage, including registration process, accommodation, and spiritual preparation.',
      content: 'Arbaeen is one of the largest peaceful gatherings in the world. Here\'s everything you need to know about participating in this blessed event...',
      category: 'news',
      author: 'Syed Hussain',
      date: '2024-11-15',
      readTime: '9 min read',
      image: 'Millions of pilgrims walking towards Karbala during Arbaeen pilgrimage',
      tags: ['Arbaeen', 'Pilgrimage', 'Karbala', 'Registration']
    },
    {
      id: 7,
      title: 'Cultural Etiquette in Iran: A Pilgrim\'s Guide',
      excerpt: 'Understanding Iranian culture, customs, and etiquette to enhance your pilgrimage experience and show respect to local traditions.',
      content: 'Respecting local culture enhances the pilgrimage experience. This guide covers important cultural etiquette for pilgrims visiting Iran...',
      category: 'tips',
      author: 'Nasreen Fatima',
      date: '2024-11-08',
      readTime: '6 min read',
      image: 'Iranian cultural scene with traditional architecture and local customs',
      tags: ['Iran', 'Culture', 'Etiquette', 'Respect']
    },
    {
      id: 8,
      title: 'The Architecture of Faith: Holy Shrines Explained',
      excerpt: 'Exploring the magnificent architecture of holy shrines in Iran and Iraq, understanding the symbolism and spiritual significance.',
      content: 'The architecture of holy shrines tells a story of faith, devotion, and artistic excellence. This article explores the magnificent structures that house these sacred spaces...',
      category: 'religious',
      author: 'Prof. Ali Hassan',
      date: '2024-10-30',
      readTime: '12 min read',
      image: 'Detailed architectural view of shrine with golden dome and intricate Islamic patterns',
      tags: ['Architecture', 'Shrines', 'Islamic Art', 'Symbolism']
    },
    {
      id: 9,
      title: 'Budget Planning for Your Pilgrimage Journey',
      excerpt: 'Comprehensive guide to planning and budgeting for your pilgrimage, including cost breakdowns and money-saving tips.',
      content: 'Planning a pilgrimage involves financial preparation. This guide helps you understand costs and plan your budget effectively...',
      category: 'tips',
      author: 'Ahmed Rahman',
      date: '2024-10-25',
      readTime: '7 min read',
      image: 'Financial planning documents and calculator for pilgrimage budget',
      tags: ['Budget', 'Planning', 'Costs', 'Financial Tips']
    },
    {
      id: 10,
      title: 'Women Pilgrims: Special Considerations and Guidelines',
      excerpt: 'Important information for women pilgrims including dress codes, safety measures, and special facilities available at holy sites.',
      content: 'Women pilgrims have specific needs and considerations. This comprehensive guide addresses all aspects of pilgrimage for women...',
      category: 'tips',
      author: 'Zainab Khatoon',
      date: '2024-10-18',
      readTime: '8 min read',
      image: 'Women pilgrims in modest dress visiting holy shrine with proper guidance',
      tags: ['Women', 'Safety', 'Guidelines', 'Facilities']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

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
              Pilgrimage <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Insights, tips, and spiritual guidance for your sacred journey. 
              Stay updated with the latest news and deepen your understanding of pilgrimage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Article</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img  
                    className="w-full h-64 md:h-full object-cover" 
                    alt={featuredPost.title}
                   src="https://images.unsplash.com/photo-1585226256695-e8e7738b7c72" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {filteredPosts.length} Article{filteredPosts.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-lg text-gray-600">
              Explore our collection of insights and guidance for pilgrims
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={post.title}
                   src="https://images.unsplash.com/photo-1585226256695-e8e7738b7c72" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        <Tag className="inline h-2 w-2 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
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
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest pilgrimage insights, travel tips, and spiritual guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts Sidebar */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left"
                >
                  <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm opacity-90 mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-xs opacity-75">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
