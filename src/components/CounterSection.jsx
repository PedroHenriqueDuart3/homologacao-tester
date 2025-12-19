import { useState, useEffect, useRef } from 'react';
import { DramaticReveal, StaggerContainer, StaggerItem } from './AnimationComponents';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CounterSection.css';

export const CounterSection = ({ decorImage }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2025-09-05T00:00:00');
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff < 0) {
        setTimeElapsed({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const counterItems = [
    { value: timeElapsed.days, label: 'Dias' },
    { value: timeElapsed.hours, label: 'Horas' },
    { value: timeElapsed.minutes, label: 'Minutos' },
    { value: timeElapsed.seconds, label: 'Segundos' },
  ];

  return (
    <section ref={ref} id="nossa-historia" className="counter-section">
      <div className="counter-background">
        <motion.div
          className="counter-blob-1"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="counter-blob-2"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.div style={{ scale }} className="counter-container">
        <DramaticReveal>
          <h2 className="counter-title">
            Nosso Tempinho Juntos
          </h2>
        </DramaticReveal>

        <DramaticReveal delay={0.1}>
          <p className="counter-subtitle">
            Desde o primeiro dia em que nos conhecemos --- 05/09/2025
          </p>
        </DramaticReveal>

        {decorImage && (
          <DramaticReveal delay={0.2} className="counter-decor-wrapper">
            <motion.img
              src={decorImage}
              alt="Decoração"
              className="counter-decor-image"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </DramaticReveal>
        )}

        <StaggerContainer className="counter-grid" staggerDelay={0.15}>
          {counterItems.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                className="counter-box"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  key={item.value}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="counter-value"
                >
                  {item.value}
                </motion.div>
                <div className="counter-label">
                  {item.label}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>
    </section>
  );
};
