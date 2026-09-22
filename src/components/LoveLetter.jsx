import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MailOpen, Heart, Sparkles } from 'lucide-react';
import { loveConfig } from '../config';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = (e) => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 50,
        spread: 80,
        origin: { x, y },
        colors: ['#fda4af', '#f43f5e', '#fbbf24', '#fef08a'],
        ticks: 160
      });
    }
  };

  return (
    <section className="section-wrapper letter-section">
      <div className="section-header">
        <span className="section-tag">
          <Mail size={16} color="#d97706" /> Carta del Día de la Primavera
        </span>
        <h2 className="section-title">Palabras que Salen de mi Corazón</h2>
        <p className="section-subtitle">
          Toca el sobre sellado para abrir la carta especial que te escribí para este día.
        </p>
      </div>

      <div className="letter-outer-box">
        {/* El Sobre Interactivo */}
        <div className={`envelope-wrapper ${isOpen ? 'envelope-open' : ''}`} onClick={toggleLetter}>
          <div className="envelope-back"></div>
          
          {/* Solapa Superior con Sello */}
          <div className="envelope-flap"></div>
          <div className="wax-seal">
            <Heart size={22} fill="#ffffff" color="#ffffff" className="seal-heart" />
            <span className="seal-text">{isOpen ? "Abierta" : "Tócame"}</span>
          </div>

          <div className="envelope-front"></div>

          {/* Sello de invitación cuando está cerrado */}
          {!isOpen && (
            <div className="open-hint">
              <Sparkles size={16} /> ¡Presiona para abrir mi carta!
            </div>
          )}
        </div>

        {/* Hoja de Papel Desplegada */}
        <div className={`letter-paper glass-card ${isOpen ? 'paper-visible' : 'paper-hidden'}`}>
          <div className="paper-watermark">🌸</div>
          
          <div className="paper-header">
            <span className="letter-date">{loveConfig.letter.date}</span>
            <h3 className="letter-heading">{loveConfig.letter.title}</h3>
          </div>

          <div className="paper-body">
            {loveConfig.letter.content.map((paragraph, index) => (
              <p key={index} className="letter-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="paper-footer">
            <p className="signature-salute">{loveConfig.letter.signature}</p>
            <p className="signature-name">{loveConfig.letter.author}</p>
          </div>

          <div className="close-letter-action">
            <button className="close-letter-btn" onClick={() => setIsOpen(false)}>
              <MailOpen size={16} /> Guardar la carta de nuevo
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .letter-outer-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          min-height: 380px;
        }

        /* Estructura del Sobre */
        .envelope-wrapper {
          position: relative;
          width: 320px;
          height: 220px;
          cursor: pointer;
          transition: transform 0.4s ease, filter 0.3s;
          margin-bottom: 20px;
          filter: drop-shadow(0 15px 25px rgba(217, 119, 6, 0.2));
        }
        .envelope-wrapper:hover {
          transform: translateY(-6px) scale(1.02);
        }

        .envelope-back {
          position: absolute;
          inset: 0;
          background: #fbcfe8;
          border-radius: 16px;
          border: 2px solid #f472b6;
        }

        .envelope-front {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%);
          clip-path: polygon(0 40%, 50% 75%, 100% 40%, 100% 100%, 0 100%);
          border-radius: 0 0 16px 16px;
          border-bottom: 2px solid #f472b6;
          z-index: 3;
        }

        .envelope-flap {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(180deg, #f472b6 0%, #fb7185 100%);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
          transform-origin: top;
          transition: transform 0.6s ease, z-index 0.6s;
          z-index: 4;
        }

        .envelope-open .envelope-flap {
          transform: rotateX(180deg);
          z-index: 1;
        }

        .wax-seal {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 58px;
          height: 58px;
          background: radial-gradient(circle, #f43f5e 0%, #be123c 100%);
          border-radius: 50%;
          box-shadow: 0 4px 14px rgba(190, 18, 60, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: transform 0.4s ease, opacity 0.4s;
          border: 2px solid #fecdd3;
        }

        .envelope-open .wax-seal {
          transform: translate(-50%, -120%) scale(0.85);
          opacity: 0.8;
        }

        .seal-heart {
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
        }

        .seal-text {
          font-size: 0.62rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .open-hint {
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.95rem;
          color: #be123c;
          font-weight: 600;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
          animation: floatGentle 2s infinite ease-in-out;
        }

        /* Papel de la Carta */
        .letter-paper {
          position: relative;
          width: 100%;
          max-width: 780px;
          background: #fffdfa;
          border: 1px solid #fed7aa;
          box-shadow: 0 20px 45px rgba(217, 119, 6, 0.15);
          padding: 48px 40px;
          border-radius: 20px;
          text-align: left;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .paper-hidden {
          display: none;
          opacity: 0;
          transform: translateY(-20px) scale(0.95);
        }

        .paper-visible {
          display: block;
          opacity: 1;
          transform: translateY(0) scale(1);
          animation: unfoldPaper 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes unfoldPaper {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .paper-watermark {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 5rem;
          opacity: 0.12;
          pointer-events: none;
          user-select: none;
        }

        .paper-header {
          border-bottom: 2px dashed #fed7aa;
          padding-bottom: 16px;
          margin-bottom: 24px;
        }

        .letter-date {
          display: block;
          font-size: 0.95rem;
          color: #ea580c;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        .letter-heading {
          font-family: var(--font-script);
          font-size: 2.6rem;
          color: #9a3412;
          line-height: 1.2;
        }

        .paper-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .letter-paragraph {
          font-size: 1.15rem;
          color: #431407;
          line-height: 1.8;
          font-family: var(--font-serif);
        }

        .paper-footer {
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid #ffedd5;
          text-align: right;
        }

        .signature-salute {
          font-size: 1.1rem;
          color: #9a3412;
          font-style: italic;
          font-family: var(--font-serif);
        }

        .signature-name {
          font-family: var(--font-script);
          font-size: 2.2rem;
          color: #c2410c;
          margin-top: 4px;
        }

        .close-letter-action {
          margin-top: 30px;
          text-align: center;
        }

        .close-letter-btn {
          background: rgba(254, 215, 170, 0.5);
          border: 1px solid #f97316;
          color: #c2410c;
          padding: 8px 24px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .close-letter-btn:hover {
          background: #f97316;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
