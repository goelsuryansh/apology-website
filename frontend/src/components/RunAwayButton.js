import { useState } from 'react';
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

  const handleInteraction = () => {
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
    // Container is roughly centered, so we keep movements moderate
    const maxX = 150;
    const maxY = 100;
    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;

    setPosition({ x: newX, y: newY });
  };

  const handleClick = (e) => {
    // If they've tried 6 times, let them click
    if (attemptCount >= 6) {
      onCaught();
    } else {
      // Otherwise, move the button (works on mobile)
      e.preventDefault();
      handleInteraction();
    }
  };

  return (
    <motion.button
      data-testid="no-button"
      onMouseEnter={handleInteraction}  // Works on desktop hover
      onClick={handleClick}  // Works on mobile tap
      animate={position}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className="relative px-8 py-4 rounded-clay font-body font-semibold text-lg shadow-clay bg-white text-primary-foreground border-2 border-secondary hover:bg-secondary/10 cursor-pointer"
    >
      {textVariants[textIndex]}
    </motion.button>
  );
};
