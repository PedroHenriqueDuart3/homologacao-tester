import { useState } from 'react';
import { ScrollProgress } from '@/components/AnimationComponents';
import { FallingPetals } from '@/components/FallingPetals';
import { HeroSection } from '@/components/HeroSection';
import { DedicationSection } from '@/components/DedicationSection';
import { CounterSection } from '@/components/CounterSection';
import { GallerySection } from '@/components/GallerySection';
import { ProposalSection } from '@/components/ProposalSection';
import { Footer } from '@/components/Footer';
import { ContractPage } from '@/components/ContractPage';
import { BackgroundMusic } from '@/components/BackgroundMusic';
import './Index.css';

// Import das imagens
import foto1 from '@/assets/images/foto1.jpeg'
import foto2 from '@/assets/images/foto2.jpeg'
import foto3 from '@/assets/images/foto3.jpeg'
import foto4 from '@/assets/images/foto4.jpeg'
import foto5 from '@/assets/images/foto5.jpeg'
import foto6 from '@/assets/images/foto6.jpeg'
import foto7 from '@/assets/images/foto7.jpeg'
import foto8 from '@/assets/images/foto8.jpeg'
import foto9 from '@/assets/images/foto9.jpg'
import foto10 from '@/assets/images/foto10.jpeg'
import foto11 from '@/assets/images/foto11.jpeg'
import foto12 from '@/assets/images/foto12.jpeg'
import foto13 from '@/assets/images/foto13.jpeg'
import foto14 from '@/assets/images/foto14.jpeg'
import foto15 from '@/assets/images/foto15.jpeg'
import foto16 from '@/assets/images/foto16.jpeg'
import foto17 from '@/assets/images/foto17.jpeg'
import foto18 from '@/assets/images/foto18.jpeg'
import foto19 from '@/assets/images/foto19.jpeg'
import foto20 from '@/assets/images/foto20.jpeg'
import foto21 from '@/assets/images/foto21.jpeg'
import foto22 from '@/assets/images/foto22.jpeg'

// Import dos videos
import video1 from '@/assets/video/video1.mp4'
import video2 from '@/assets/video/video2.mp4'

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const galleryItems = [
    { src: foto1, caption: ' ', type: 'image' },
    { src: foto2, caption: ' ', type: 'image' },
    { src: foto3, caption: ' ', type: 'image' },
    { src: foto4, caption: ' ', type: 'image' },
    { src: foto5, caption: ' ', type: 'image' },
    { src: foto6, caption: ' ', type: 'image' },
    { src: foto7, caption: ' ', type: 'image' },
    { src: foto8, caption: ' ', type: 'image' },
    { src: foto10, caption: ' ', type: 'image' },
    { src: foto11, caption: ' ', type: 'image' },
    { src: foto12, caption: ' ', type: 'image' },
    { src: foto13, caption: ' ', type: 'image' },
    { src: foto14, caption: ' ', type: 'image' },
    { src: foto15, caption: ' ', type: 'image' },
    { src: foto16, caption: ' ', type: 'image' },
    { src: foto17, caption: ' ', type: 'image' },
    { src: foto18, caption: ' ', type: 'image' },
    { src: foto19, caption: ' ', type: 'image' },
    { src: foto20, caption: ' ', type: 'image' },
    { src: foto21, caption: ' ', type: 'image' },
    { src: foto22, caption: ' ', type: 'image' },

    

    // videos
    { src: video1, caption: ' ', type: 'video'},
    { src: video2, caption: ' ', type: 'video'},
  ];

  const navigateToContract = () => {
    setCurrentPage('contract');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <BackgroundMusic src="/audio/kiss.mp3" />

      {/* Player Spotify estético fixo no canto inferior esquerdo */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 9999,
        width: '271px',
        height: '80px',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#121212',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        pointerEvents: 'none'
      }}>
        {/* Capa do álbum */}
        <img 
          src={foto9} 
          alt="Kiss Album"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '4px',
            objectFit: 'cover'
          }}
        />
        
        {/* Info da música */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#ffffff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginBottom: '4px'
          }}>
            I Was Made For Lovin' You
          </div>
          <div style={{
            fontSize: '12px',
            color: '#b3b3b3',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Kiss
          </div>
        </div>
        
        {/* Logo Spotify */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto'
        }}>
        </div>
      </div>

      {/* Conteúdo da página */}
      {currentPage === 'contract' ? (
        <ContractPage onNavigateToHome={navigateToHome} />
      ) : (
        <main className="index-page">
          <ScrollProgress />
          <FallingPetals />

          <HeroSection />
          <DedicationSection />
          <CounterSection />
          <GallerySection items={galleryItems} />
          <ProposalSection onNavigateToContract={navigateToContract} />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;