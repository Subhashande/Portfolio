import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '15+' },
    { icon: Rocket, label: 'Technologies Mastered', value: '20+' },
    { icon: Users, label: 'Team Collaborations', value: '10+' },
    { icon: Award, label: 'Certifications', value: '5+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and turning complex problems into elegant code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Hello! I'm Lakshmi Subhash
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated software developer currently pursuing my Bachelor's degree in 
                  Computer Science and Engineering at Parul University. With a strong foundation 
                  in full-stack development, I specialize in creating responsive web applications 
                  using modern technologies.
                </p>
                
                <p>
                  My journey in programming began with curiosity and has evolved into a passion 
                  for building solutions that make a difference. I enjoy working with React, 
                  Node.js, and various databases to create seamless user experiences.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or learning about the latest trends in software 
                  development. I believe in continuous learning and staying updated with 
                  industry best practices.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Let's Connect
                </button>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                      <stat.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;