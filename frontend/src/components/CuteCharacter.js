import { motion } from 'framer-motion';

export const SadCuteCharacter = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="mx-auto"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Body */}
      <motion.circle
        cx="100"
        cy="110"
        r="60"
        fill="#FFB7B2"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Head */}
      <motion.circle
        cx="100"
        cy="60"
        r="45"
        fill="#FFDAC1"
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Ears */}
      <circle cx="70" cy="45" r="15" fill="#FFDAC1" />
      <circle cx="130" cy="45" r="15" fill="#FFDAC1" />
      <circle cx="70" cy="45" r="8" fill="#FFB7B2" />
      <circle cx="130" cy="45" r="8" fill="#FFB7B2" />
      
      {/* Eyes (sad) */}
      <motion.g
        animate={{
          scaleY: [1, 0.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        <ellipse cx="85" cy="55" rx="8" ry="12" fill="#4A3B52" />
        <ellipse cx="115" cy="55" rx="8" ry="12" fill="#4A3B52" />
      </motion.g>
      
      {/* Tears */}
      <motion.circle
        cx="85"
        cy="70"
        r="4"
        fill="#95D5B2"
        opacity="0.7"
        animate={{
          y: [0, 20],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeIn"
        }}
      />
      <motion.circle
        cx="115"
        cy="70"
        r="4"
        fill="#95D5B2"
        opacity="0.7"
        animate={{
          y: [0, 20],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeIn",
          delay: 0.3
        }}
      />
      
      {/* Sad mouth */}
      <path
        d="M 85 75 Q 100 70 115 75"
        stroke="#4A3B52"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Blush */}
      <circle cx="70" cy="65" r="8" fill="#FFB7B2" opacity="0.5" />
      <circle cx="130" cy="65" r="8" fill="#FFB7B2" opacity="0.5" />
      
      {/* Arms */}
      <motion.ellipse
        cx="50"
        cy="110"
        rx="12"
        ry="30"
        fill="#FFDAC1"
        transform="rotate(-20 50 110)"
      />
      <motion.ellipse
        cx="150"
        cy="110"
        rx="12"
        ry="30"
        fill="#FFDAC1"
        transform="rotate(20 150 110)"
      />
      
      {/* Legs */}
      <ellipse cx="85" cy="165" rx="15" ry="25" fill="#FFDAC1" />
      <ellipse cx="115" cy="165" rx="15" ry="25" fill="#FFDAC1" />
      
      {/* Heart held in hands */}
      <motion.path
        d="M 100 95 L 95 100 Q 90 105 95 110 L 100 115 L 105 110 Q 110 105 105 100 Z"
        fill="#FF9AA2"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: '100px 105px' }}
      />
    </motion.svg>
  );
};

export const HappyCuteCharacter = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="mx-auto"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }}
    >
      {/* Body */}
      <circle cx="100" cy="110" r="60" fill="#E0BBE4" />
      
      {/* Head */}
      <circle cx="100" cy="60" r="45" fill="#FFDAC1" />
      
      {/* Ears */}
      <circle cx="70" cy="45" r="15" fill="#FFDAC1" />
      <circle cx="130" cy="45" r="15" fill="#FFDAC1" />
      <circle cx="70" cy="45" r="8" fill="#E0BBE4" />
      <circle cx="130" cy="45" r="8" fill="#E0BBE4" />
      
      {/* Eyes (happy) */}
      <path
        d="M 80 52 Q 85 58 90 52"
        stroke="#4A3B52"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 110 52 Q 115 58 120 52"
        stroke="#4A3B52"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Happy mouth */}
      <path
        d="M 85 70 Q 100 80 115 70"
        stroke="#4A3B52"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Blush */}
      <circle cx="70" cy="65" r="8" fill="#FFB7B2" opacity="0.5" />
      <circle cx="130" cy="65" r="8" fill="#FFB7B2" opacity="0.5" />
      
      {/* Arms raised */}
      <motion.ellipse
        cx="50"
        cy="90"
        rx="12"
        ry="30"
        fill="#FFDAC1"
        transform="rotate(-45 50 90)"
        animate={{
          rotate: [-45, -30, -45],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        style={{ transformOrigin: '50px 90px' }}
      />
      <motion.ellipse
        cx="150"
        cy="90"
        rx="12"
        ry="30"
        fill="#FFDAC1"
        transform="rotate(45 150 90)"
        animate={{
          rotate: [45, 30, 45],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        style={{ transformOrigin: '150px 90px' }}
      />
      
      {/* Legs */}
      <ellipse cx="85" cy="165" rx="15" ry="25" fill="#FFDAC1" />
      <ellipse cx="115" cy="165" rx="15" ry="25" fill="#FFDAC1" />
      
      {/* Sparkles */}
      <motion.circle
        cx="60"
        cy="40"
        r="3"
        fill="#95D5B2"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.circle
        cx="140"
        cy="40"
        r="3"
        fill="#95D5B2"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5
        }}
      />
    </motion.svg>
  );
};