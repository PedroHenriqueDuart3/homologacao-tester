import { useEffect, useState } from 'react';
import './FallingPetals.css';

export const FallingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const createPetal = () => {
      const petal = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 8,
        size: 8 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.4,
      };
      setPetals((prev) => [...prev.slice(-20), petal]);
    };

    const interval = setInterval(createPetal, 1500);

    for (let i = 0; i < 8; i++) {
      setTimeout(createPetal, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-petals-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
              fill="hsl(350 60% 85%)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};