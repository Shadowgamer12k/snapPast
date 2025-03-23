
import React, { useEffect, useState } from 'react';

interface TrailDot {
  x: number;
  y: number;
  alpha: number;
  id: number;
}

const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const interval = setInterval(() => {
      setTrail(prevTrail => {
        // Add new dot at current mouse position
        const newDot = {
          x: mousePosition.x,
          y: mousePosition.y,
          alpha: 0.5,
          id: lastId
        };
        
        setLastId(prev => prev + 1);
        
        // Update existing dots (fade them out)
        const updatedTrail = prevTrail
          .map(dot => ({
            ...dot,
            alpha: dot.alpha - 0.02
          }))
          .filter(dot => dot.alpha > 0);
        
        return [...updatedTrail, newDot];
      });
    }, 50); // Add new dot every 50ms

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [mousePosition, lastId]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trail.map(dot => (
        <div
          key={dot.id}
          className="absolute w-3 h-3 rounded-full bg-primary"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.alpha,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.5s ease-out'
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
