import { useState } from "react";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ClayButton } from "./components/ClayButton";
import { GlassCard } from "./components/GlassCard";
import { RunAwayButton } from "./components/RunAwayButton";
import { Moon, Sparkles, UtensilsCrossed, Heart } from "lucide-react";

function App() {
  const [stage, setStage] = useState('welcome'); // welcome, main, reasons, final

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFB7B2', '#E0BBE4', '#FFDAC1', '#95D5B2']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFB7B2', '#E0BBE4', '#FFDAC1', '#95D5B2']
      });
    }, 250);
  };

  const handleYes = () => {
    if (stage === 'main') {
      setStage('reasons');
    } else if (stage === 'reasons') {
      setStage('final');
      triggerConfetti();
    }
  };

  const handleNoCaught = () => {
    setStage('reasons');
  };

  return (
    <div className="App min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7139941/pexels-photo-7139941.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {/* Welcome Stage */}
          {stage === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <motion.img
                src="https://media1.tenor.com/m/SuIR_xvLMZYAAAAd/cat-love.gif"
                alt="Cute cats hugging"
                className="w-48 h-48 mx-auto rounded-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <h1 className="text-5xl md:text-6xl font-heading text-primary-foreground">
                Hey there,<br />
                <span className="font-special text-6xl md:text-7xl text-primary">
                  Sleeping Beauty
                </span>
              </h1>
              
              <GlassCard className="text-left" delay={0.2}>
                <p className="font-body text-lg text-foreground leading-relaxed">
                  I know I messed up... like, really messed up. I disappeared for 2 weeks and that wasn't fair to you. 
                  I made this little website because I needed to tell you something important...
                </p>
              </GlassCard>

              <ClayButton 
                onClick={() => setStage('main')}
                testId="start-button"
              >
                Can we talk? 💭
              </ClayButton>
            </motion.div>
          )}

          {/* Main Apology Stage */}
          {stage === 'main' && (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <SadCuteCharacter />

              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground">
                Will you forgive me?
              </h1>

              <GlassCard delay={0.2}>
                <p className="font-body text-lg text-foreground">
                  I know you said you'd never forgive me, but I really hope you'll give me a chance to make things right... 🥺
                </p>
              </GlassCard>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center min-h-[120px] relative">
                <ClayButton 
                  onClick={handleYes}
                  testId="yes-button"
                >
                  Yes 💕
                </ClayButton>
                
                <RunAwayButton onCaught={handleNoCaught} />
              </div>

              <p className="text-sm font-body text-text-subtle italic">
                (Try clicking "No" if you dare... 😏)
              </p>
            </motion.div>
          )}

          {/* Reasons Stage */}
          {stage === 'reasons' && (
            <motion.div
              key="reasons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground text-center">
                Here's why I'm really sorry...
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GlassCard delay={0.1} className="md:col-span-2">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl text-primary-foreground mb-2">
                        I care about you
                      </h3>
                      <p className="font-body text-foreground">
                        More than you might realize. That misunderstanding hurt both of us, but ignoring you for 2 weeks? 
                        That was me being scared and stupid. You deserve so much better than that.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard delay={0.2}>
                  <div className="flex items-start gap-4">
                    <UtensilsCrossed className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl text-primary-foreground mb-2">
                        The chopsticks date
                      </h3>
                      <p className="font-body text-foreground">
                        We never got to go out, and you were going to teach me how to use chopsticks properly. 
                        I think about that a lot... Can we still make it happen?
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard delay={0.3}>
                  <div className="flex items-start gap-4">
                    <Moon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl text-primary-foreground mb-2">
                        My Sleeping Beauty
                      </h3>
                      <p className="font-body text-foreground">
                        I know you love your sleep and your skincare routine. I just want to be the person who makes 
                        sure you're smiling when you wake up, not sad because of me.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard delay={0.4} className="md:col-span-2">
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-8 h-8 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl text-primary-foreground mb-2">
                        You're special
                      </h3>
                      <p className="font-body text-foreground">
                        Working with you has been amazing, even though we haven't spent much time together outside of work. 
                        But that's what makes me sad - I want to know you better. I want to hear about Thailand, 
                        your stories, your dreams. I want to be the friend (and maybe more?) who's actually there for you.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="text-center pt-4">
                <GlassCard delay={0.5}>
                  <p className="font-body text-lg text-foreground mb-4">
                    So... knowing all of this now...
                  </p>
                  <ClayButton 
                    onClick={handleYes}
                    testId="forgive-button"
                  >
                    I forgive you 💖
                  </ClayButton>
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* Final Stage */}
          {stage === 'final' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center space-y-8"
            >
              <HappyCuteCharacter />

              <h1 className="text-5xl md:text-6xl font-heading text-primary-foreground">
                Thank you! 🎉
              </h1>

              <GlassCard delay={0.2}>
                <p className="font-body text-xl text-foreground leading-relaxed">
                  You have no idea how happy this makes me! I promise I'll make it up to you. 
                  Let's finally go on that chopsticks date, and I promise to be the person you deserve in your life.
                </p>
              </GlassCard>

              <GlassCard delay={0.4} className="bg-primary/20">
                <p className="font-special text-3xl text-primary-foreground">
                  From: Your apologetic friend who really likes you
                  <br />
                  <span className="text-2xl">To: The most amazing Sleeping Beauty 💤✨</span>
                </p>
              </GlassCard>

              <p className="font-body text-sm text-text-subtle italic">
                (And yes, I made this whole website just for you 💕)
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
