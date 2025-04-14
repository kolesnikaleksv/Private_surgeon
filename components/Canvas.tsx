'use client';

import React, { useEffect, useRef } from 'react';

const ColorFadeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // let hue = 220; // Soft blue start
    // let direction = 5;
    // let angle = 0;

    // const animate = () => {
    //   if (!canvas) return;

    //   hue += 0.1 * direction;
    //   if (hue > 220 || hue < 100) direction *= -1;

    //   angle += 0.01;

    //   const cx = canvas.width / 2 + Math.cos(angle) * canvas.width * 0.4;
    //   const cy = canvas.height / 2 + Math.sin(angle) * canvas.height * 0.4;
    //   const radius = Math.max(canvas.width, canvas.height) * 0.75;

    //   const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    //   gradient.addColorStop(0, `hsl(${hue}, 40%, 85%)`);
    //   gradient.addColorStop(1, `hsl(${hue + 10}, 30%, 95%)`);

    //   ctx.fillStyle = gradient;
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);

    //   requestAnimationFrame(animate);
    // };
    const hue = 180; // starting hue color

    let cx = canvas.width / 2;
    let cy = canvas.height / 2;

    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;

    const animate = () => {
      // Slowly drift the center point
      cx += dx;
      cy += dy;

      // Bounce off edges
      if (cx < 0 || cx > canvas.width) dx *= -1;
      if (cy < 0 || cy > canvas.height) dy *= -1;

      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        canvas.width
      );
      gradient.addColorStop(0, `hsl(${hue}, 25%, 90%)`);
      gradient.addColorStop(1, `hsl(${hue}, 25%, 100%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="flex h-full w-full z-[-1]" />;
};

export default ColorFadeCanvas;
