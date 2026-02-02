import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, GraduationCap, Code, Brain } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Mustafa",
      role: "Machine Learning Lead",
      bio: "Passionate about applying machine learning to real-world academic challenges. Focused on model development, feature engineering, and optimization for the RefRank scoring system.",
      avatar: "M",
      color: "from-teal-500 to-teal-600",
      skills: ["Machine Learning", "Python", "Data Analysis", "XGBoost"],
      contributions: [
        "Designed and implemented the ML pipeline",
        "Feature engineering and selection",
        "Model training and hyperparameter tuning",
        "Performance evaluation and validation"
      ]
    },
    {
      name: "Salim",
      role: "Data & Systems Lead",
      bio: "Dedicated to building robust data systems and ensuring reliable data quality. Responsible for data collection, preprocessing, and system architecture for RefRank.",
      avatar: "S",
      color: "from-blue-500 to-blue-600",
      skills: ["Data Engineering", "API Development", "Database Design", "Python"],
      contributions: [
        "Data collection and preprocessing pipeline",
        "Database architecture and management",
        "API integration with academic databases",
        "Documentation and testing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Meet the Team
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The people behind RefRank — combining expertise in machine learning and data engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${member.color} p-8 text-center`}>
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                  <span className="text-4xl font-bold text-white">{member.avatar}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{member.name}</h2>
                <p className="text-white/90 font-medium">{member.role}</p>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-teal-500" />
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Contributions */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-teal-500" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {member.contributions.map((contribution, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Info */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-center"
        >
          <GraduationCap className="w-12 h-12 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            University Final Project
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
            RefRank was developed as part of our university capstone project. 
            This project represents the culmination of our studies in computer science and machine learning, 
            applying theoretical knowledge to solve a practical problem in academic research.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-teal-400 font-semibold">2024-2025</span>
              <span className="text-slate-400 ml-2">Academic Year</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-teal-400 font-semibold">Computer Science</span>
              <span className="text-slate-400 ml-2">Department</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Acknowledgments */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Acknowledgments</h2>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-slate-600 leading-relaxed">
              We would like to thank our academic advisors and professors for their guidance throughout this project. 
              Special thanks to the open-source community for providing the tools and libraries that made RefRank possible, 
              including scikit-learn, XGBoost, and the academic metadata providers whose APIs we utilized.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}