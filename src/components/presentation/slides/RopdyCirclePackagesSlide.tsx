import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Crown, Rocket, Diamond } from 'lucide-react';

export const RopdyCirclePackagesSlide: React.FC = () => {
  const packageLevels = [
    {
      tier: "Starter",
      price: 20,
      unlocks: "Entry + CP1/MOD1",
      icon: Star,
      color: "from-green-900/20 to-emerald-900/20",
      iconColor: "text-yellow-400"
    },
    {
      tier: "Silver",
      price: 40,
      unlocks: "CP2 + MOD2",
      icon: Award,
      color: "from-green-900/20 to-black/50",
      iconColor: "text-gray-300"
    },
    {
      tier: "Gold",
      price: 80,
      unlocks: "Full matrix access",
      icon: Crown,
      color: "from-green-900/30 to-emerald-900/30",
      iconColor: "text-amber-400"
    },
    {
      tier: "Platinum",
      price: 160,
      unlocks: "Greater team benefit",
      icon: Rocket,
      color: "from-green-900/30 to-black/50",
      iconColor: "text-red-400"
    },
    {
      tier: "Diamond",
      price: 320,
      unlocks: "Highest tier, elite income",
      icon: Diamond,
      color: "from-green-900/40 to-emerald-900/40",
      iconColor: "text-blue-400"
    },
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
          ROPDY Circle: Package Options
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          One-time entry per package unlocks different earning potentials.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
      >
        {packageLevels.map((pkg, index) => (
          <div
            key={index}
            className={`cyber-card p-4 sm:p-6 bg-gradient-to-br ${pkg.color} border border-green-900/20`}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">{pkg.tier}</h3>
              <pkg.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${pkg.iconColor}`} />
            </div>
            <div className="mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-green-400">${pkg.price}</span>
              <span className="text-sm sm:text-base text-green-200 ml-1 sm:ml-2">USD</span>
            </div>
            <div className="p-2 sm:p-4 bg-black/20 rounded-lg">
              <p className="text-sm sm:text-base text-green-200">{pkg.unlocks}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 sm:mt-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Earnings Denominated in USD, Paid in RAMA</h3>
        <p className="text-base sm:text-lg text-emerald-200 max-w-3xl mx-auto">
          All package earnings are illustrated in USD, but the smart contract pays out the USD-equivalent in RAMA Coin at the time of transfer.
        </p>
      </motion.div>
    </div>
  );
};