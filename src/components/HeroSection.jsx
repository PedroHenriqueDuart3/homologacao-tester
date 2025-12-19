import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TypewriterText } from './AnimationComponents';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

export const HeroSection = ({ heroImage }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 20]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const scrollToContent = () => {
    const element = document.getElementById('dedicatoria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="hero-section"
    >
      <motion.div
        style={{ y, scale, rotate }}
        className="hero-background"
      >
        <div className="hero-gradient-overlay" />
        <div className="hero-radial-overlay" />
      </motion.div>

      <motion.div
        style={{
          opacity,
          filter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none'
        }}
        className="hero-content"
      >
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title-wrapper"
        >
          <h1 className="hero-title">
            <TypewriterText
              text="Para o amô da minha vida todinha"
              speed={60}
              delay={500}
            />
          </h1>
        </motion.div>

        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="hero-scroll-button"
        >
        
        </motion.button>
      </motion.div>

      <div className="hero-bottom-gradient" />
    </section>
  );
};
