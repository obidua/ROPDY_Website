```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export const RopdyCircleAutoReactivationSlide: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
          ROPDY Circle: Auto Reactivation
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Experience truly passive income with self-sustaining earning cycles.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30 mb-8 sm:mb-12"
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">The Circle Flow (6 Payments)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">1</span>
              </div>
              <p className="text-sm sm:text-base text-green-200">Your active circle receives 6 payments (from directs or global CP2).</p>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">2</span>
              </div>
              <p className="text-sm sm:text-base text-green-200">Payments <strong className="text-white">#1–#4</strong> are credited instantly to your wallet.</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">3</span>
              </div>
              <p className="text-sm sm:text-base text-green-200">Payments <strong className="text-white">#5–#6</strong> are reserved by the contract for <strong className="text-white">auto re-activation</strong> of the same package.</p>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">4</span>
              </div>
              <p className="text-sm sm:text-base text-green-200">A new circle opens automatically — your earnings continue on loop.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
          <p className="text-xs sm:text-sm text-yellow-200">
            <AlertTriangle className="w-4 h-4 inline mr-2" />
            <em>Note:</em> For re-activation, the contract doesn't fetch live price; whatever RAMA is collected in the 5th & 6th payments is treated as equal to the package price for CP1/CP2 distribution.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30"
      >
        <RefreshCw className="w-10 h-10 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-2 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Infinite Earning Cycles</h3>
        <p className="text-base sm:text-lg text-emerald-200 max-w-3xl mx-auto">
          The auto-reactivation mechanism ensures that once you're in, your earning potential is continuous, creating a truly passive income stream.
        </p>
      </motion.div>
    </div>
  );
};
```