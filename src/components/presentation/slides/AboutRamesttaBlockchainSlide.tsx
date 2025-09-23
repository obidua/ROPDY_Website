import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Coins, Shield, Users, TrendingUp, Network } from 'lucide-react';

export const AboutRamesttaBlockchainSlide: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast Transactions",
      description: "Lightning-fast transaction processing with minimal wait times",
      color: "text-yellow-400",
      gradient: "from-yellow-900/20 to-orange-900/20"
    },
    {
      icon: Coins,
      title: "Near-Zero Gas Fees",
      description: "Extremely low transaction costs for all operations",
      color: "text-amber-400",
      gradient: "from-amber-900/20 to-yellow-900/20"
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with high scalability",
      color: "text-blue-400",
      gradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Growing ecosystem with active development community",
      color: "text-purple-400",
      gradient: "from-purple-900/20 to-indigo-900/20"
    },
    {
      icon: TrendingUp,
      title: "DeFi Ready",
      description: "Built for decentralized finance applications",
      color: "text-green-400",
      gradient: "from-green-900/20 to-emerald-900/20"
    },
    {
      icon: Network,
      title: "NFT Support",
      description: "Full NFT infrastructure and marketplace support",
      color: "text-pink-400",
      gradient: "from-pink-900/20 to-rose-900/20"
    }
  ];

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12" {/* Responsive margin */}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400"> {/* Responsive text size */}
          Ramestta Blockchain
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto"> {/* Responsive text size */}
          A cutting-edge Layer 1 blockchain designed for maximum performance, security, and scalability
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 sm:mb-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-green-900/30 to-blue-900/30" {/* Responsive padding and margin */}
      >
        <div className="flex items-center justify-center mb-4 sm:mb-6"> {/* Responsive margin */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center"> {/* Responsive size */}
            <span className="text-white font-bold text-2xl sm:text-3xl">R</span> {/* Responsive text size */}
          </div>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Why Choose Ramestta?</h2> {/* Responsive text size */}
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"> {/* Responsive text size */}
          Ramestta combines the best of blockchain technology with innovative features designed for 
          real-world applications, making it the perfect foundation for ROPDY's decentralized earning platform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index} {/* Responsive layout for features */}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            className={`cyber-card p-4 sm:p-6 bg-gradient-to-br ${feature.gradient} hover:scale-105 transition-all duration-300`} {/* Responsive padding */}
          >
            <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30" {/* Responsive padding */}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Ramestta Ecosystem</h3> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"> {/* Responsive gap */}
          <div className="text-center"> {/* Responsive layout for ecosystem items */}
            <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">🏦</div> {/* Responsive icon size */}
            <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">DeFi Protocols</h4> {/* Responsive text size */}
            <p className="text-xs sm:text-sm text-gray-300">Lending, borrowing, and yield farming</p> {/* Responsive text size */}
          </div>
          
          <div className="text-center"> {/* Responsive layout for ecosystem items */}
            <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">🎨</div> {/* Responsive icon size */}
            <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">NFT Marketplace</h4> {/* Responsive text size */}
            <p className="text-xs sm:text-sm text-gray-300">Create, trade, and collect digital assets</p> {/* Responsive text size */}
          </div>
          
          <div className="text-center"> {/* Responsive layout for ecosystem items */}
            <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">⚡</div> {/* Responsive icon size */}
            <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">ROPDY Platform</h4> {/* Responsive text size */}
            <p className="text-xs sm:text-sm text-gray-300">Decentralized earning opportunities</p> {/* Responsive text size */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};