import { motion } from 'framer-motion';

export const ClayButton = ({ children, onClick, variant = 'primary', className = '', disabled = false, testId = '' }) => {
  const baseStyles = "px-8 py-4 rounded-clay font-body font-semibold text-lg shadow-clay transition-colors duration-200";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 active:brightness-95",
    secondary: "bg-white text-primary-foreground border-2 border-secondary hover:bg-secondary/10 active:bg-secondary/20"
  };

  return (
    <motion.button
      data-testid={testId}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      whileHover={!disabled ? { scale: 1.05, rotate: 1 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
    </motion.button>
  );
};
