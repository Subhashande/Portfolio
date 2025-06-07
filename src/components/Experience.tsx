import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Users, Trophy } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Project-based',
      description: 'Developing various web applications using modern technologies including React, Node.js, and MongoDB. Focus on creating responsive, user-friendly applications with clean, maintainable code.',
      achievements: [
        'Built 4+ full-stack web applications with modern UI/UX design',
        'Implemented responsive designs that work across all devices',
        'Integrated third-party APIs and services for enhanced functionality',
        'Utilized version control (Git) for all project development'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'CSS3', 'HTML5']
    },
    {
      title: 'Frontend Developer',
      company: 'Open Source Contributions',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Volunteer',
      description: 'Contributing to open source projects and collaborating with developers worldwide. Focus on improving user interfaces and implementing new features.',
      achievements: [
        'Contributed to multiple open source React projects',
        'Improved application performance and user experience',
        'Collaborated with international development teams',
        'Learned industry best practices and coding standards'
      ],
      technologies: ['React' , 'Git', 'GitHub', 'CSS3', 'JavaScript']
    }
  ];

  const achievements = [
    {
      icon: Code,
      title: 'Projects Completed',
      count: '15+',
      description: 'Successfully delivered various web applications and projects'
    },
    {
      icon: Users,
      title: 'Collaborations',
      count: '10+',
      description: 'Worked with diverse teams on different projects'
    },
    {
      icon: Trophy,
      title: 'Technologies Mastered',
      count: '20+',
      description: 'Proficient in various programming languages and frameworks'
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Experience & Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey in software development through projects, collaborations, and continuous learning
            </p>
          </motion.div>

          {/* Achievements Overview */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                    <achievement.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.count}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
              <Briefcase className="text-blue-500" size={28} />
              Professional Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Project-based' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <p className="text-xl text-blue-500 dark:text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                        
                        <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4 w-1 h-8 bg-blue-200 dark:bg-blue-800"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
            <p className="text-lg mb-6 opacity-90">
              Currently seeking opportunities as a Full Stack Developer where I can contribute to 
              meaningful projects and continue growing my skills in modern web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full">Frontend Development</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">Backend Development</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">Full Stack Solutions</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">Team Collaboration</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;