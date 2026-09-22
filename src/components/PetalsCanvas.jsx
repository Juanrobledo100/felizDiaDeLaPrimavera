import React, { useEffect, useRef } from 'react';

export default function PetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Tipos de pétalos: Pétalos de flor amarilla, pétalos rosados, y pequeños brillos dorados
    const petalColors = [
      { fill: '#facc15', border: '#eab308' }, // Amarillo brillante
      { fill: '#fde047', border: '#ca8a04' }, // Amarillo suave
      { fill: '#fef08a', border: '#eab308' }, // Amarillo pastel
      { fill: '#fda4af', border: '#f43f5e' }, // Rosa primavera
      { fill: '#fecdd3', border: '#fb7185' }, // Rosa pastel
      { fill: '#fef9c3', border: '#f59e0b' }  // Dorado claro
    ];

    const count = window.innerWidth < 768 ? 32 : 55;
    const petals = [];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 9 + 6,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 1.5 - 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        oscillation: Math.random() * Math.PI * 2,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        aspectRatio: Math.random() * 0.4 + 0.5
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.oscillation += petal.oscillationSpeed;
        petal.rotation += petal.rotationSpeed;
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.oscillation) * 0.8;

        // Si se sale de la pantalla, reiniciar arriba
        if (petal.y > height + 20) {
          petal.y = -20;
          petal.x = Math.random() * width;
        }
        if (petal.x > width + 20) {
          petal.x = -20;
        } else if (petal.x < -20) {
          petal.x = width + 20;
        }

        // Leve influencia del cursor
        const dx = mouseX - petal.x;
        const dy = mouseY - petal.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          petal.x -= (dx / dist) * force * 1.8;
          petal.y -= (dy / dist) * force * 1.8;
        }

        // Dibujar pétalo elegante en forma de gota elíptica
        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);
        ctx.scale(1, petal.aspectRatio);

        ctx.beginPath();
        ctx.moveTo(0, -petal.size);
        ctx.bezierCurveTo(
          petal.size * 0.8, -petal.size * 0.5,
          petal.size * 0.8, petal.size * 0.8,
          0, petal.size
        );
        ctx.bezierCurveTo(
          -petal.size * 0.8, petal.size * 0.8,
          -petal.size * 0.8, -petal.size * 0.5,
          0, -petal.size
        );
        ctx.closePath();

        ctx.fillStyle = petal.color.fill;
        ctx.globalAlpha = 0.82;
        ctx.fill();

        ctx.strokeStyle = petal.color.border;
        ctx.lineWidth = 0.6;
        ctx.globalAlpha = 0.5;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="petals-canvas" aria-hidden="true" />;
}
