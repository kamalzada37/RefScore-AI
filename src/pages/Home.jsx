import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BarChart3, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Metadata Analysis",
      description: "Analyzes publication year, citation count, publisher reputation, and document type"
    },
    {
      icon: BarChart3,
      title: "Quality Scoring",
      description: "Generates a normalized quality score from 0-100 for each reference"
    },
    {
      icon: Sparkles,
      title: "ML-Powered",
      description: "Uses trained machine learning models for accurate quality estimation"
    }
  ];

  const metadataFeatures = [
    "Publication Year",
    "Citation Count",
    "Publisher Reputation",
    "Number of Authors",
    "Document Type",
    "Journal Impact Factor"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm mb-8">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-600 font-medium">University Final Project</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
              Ref<span className="text-teal-600">Rank</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed">
              Academic Reference Quality Scoring System
            </p>
            
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
              Using machine learning to estimate the quality of academic references 
              based on publication metadata — helping researchers select more reliable sources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('About')}>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-slate-900/10">
                  Learn How It Works
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Results')}>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2">
                  View Results
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How RefRank Works
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our system analyzes multiple metadata features to provide accurate quality assessments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metadata Features */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Metadata Features We Analyze
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                RefRank extracts and processes key publication metadata to build a comprehensive quality profile for each academic reference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {metadataFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`{
  "reference": {
    "title": "Deep Learning Methods...",
    "year": 2023,
    "citations": 142,
    "authors": 4,
    "type": "journal_article",
    "publisher": "IEEE"
  },
  "quality_score": 87.4,
  "confidence": 0.92
}`}</code>
                </pre>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to explore our research?
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Discover the methodology behind RefRank and see how our machine learning model performs on real academic references.
          </p>
          <Link to={createPageUrl('About')}>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl">
              Explore the Methodology
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}