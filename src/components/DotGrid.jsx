import React, { useRef, useEffect } from 'react';

const DotGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Track dots to interpolate their values over time for a trailing effect
    let dots = [];
    const spacing = 35; // Closer dots
    
    const initDots = () => {
      dots = [];
      const cols = Math.floor(canvas.width / spacing) + 1;
      const rows = Math.floor(canvas.height / spacing) + 1;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            factor: 0 // ranges from 0 (normal) to 1 (fully swelled)
          });
        }
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const maxDist = 160; // 20% smaller interaction radius (was 200)
      
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let targetFactor = 0;
        
        if (distance < maxDist) {
          const rawFactor = 1 - (distance / maxDist);
          // Ease out function for smoother swelling curve
          targetFactor = rawFactor * rawFactor * (3 - 2 * rawFactor);
        }
        
        // Lerp the factor for a smooth trailing effect
        // Decreased from 0.05 to 0.02 to make the animation much slower and more fluid
        dot.factor += (targetFactor - dot.factor) * 0.02; 
        
        // Calculate visuals based on the smoothly interpolated factor
        const radius = 1 + dot.factor * 2;
        const opacity = 0.03 + dot.factor * 0.17; // Capped at exactly 20% opacity (0.20 max)
        
        // Snowball color #e5dfd9 -> RGB(229, 223, 217)
        // Default color -> RGB(255, 255, 255)
        // Interpolate colors smoothly
        const r = Math.round(255 - dot.factor * (255 - 229));
        const g = Math.round(255 - dot.factor * (255 - 223));
        const b = Math.round(255 - dot.factor * (255 - 217));
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default DotGrid;
