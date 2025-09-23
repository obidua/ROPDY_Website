```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, Target, Coins } from 'lucide-react';

export const RopdyCircleHowItWorksSlide: React.FC = () => {
  const howItWorks = [
    {
      step: 1,
      title: "Activate Package",
      description: "Choose a package using RAMA Coin from your Web3 wallet",
      icon: Coins,
      color: "text-green-400"
    },
    {
      step: 2,
      title: "Circle Opens",
      description: "Each package opens a circle that collects 6 payments",
      icon: Target,
      color: "text-blue-400"
    },
    {
      step: 3,
      title: "Earn Instantly",
      description: "Payments #1-#4 pay instantly to your wallet",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      step: 4,
      title: "Auto Reactivation",
      description: "Payments #5-#6 are held for auto reactivation",
      icon: RefreshCw,
      color: "text-purple-400"
    }
  ];

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
          ROPDY Circle: How It Works
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          A simple, automated 4-step process to generate continuous income.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30"
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">The Automated Cycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {howItWorks.map((item, index) => (
            <div key={index} className="cyber-card p-3 sm:p-6 bg-gradient-to-br from-black/30 to-gray-900/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <span className="text-white font-bold text-base sm:text-lg">{item.step}</span>
              </div>
              <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color} mx-auto mb-1 sm:mb-3`} />
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 sm:mt-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30"
      >
        <RefreshCw className="w-10 h-10 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-2 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Hands-Free Earning</h3>
        <p className="text-base sm:text-lg text-emerald-200 max-w-3xl mx-auto">
          The smart contract handles all distributions and reactivations automatically.
          Your earnings are sent directly to your wallet, no withdrawal button needed!
        </p>
      </motion.div>
    </div>
  );
};
```