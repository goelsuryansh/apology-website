import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const textVariants = [
  "No",
  "Are you sure?",
  "Really?",
  "Think again...",
  "Please?",
  "Don't do this!",
  "Okay fine..."
];

export const RunAwayButton = ({ onCaught }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if mobile
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handleInteraction = (e) => {
    // Prevent if it's a mouseenter on mobile (phantom hover)
    if (e && e.type === 'mouseenter' && isMobile) {
      return;
    }

    const newAttempts = attemptCount + 1;
    setAttemptCount(newAttempts);

    // After 6 attempts, let them click it
    if (newAttempts >= 6) {
      onCaught();
      return;
    }

    // Change text
    setTextIndex((prev) => (prev + 1) % textVariants.length);

    // Calculate random position within safe bounds
    const maxX = 120;
    const maxY = 80;
    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;

    setPosition({ x: newX, y: newY });
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // If they've tried 6 times, let them click
    if (attemptCount >= 6) {
      onCaught();
    } else {
      // Otherwise, move the button
      handleInteraction(e);
    }
  };

  const handleMouseEnter = (e) => {
    // Only trigger on desktop hover
    if (!isMobile) {
      handleInteraction(e);
    }
  };

  return (
    <motion.button
      data-testid="no-button"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onTouchStart={(e) => e.preventDefault()}
      animate={position}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className="relative px-8 py-4 rounded-clay font-body font-semibold text-lg shadow-clay bg-white text-primary-foreground border-2 border-secondary hover:bg-secondary/10 active:bg-secondary/20 touch-none cursor-pointer"
    >
      {textVariants[textIndex]}
    </motion.button>
  );
};
