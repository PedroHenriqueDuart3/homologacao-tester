import { DramaticReveal, ScaleInView } from './AnimationComponents';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useRef } from 'react';
import './ProposalSection.css';

export const ProposalSection = ({ onNavigateToContract }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section ref={ref} id="pedido" className="proposal-section">
      <div className="proposal-background">
        <motion.div
          className="proposal-blob-1"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="proposal-blob-2"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div style={{ scale, opacity }} className="proposal-container">
        <DramaticReveal>
          <h2 className="proposal-title">
            Agora a parte mais importante né kkkkkkkkk
          </h2>
        </DramaticReveal>

        <div className="proposal-content">
          <DramaticReveal delay={0.1}>
            <p className="proposal-text">
              Meu amor, você transformou minha vida de uma maneira que eu nunca imaginei ser possível.
              Cada dia ao seu lado é uma nova aventura, cada sorriso seu é um presente,
              e cada momento juntos é uma memória que quero guardar para sempre.
            </p>
          </DramaticReveal>

          <DramaticReveal delay={0.2}>
            <p className="proposal-text">
              Eu quero acordar todos os dias ao seu lado, compartilhar sonhos, construir
              memórias e enfrentar todos os desafios da vida com você. Quero ser seu porto
              seguro, seu melhor amigo, seu companheiro de todas as horas.
            </p>
          </DramaticReveal>

          <ScaleInView delay={0.3}>
            <motion.div
              className="proposal-card"
              whileInView={{
                boxShadow: [
                  '0 0 0 0 transparent',
                  '0 0 100px 20px hsl(var(--wine) / 0.2)',
                  '0 0 0 0 transparent'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="proposal-card-hearts">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      color: 'hsl(var(--wine) / 0.2)',
                      left: `${Math.random() * 100}%`,
                      top: '100%'
                    }}
                    animate={{
                      y: '-200%',
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 6 + Math.random() * 4,
                      repeat: Infinity,
                      delay: i * 0.8
                    }}
                  >
                    <Heart style={{ width: '2rem', height: '2rem', fill: 'currentColor' }} />
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ display: 'inline-block', marginBottom: '2rem' }}
              >
                <Heart className="proposal-heart-icon" />
              </motion.div>
              <h3 className="proposal-card-text">
                Acho que eu tô enrolando muito já né 🤣🤣 
                <br/>
                Você aceita namorar comigo minha princesa?
              </h3>
            </motion.div>
          </ScaleInView>

          <DramaticReveal delay={0.4} className="proposal-button-wrapper">
            <motion.button
              onClick={onNavigateToContract}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-romantic proposal-button"
            >
              <motion.span
                className="proposal-button-overlay"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="proposal-button-content">
                <Heart style={{ width: '1.5rem', height: '1.5rem' }} />
                Assinar Nosso Contrato de Namoro
                <Heart style={{ width: '1.5rem', height: '1.5rem' }} />
              </span>
            </motion.button>
          </DramaticReveal>
        </div>
      </motion.div>
    </section>
  );
};


