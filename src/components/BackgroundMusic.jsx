import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import './BackgroundMusic.css';

export const BackgroundMusic = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Toca a música automaticamente quando o componente é montado
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay bloqueado pelo navegador:', error);
          // Se o autoplay for bloqueado, tenta novamente após interação do usuário
          const handleInteraction = async () => {
            try {
              await audioRef.current.play();
              setIsPlaying(true);
              document.removeEventListener('click', handleInteraction);
            } catch (err) {
              console.log('Erro ao tocar música:', err);
            }
          };
          document.addEventListener('click', handleInteraction);
        }
      }
    };

    playAudio();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        {src && <source src={src} type="audio/mpeg" />}
      </audio>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={toggleMusic}
        className="music-control-button"
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
      >
        {isPlaying ? (
          <Volume2 className="music-control-icon" />
        ) : (
          <VolumeX className="music-control-icon" />
        )}
      </motion.button>
    </>
  );
};