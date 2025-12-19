import { useRef } from 'react';
import CircularGallery from './CircularGallery';

export const GallerySection = ({ items }) => {
  const ref = useRef(null);

  return (
    <section ref={ref} id="galeria" style={{
      padding: '5rem 1rem',
      background: 'linear-gradient(180deg, #fef5f7 0%, #ffe8ed 50%, #fef5f7 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#8B4049',
          marginBottom: '3rem',
          fontFamily: 'serif',
          textShadow: '2px 2px 4px rgba(139, 64, 73, 0.1)'
        }}>
          Nossos Momentinhos
        </h2>

        <div style={{
          width: '100%',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <CircularGallery
            items={items}
            bend={3}
            textColor="#8B4049"
            borderRadius={0.05}
            scrollEase={0.02}
            font="bold 30px serif"
          />
        </div>
      </div>
    </section>
  );
};