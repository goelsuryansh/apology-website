import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay
      }}
      className={`bg-white/70 backdrop-blur-md rounded-card border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};
