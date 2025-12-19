import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="footer-heart-icon" />
          </motion.div>

          <p className="footer-text">
            Feito com muito amor para você meu neném ❤️
          </p>

          <p className="footer-date">
            05/09/2025 - Para Sempre
          </p>
        </div>
      </div>
    </footer>
  );
};