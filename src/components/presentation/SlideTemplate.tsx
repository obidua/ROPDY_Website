import React from 'react';
import { motion } from 'framer-motion';

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  component: React.ComponentType;
}

interface SlideTemplateProps {
  slide: SlideData;
  currentSlide: number;
  totalSlides: number;
}

export const SlideTemplate: React.FC<SlideTemplateProps> = ({
  slide,
  currentSlide,
  totalSlides,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-10 blur-3xl"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto"
        >
          <slide.component />
        </motion.div>
      </div>

      {/* Slide Counter */}
      <motion.div
        className="absolute bottom-8 left-8 cyber-card p-3 z-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-sm text-green-400 font-mono">
          {currentSlide.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
        </div>
      </motion.div>
    </div>
  );
};