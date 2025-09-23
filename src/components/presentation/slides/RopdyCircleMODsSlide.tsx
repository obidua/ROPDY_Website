```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, Coins, AlertTriangle } from 'lucide-react';

export const RopdyCircleMODsSlide: React.FC = () => {
  const smartModes = [
    {
      mode: "MOD1",
      whatHappens: "Payment #3 logic",
      whoGetsPaid: "2nd Upline",
      icon: Zap,
      color: "from-green-900/20 to-emerald-900/20",
      iconColor: "text-blue-400"
    },
    {
      mode: "MOD2",
      whatHappens: "Payment #5 logic",
      whoGetsPaid: "3rd Upline",
      icon: Shield,
      color: "from-green-900/30 to-emerald-900/30",
      iconColor: "text-purple-400"
    },
    {
      mode: "MOD3",
      whatHappens: "Payment #8 logic",
      whoGetsPaid: "Platform sustainability address",
      icon: Users,
      color: "from-green-900/40 to-emerald-900/40",
      iconColor: "text-orange-400"
    },
    {
      mode: "MOD4",
      whatHappens: "Fallback logic",
      whoGetsPaid: "Community members from MOD4 Pool",
      icon: Coins,
      color: "from-green-900/50 to-emerald-900/50",
      iconColor: "text-teal-400"
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
          ROPDY Circle: MOD Algorithms
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          The intelligent logic behind CP2 distribution, ensuring fair and dynamic rewards.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">The 4 Modes of Smart Earning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {smartModes.map((mode, index) => (
            <div
              key={index}
              className={`cyber-card p-3 sm:p-6 bg-gradient-to-br ${mode.color} border border-green-900/20`}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">{mode.mode}</h3>
                <mode.icon className={`w-6 h-6 ${mode.iconColor}`} />
              </div>
              <div className="space-y-2 sm:space-y-4 text-left">
                <div>
                  <p className="text-xs sm:text-sm text-green-400 font-medium">What Happens</p>
                  <p className="text-xs sm:text-sm text-green-200">{mode.whatHappens}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-green-400 font-medium">Who Gets Paid</p>
                  <p className="text-xs sm:text-sm text-green-200">{mode.whoGetsPaid}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-6 bg-green-900/20 border border-green-500/30 rounded-xl"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
          <h2 className="text-lg sm:text-2xl font-bold text-white">MOD4 — The Engine of Endless Earnings</h2>
        </div>
        <p className="text-sm sm:text-base text-green-300 text-left pl-7 sm:pl-9">
          MOD4 is the secret force that keeps rewards flowing, even when others miss opportunities. It ensures continuous distribution from the global bonus pool to community members.
        </p>
      </motion.div>
    </div>
  );
};
```