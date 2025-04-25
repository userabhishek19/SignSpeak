import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "SignSpeak has revolutionized how I communicate with my deaf cousin. What used to take written notes now happens in real-time conversation.",
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "As a teacher at a school for the deaf, this technology has made our integration programs with hearing schools so much more successful.",
      name: "Sarah Johnson",
      role: "Special Education Teacher",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "The accuracy of translation is incredible. I can now participate in meetings and social gatherings without needing an interpreter.",
      name: "David Rodriguez",
      role: "Deaf Community Advocate",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-full h-full -z-10 transform -translate-x-1/2">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">How It Helps</h2>
          <p className="text-xl text-gray-300">
            Real stories from people whose lives have been changed by bridging the communication gap
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="glass-card relative h-full"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 30px -10px rgba(0,215,200,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute -top-5 -right-5 bg-accent-500 rounded-full p-3 text-white shadow-lg">
                <MessageCircle size={24} />
              </div>
              <div className="p-8">
                <blockquote className="text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;