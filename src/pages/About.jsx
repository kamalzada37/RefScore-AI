import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, LineChart, Target, Workflow, Layers } from 'lucide-react';

export default function About() {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "We gather publication metadata from academic databases including Crossref, Semantic Scholar, and institutional repositories. Each reference is enriched with citation counts, publication dates, author information, and publisher details."
    },
    {
      icon: Layers,
      title: "Feature Engineering",
      description: "Raw metadata is transformed into meaningful features: normalized citation rates, author h-index aggregations, publisher reputation scores, document type encodings, and temporal relevance weights."
    },
    {
      icon: Cpu,
      title: "Model Training",
      description: "We employ a gradient boosting ensemble (XGBoost) trained on expert-labeled reference quality data. The model learns complex relationships between metadata features and perceived quality."
    },
    {
      icon: Target,
      title: "Quality Scoring",
      description: "The trained model outputs a quality score (0-100) along with confidence intervals. Higher scores indicate references with stronger academic credibility and relevance."
    }
  ];

  const features = [
    {
      name: "Publication Year",
      description: "Recency weighting based on field-specific decay rates. More recent publications may score higher in fast-moving fields.",
      weight: "15%"
    },
    {
      name: "Citation Count",
      description: "Normalized by publication age and field average. Highly-cited works indicate community validation.",
      weight: "25%"
    },
    {
      name: "Publisher Reputation",
      description: "Encoded based on publisher impact factors, acceptance rates, and indexing in major databases.",
      weight: "20%"
    },
    {
      name: "Number of Authors",
      description: "Collaborative works from multiple institutions often undergo more rigorous internal review.",
      weight: "10%"
    },
    {
      name: "Document Type",
      description: "Journal articles, conference papers, books, and preprints are weighted differently based on peer-review rigor.",
      weight: "15%"
    },
    {
      name: "Journal Impact Factor",
      description: "Where available, the venue's impact factor provides a proxy for publication quality standards.",
      weight: "15%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/30 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              About RefRank
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding our machine learning approach to academic reference quality scoring
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              RefRank is a university final project that addresses a common challenge in academic research: 
              evaluating the quality and reliability of references. While citation counts provide some signal, 
              they don't capture the full picture of a source's credibility.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our system uses machine learning to analyze multiple metadata features simultaneously, 
              producing a holistic quality score that helps researchers and students make more informed 
              decisions when selecting sources for their academic writing.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The goal is not to replace human judgment, but to provide an additional data-driven 
              perspective that can surface potentially high-quality references that might otherwise be overlooked.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Methodology Pipeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Methodology</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our four-stage pipeline transforms raw metadata into actionable quality scores
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                      Step {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Feature Importance</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Each metadata feature contributes differently to the final quality score
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                  <span className="text-teal-400 font-mono text-sm bg-teal-400/10 px-2 py-1 rounded">
                    {feature.weight}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technical Specifications</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Model Architecture</h3>
              <p className="text-slate-600 mb-4">
                XGBoost gradient boosting ensemble with 500 estimators, max depth of 6, 
                and learning rate of 0.1. Regularization parameters tuned via 5-fold cross-validation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Python 3.10</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">XGBoost</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">scikit-learn</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">pandas</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Training Data</h3>
              <p className="text-slate-600">
                10,000+ academic references manually labeled by domain experts across multiple disciplines. 
                Labels based on peer assessment of source quality, relevance, and academic rigor.
                Dataset split: 70% training, 15% validation, 15% test.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Limitations</h3>
              <p className="text-slate-600">
                The model works best for STEM publications where metadata is consistently available. 
                Humanities and social sciences may have less reliable metadata. The system should be used 
                as one input among many when evaluating reference quality, not as a definitive judgment.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}