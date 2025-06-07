import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science & Engineering',
      institution: 'Parul University',
      location: 'Vadodara, Gujarat',
      period: '2022 - 2026',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering with focus on software development, algorithms, and modern web technologies.',
      highlights: [
        'Relevant Coursework: Data Structures, Algorithms, Web Development',
        'Active member of coding clubs and technical societies',
        'Participated in various hackathons and coding competitions'
      ],
      status: 'In Progress'
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Board of Intermediate Education',
      location: 'Andhra Pradesh',
      period: '2020 - 2022',
      description: 'Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.',
      highlights: [
        'Strong foundation in Mathematics and Science',
        'Developed analytical and problem-solving skills',
        'First exposure to programming concepts'
      ],
      status: 'Completed'
    }
  ];

  const certifications = [
    {
      title: 'React Development',
      issuer: 'Online Course',
      date: '2023',
      description: 'Comprehensive course covering React fundamentals, hooks, and modern development practices.'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Certification in JavaScript programming with emphasis on algorithms and data structures.'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Online Bootcamp',
      date: '2023',
      description: 'Intensive program covering front-end and back-end web development technologies.'
    }
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
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
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
              Education & Learning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey and continuous learning path in technology and software development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                <GraduationCap className="text-blue-500" size={28} />
                Academic Background
              </h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-500 font-semibold mb-1">
                            {edu.institution}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'In Progress' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                <Award className="text-purple-500" size={28} />
                Certifications & Courses
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Learning Goals */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white"
              >
                <h4 className="text-xl font-bold mb-4">Current Learning Goals</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Advanced React Patterns & Performance Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Cloud Computing with AWS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Advanced Node & Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    JAVA Fullstack like Spring and SpringBoot
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;