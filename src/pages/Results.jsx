import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Target, Award, CheckCircle } from 'lucide-react';

export default function Results() {
  const performanceMetrics = [
    { name: 'Accuracy', value: 87.3, icon: Target, color: 'text-teal-600' },
    { name: 'Precision', value: 85.1, icon: CheckCircle, color: 'text-blue-600' },
    { name: 'Recall', value: 82.9, icon: TrendingUp, color: 'text-purple-600' },
    { name: 'F1 Score', value: 84.0, icon: Award, color: 'text-orange-600' }
  ];

  const featureImportanceData = [
    { feature: 'Citations', importance: 25 },
    { feature: 'Publisher', importance: 20 },
    { feature: 'Impact Factor', importance: 15 },
    { feature: 'Pub Year', importance: 15 },
    { feature: 'Doc Type', importance: 15 },
    { feature: 'Authors', importance: 10 }
  ];

  const scoreDistribution = [
    { range: '0-20', count: 45, fill: '#ef4444' },
    { range: '21-40', count: 120, fill: '#f97316' },
    { range: '41-60', count: 280, fill: '#eab308' },
    { range: '61-80', count: 350, fill: '#22c55e' },
    { range: '81-100', count: 205, fill: '#14b8a6' }
  ];

  const trainingCurve = [
    { epoch: 1, train: 0.65, val: 0.62 },
    { epoch: 2, train: 0.72, val: 0.69 },
    { epoch: 3, train: 0.78, val: 0.74 },
    { epoch: 4, train: 0.82, val: 0.78 },
    { epoch: 5, train: 0.85, val: 0.81 },
    { epoch: 6, train: 0.87, val: 0.83 },
    { epoch: 7, train: 0.88, val: 0.85 },
    { epoch: 8, train: 0.89, val: 0.86 },
    { epoch: 9, train: 0.90, val: 0.87 },
    { epoch: 10, train: 0.91, val: 0.87 }
  ];

  const radarData = [
    { metric: 'Accuracy', value: 87 },
    { metric: 'Speed', value: 92 },
    { metric: 'Robustness', value: 78 },
    { metric: 'Interpretability', value: 85 },
    { metric: 'Scalability', value: 90 }
  ];

  const samplePredictions = [
    {
      title: "Deep Learning for Natural Language Processing",
      year: 2023,
      citations: 142,
      type: "Journal Article",
      publisher: "IEEE",
      score: 87.4,
      confidence: 0.92
    },
    {
      title: "A Survey of Machine Learning Techniques",
      year: 2021,
      citations: 89,
      type: "Conference Paper",
      publisher: "ACM",
      score: 76.2,
      confidence: 0.88
    },
    {
      title: "Introduction to Statistical Learning",
      year: 2019,
      citations: 1250,
      type: "Book",
      publisher: "Springer",
      score: 94.1,
      confidence: 0.95
    },
    {
      title: "Novel Approaches to Data Mining",
      year: 2024,
      citations: 12,
      type: "Preprint",
      publisher: "arXiv",
      score: 52.8,
      confidence: 0.71
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-teal-600 bg-teal-50';
    if (score >= 60) return 'text-green-600 bg-green-50';
    if (score >= 40) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Model Results
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Performance metrics, visualizations, and sample predictions from our trained model
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
            >
              <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                {metric.value}%
              </div>
              <div className="text-sm text-slate-500 font-medium">{metric.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Charts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature Importance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Feature Importance</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={featureImportanceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 30]} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis dataKey="feature" type="category" tick={{ fill: '#64748b', fontSize: 12 }} width={80} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="importance" fill="#14b8a6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Score Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Score Distribution</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="range" tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {scoreDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Training Curve */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Training & Validation Accuracy</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={trainingCurve}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="epoch" tick={{ fill: '#64748b', fontSize: 12 }} label={{ value: 'Epoch', position: 'bottom', fill: '#64748b' }} />
                <YAxis domain={[0.5, 1]} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="train" stroke="#1e3a5f" strokeWidth={2} dot={{ fill: '#1e3a5f' }} name="Training" />
                <Line type="monotone" dataKey="val" stroke="#14b8a6" strokeWidth={2} dot={{ fill: '#14b8a6' }} name="Validation" />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1e3a5f]" />
                <span className="text-sm text-slate-600">Training</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-500" />
                <span className="text-sm text-slate-600">Validation</span>
              </div>
            </div>
          </motion.div>

          {/* Model Performance Radar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Model Characteristics</h3>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: '#64748b', fontSize: 11 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                <Radar name="Score" dataKey="value" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.3} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Sample Predictions */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Sample Predictions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {samplePredictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4 leading-tight">
                    {prediction.title}
                  </h3>
                  <div className={`flex-shrink-0 px-3 py-1.5 rounded-lg font-bold ${getScoreColor(prediction.score)}`}>
                    {prediction.score}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div>
                    <span className="text-slate-500">Year:</span>
                    <span className="ml-2 text-slate-700 font-medium">{prediction.year}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Citations:</span>
                    <span className="ml-2 text-slate-700 font-medium">{prediction.citations}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Type:</span>
                    <span className="ml-2 text-slate-700 font-medium">{prediction.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Publisher:</span>
                    <span className="ml-2 text-slate-700 font-medium">{prediction.publisher}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-500"
                      style={{ width: `${prediction.confidence * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {(prediction.confidence * 100).toFixed(0)}% confidence
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Summary Stats */}
      <section className="bg-slate-900 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Summary Statistics</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">10K+</div>
                <div className="text-slate-400">Training Samples</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">6</div>
                <div className="text-slate-400">Input Features</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">87%</div>
                <div className="text-slate-400">Test Accuracy</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">&lt;50ms</div>
                <div className="text-slate-400">Inference Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}