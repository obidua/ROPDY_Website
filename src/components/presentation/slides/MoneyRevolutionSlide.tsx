import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coins, CreditCard, Smartphone, Network } from 'lucide-react';

export const MoneyRevolutionSlide: React.FC = () => {
  const evolutionSteps = [
    {
      era: "Barter System",
      period: "Ancient Times",
      icon: "🔄",
      description: "Direct exchange of goods and services",
      color: "from-amber-600 to-orange-700"
    },
    {
      era: "Commodity Money",
      period: "3000 BC - 600 BC",
      icon: "🥇",
      description: "Gold, silver, and precious metals as currency",
      color: "from-yellow-600 to-amber-700"
    },
    {
      era: "Paper Money",
      period: "7th Century",
      icon: "💵",
      description: "Government-issued currency backed by gold",
      color: "from-green-600 to-emerald-700"
    },
    {
      era: "Digital Banking",
      period: "1960s - 2000s",
      icon: "💳",
      description: "Electronic transactions and credit cards",
      color: "from-blue-600 to-cyan-700"
    },
    {
      era: "Blockchain Era",
      period: "2009 - Present",
      icon: "⛓️",
      description: "Decentralized, trustless digital currency",
      color: "from-purple-600 to-indigo-700"
    }
  ];

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
          The Money Revolution
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From Barter to Blockchain: The Evolution of Value Exchange
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-blue-500 opacity-30"></div>
        
        <div className="space-y-8">
          {evolutionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`cyber-card p-6 bg-gradient-to-br ${step.color} bg-opacity-20`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{step.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{step.era}</h3>
                      <p className="text-sm text-gray-300">{step.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-200">{step.description}</p>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className="relative z-10">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 border-4 border-black"></div>
              </div>
              
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-12 cyber-card p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30"
      >
        <Network className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">The Blockchain Revolution</h3>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Blockchain technology represents the biggest leap in monetary systems since the invention of paper money. 
          It enables trustless, decentralized value exchange without intermediaries.
        </p>
      </motion.div>
    </div>
  );
};