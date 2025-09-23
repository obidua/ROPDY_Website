```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, DollarSign, RefreshCw } from 'lucide-react';

export const RopdyMintDelegationSlide: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
          ROPDY Mint: Delegation-Backed
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Yield sourced from Ramestta node delegation, ensuring sustainable rewards.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-indigo-900/30 to-teal-900/30 mb-8 sm:mb-12"
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">How Rewards Are Generated</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
          <div>
            <p className="text-sm sm:text-base text-indigo-200 mb-4 sm:mb-6">
              ROPDY Mint delegates RAMA to Ramestta validators, targeting a monthly gross yield of approximately 5%–8.4%. These rewards are collected daily and then redistributed to users.
            </p>
            <p className="text-sm sm:text-base text-indigo-200 mb-4 sm:mb-6">
              The protocol continuously compounds by redelegating daily, ensuring the sustainability and growth of the reward pool.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-white font-semibold mb-1">Validator Delegation</h3>
                <p className="text-xs sm:text-sm text-indigo-200">RAMA is delegated to secure the Ramestta network.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-white font-semibold mb-1">Daily Compounding</h3>
                <p className="text-xs sm:text-sm text-teal-200">Yields are harvested and redelegated daily for growth.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30"
      >
        <DollarSign className="w-10 h-10 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-2 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">USD-Pegged Payouts</h3>
        <p className="text-base sm:text-lg text-purple-200 max-w-3xl mx-auto">
          Your daily ROI is computed as a USD value and released in RAMA at the current rate, minus a 5% system fee. This offers stability while allowing for potential RAMA upside.
        </p>
      </motion.div>
    </div>
  );
};
```