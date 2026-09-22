import React from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Flower2, Mail, Camera, ChevronDown } from 'lucide-react';
import PetalsCanvas from './components/PetalsCanvas';
import FlowersBouquet from './components/FlowersBouquet';
import LoveLetter from './components/LoveLetter';
import PhotoGallery from './components/PhotoGallery';
import LoveCounter from './components/LoveCounter';
import ReasonsDeck from './components/ReasonsDeck';
import MusicPlayer from './components/MusicPlayer';
import { loveConfig } from './config';

export default function App() {
  const triggerGrandCelebration = () => {
    // Explosión de confeti en abanico
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#fbbf24', '#facc15', '#fb7185', '#f43f5e', '#fef08a', '#ffffff']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="spring-page">
      {/* Lienzo de Pétalos y Brisas de Primavera */}
      <PetalsCanvas />

      {/* Reproductor de Música Romántica */}
      <MusicPlayer />

      <main className="app-wrapper">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>21 de Septiembre · Especial Día de la Primavera</span>
            <Sparkles size={16} className="badge-icon" />
          </div>

          <h1 className="hero-title">
            <span className="hero-title-greeting">{loveConfig.hero.greeting}</span>
            <span className="hero-title-name">{loveConfig.recipientName}</span>
          </h1>

          <p className="hero-dedication">
            "{loveConfig.hero.flowerMessage}"
          </p>

          <div className="hero-cta-buttons">
            <button 
              className="cta-btn primary"
              onClick={() => scrollToSection('ramo-section')}
            >
              <Flower2 size={18} /> Ver tus Flores Amarillas
            </button>
            <button 
              className="cta-btn secondary"
              onClick={() => scrollToSection('carta-section')}
            >
              <Mail size={18} /> Leer mi Carta
            </button>
            <button 
              className="cta-btn accent"
              onClick={triggerGrandCelebration}
              title="Haz clic para una sorpresa"
            >
              <Heart size={18} fill="#f43f5e" /> ¡Te Amo!
            </button>
          </div>

          <div className="hero-scroll-indicator" onClick={() => scrollToSection('ramo-section')}>
            <span>Desliza para ver todo nuestro amor</span>
            <ChevronDown size={20} className="bounce-arrow" />
          </div>
        </section>

        {/* RAMO DE FLORES AMARILLAS */}
        <div id="ramo-section">
          <FlowersBouquet />
        </div>

        {/* CARTA DE AMOR EN SOBRE */}
        <div id="carta-section">
          <LoveLetter />
        </div>

        {/* GALERÍA POLAROID DE RECUERDOS */}
        <div id="recuerdos-section">
          <PhotoGallery />
        </div>

        {/* CONTADOR DE NUESTRO AMOR */}
        <div id="contador-section">
          <LoveCounter />
        </div>

        {/* RAZONES POR LAS QUE TE AMO */}
        <div id="razones-section">
          <ReasonsDeck />
        </div>

        {/* CIERRE Y DEDICATORIA FINAL */}
        <section className="final-wishes-section glass-card">
          <div className="floating-flower-art">🌻</div>
          <h2 className="final-title">Siempre Serás Mi Primavera Favorita</h2>
          <p className="final-message">
            {loveConfig.finalWishes}
          </p>

          <div className="final-action">
            <button className="final-love-btn" onClick={triggerGrandCelebration}>
              <Heart size={22} fill="#ffffff" />
              <span>Presiona para llenarte de besos y flores</span>
              <Sparkles size={20} />
            </button>
          </div>

          <p className="footer-signature">
            Creado con todo mi amor · Feliz Día de la Primavera 💛
          </p>
        </section>
      </main>

      <style>{`
        .spring-page {
          position: relative;
          min-height: 100vh;
        }

        /* HERO STYLES */
        .hero-section {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 20px 40px 20px;
          position: relative;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(254, 240, 138, 0.7);
          border: 1px solid rgba(251, 191, 36, 0.5);
          padding: 8px 22px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #92400e;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.15);
          margin-bottom: 24px;
          backdrop-filter: blur(8px);
          animation: floatGentle 3s ease-in-out infinite;
        }

        .badge-icon {
          color: #f59e0b;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
        }

        .hero-title-greeting {
          font-family: var(--font-script);
          font-size: clamp(3.2rem, 8vw, 5.5rem);
          color: #b45309;
          text-shadow: 0 4px 18px rgba(245, 158, 11, 0.3);
          line-height: 1.1;
        }

        .hero-title-name {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 5vw, 3.8rem);
          color: #881337;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .hero-dedication {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.15rem, 2.5vw, 1.45rem);
          color: #78350f;
          max-width: 680px;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .hero-cta-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 50px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: none;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #78350f;
          box-shadow: 0 8px 22px rgba(245, 158, 11, 0.35);
        }

        .cta-btn.primary:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 14px 30px rgba(245, 158, 11, 0.45);
        }

        .cta-btn.secondary {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: #be123c;
          border: 1.5px solid #fbcfe8;
          box-shadow: 0 6px 18px rgba(244, 63, 94, 0.15);
        }

        .cta-btn.secondary:hover {
          transform: translateY(-4px) scale(1.04);
          background: #ffffff;
          border-color: #f43f5e;
        }

        .cta-btn.accent {
          background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%);
          color: #e11d48;
          border: 1.5px solid #fda4af;
          box-shadow: 0 6px 18px rgba(225, 29, 72, 0.15);
        }

        .cta-btn.accent:hover {
          transform: translateY(-4px) scale(1.04);
          background: #fff;
        }

        .hero-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          color: #b45309;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.85;
          transition: opacity 0.2s;
        }

        .hero-scroll-indicator:hover {
          opacity: 1;
        }

        .bounce-arrow {
          animation: bounceDown 1.8s infinite;
        }

        @keyframes bounceDown {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(8px);
          }
          60% {
            transform: translateY(4px);
          }
        }

        /* FINAL WISHES SECTION */
        .final-wishes-section {
          margin-top: 100px;
          padding: 60px 30px;
          text-align: center;
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(254, 240, 138, 0.4));
        }

        .floating-flower-art {
          font-size: 4rem;
          margin-bottom: 12px;
          animation: floatGentle 3s ease-in-out infinite;
        }

        .final-title {
          font-family: var(--font-script);
          font-size: clamp(2.8rem, 6vw, 4.2rem);
          color: #b45309;
          margin-bottom: 16px;
        }

        .final-message {
          font-size: 1.25rem;
          color: #57534e;
          max-width: 650px;
          margin: 0 auto 36px auto;
          line-height: 1.6;
        }

        .final-love-btn {
          background: linear-gradient(135deg, #f43f5e 0%, #fb7185 50%, #f59e0b 100%);
          color: #ffffff;
          border: none;
          padding: 18px 36px;
          border-radius: 999px;
          font-size: 1.15rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 12px 30px rgba(244, 63, 94, 0.35);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .final-love-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 18px 40px rgba(244, 63, 94, 0.5);
        }

        .footer-signature {
          margin-top: 40px;
          font-size: 0.92rem;
          color: #a8a29e;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
