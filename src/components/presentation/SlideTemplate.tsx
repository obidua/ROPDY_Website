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
    <div className="h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black relative overflow-hidden"> {/* Removed padding, fixed height */}
      {/* Background Effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-10 blur-3xl"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-2 sm:px-4 lg:px-6 relative z-10 py-16 sm:py-20 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center"
        >
          <slide.component />
        </motion.div>
      </div>

      {/* Slide Counter */}
      <motion.div
        className="absolute bottom-16 sm:bottom-20 left-2 sm:left-4 bg-black/30 backdrop-blur-sm rounded-lg p-2 z-40"
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
}