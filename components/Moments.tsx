
import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { MomentCard } from '../types';

interface MomentsProps {
  onNext: () => void;
}

const Moments: React.FC<MomentsProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen px-4 py-16 flex flex-col items-center">
      <div className="text-center mb-20">
        <span className="text-primary font-hand text-2xl block mb-2">{CONTENT.cards.subheading}</span>
        <h2 className="text-4xl md:text-6xl font-display text-primary">{CONTENT.cards.heading}</h2>
        <p className="mt-4 text-gray-500 font-medium italic">{CONTENT.cards.instruction}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 max-w-6xl w-full mb-16">
        {CONTENT.cards.items.map((card: MomentCard, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, rotate: card.rotation }}
            animate={{ opacity: 1, scale: 1, rotate: card.rotation }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, y: -20 }}
            className={`bg-white p-4 pb-12 shadow-2xl rounded-sm border border-gray-100 ${card.position} w-64 md:w-72`}
            style={{ 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          >
            <div className="relative aspect-[4/5] bg-gray-200 mb-6 overflow-hidden">
              <img src={card.image} alt="moment" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-lg">✨</span>
              </div>
            </div>
            <div className="text-center">
              <p className="font-hand text-2xl text-gray-800 mb-2">{card.caption}</p>
              <span className="text-4xl">{card.emoji}</span>
            </div>
            
            {/* Tape decorations */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-retro-pink/40 -rotate-2 opacity-50 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={onNext}
        className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-retro flex items-center gap-2 text-xl"
      >
        {CONTENT.cards.continueButton}
        <span className="material-icons-round">arrow_forward</span>
      </motion.button>
    </div>
  );
};

export default Moments;
