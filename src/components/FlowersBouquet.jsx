import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Flower2, Smile } from 'lucide-react';
import { loveConfig } from '../config';

export default function FlowersBouquet() {
  const [activeNote, setActiveNote] = useState(null);
  const [bloomedCount, setBloomedCount] = useState(0);

  const flowers = [
    { id: 1, name: "Girasol de Ilusión", color: "#fbbf24", delay: "0s" },
    { id: 2, name: "Margarita de Ternura", color: "#facc15", delay: "0.2s" },
    { id: 3, name: "Rosa Amarilla de Alegría", color: "#f59e0b", delay: "0.4s" },
    { id: 4, name: "Flor de Amor Eterno", color: "#fde047", delay: "0.1s" },
    { id: 5, name: "Tulipán Dorado de Pasión", color: "#eab308", delay: "0.3s" },
    { id: 6, name: "Flor de la Dulzura", color: "#fef08a", delay: "0.5s" },
    { id: 7, name: "Destello de Primavera", color: "#fbbf24", delay: "0.25s" },
  ];

  const handleFlowerClick = (index, e) => {
    setActiveNote(loveConfig.bouquetNotes[index % loveConfig.bouquetNotes.length]);
    setBloomedCount(prev => prev + 1);

    // Pequeño estallido de confeti con colores de primavera
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#fbbf24', '#facc15', '#fda4af', '#f43f5e', '#ffffff'],
      ticks: 120,
      gravity: 0.8,
      scalar: 0.9,
    });
  };

  const handleBouquetExplosion = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 100,
      origin: { x, y },
      colors: ['#fbbf24', '#facc15', '#fb7185', '#f43f5e', '#fef08a'],
      ticks: 200,
      shapes: ['circle'],
      scalar: 1.2
    });
  };

  return (
    <section className="section-wrapper flowers-section">
      <div className="section-header">
        <span className="section-tag">
          <Flower2 size={16} color="#d97706" /> Flores Amarillas para Ti
        </span>
        <h2 className="section-title">Un Ramo que Nunca se Marchita</h2>
        <p className="section-subtitle">
          Toca cada flor del ramo para descubrir un mensaje especial que guardé para ti en esta primavera.
        </p>
      </div>

      <div className="bouquet-container glass-card">
        {/* Foto central del ramo con halo brillante */}
        <div className="bouquet-hero-wrap" onClick={handleBouquetExplosion}>
          <div className="glowing-halo"></div>
          <img 
            src={loveConfig.hero.ramoImage} 
            alt="Ramo de Flores Amarillas" 
            className="bouquet-img"
          />
          <div className="bouquet-badge">
            <Sparkles size={18} className="sparkle-icon" />
            <span>¡Toca el ramo para llenar la pantalla de amor!</span>
          </div>
        </div>

        {/* Flores Interactivas con Mensajes */}
        <div className="interactive-flowers-grid">
          {flowers.map((fl, idx) => (
            <button
              key={fl.id}
              className="flower-button"
              onClick={(e) => handleFlowerClick(idx, e)}
              style={{ animationDelay: fl.delay }}
              title="Haz clic para ver un mensaje"
            >
              <div className="flower-icon-bubble" style={{ background: `radial-gradient(circle, ${fl.color}, #d97706)` }}>
                <span className="flower-emoji">🌼</span>
              </div>
              <span className="flower-label">{fl.name}</span>
            </button>
          ))}
        </div>

        {/* Modal de Mensaje Revelado */}
        {activeNote && (
          <div className="note-reveal-box">
            <div className="note-icon-wrap">
              <Heart size={24} className="beating-heart" fill="#f43f5e" color="#f43f5e" />
            </div>
            <div className="note-text">
              <p className="note-quote">"{activeNote}"</p>
              <span className="note-author">— De mí para ti con todo mi amor 💛</span>
            </div>
            <button className="note-close-btn" onClick={() => setActiveNote(null)}>
              Cerrar ✨
            </button>
          </div>
        )}
      </div>

      <style>{`
        .flowers-section {
          position: relative;
        }
        .bouquet-container {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          position: relative;
          overflow: hidden;
        }
        .bouquet-hero-wrap {
          position: relative;
          cursor: pointer;
          border-radius: 24px;
          overflow: hidden;
          max-width: 440px;
          box-shadow: 0 16px 36px rgba(217, 119, 6, 0.25);
          transition: transform 0.4s ease;
        }
        .bouquet-hero-wrap:hover {
          transform: scale(1.03) rotate(-1deg);
        }
        .bouquet-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 24px;
        }
        .glowing-halo {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, rgba(244, 63, 94, 0) 70%);
          pointer-events: none;
          animation: pulseGlow 4s infinite ease-in-out;
        }
        .bouquet-badge {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          padding: 8px 18px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #92400e;
          white-space: nowrap;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }
        .sparkle-icon {
          color: #f59e0b;
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .interactive-flowers-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          width: 100%;
          max-width: 850px;
        }
        .flower-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(251, 191, 36, 0.5);
          padding: 14px 18px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          min-width: 130px;
        }
        .flower-button:hover {
          transform: translateY(-6px) scale(1.05);
          background: #fff;
          border-color: #f59e0b;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.25);
        }
        .flower-icon-bubble {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 14px rgba(217, 119, 6, 0.2);
          transition: transform 0.3s ease;
        }
        .flower-button:hover .flower-icon-bubble {
          transform: rotate(15deg) scale(1.1);
        }
        .flower-emoji {
          font-size: 1.6rem;
        }
        .flower-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #78350f;
        }

        .note-reveal-box {
          width: 100%;
          max-width: 650px;
          background: linear-gradient(135deg, #fffbeb 0%, #fff1f2 100%);
          border: 2px solid #fde68a;
          border-radius: 22px;
          padding: 24px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          box-shadow: 0 14px 30px rgba(245, 158, 11, 0.2);
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
        }
        .beating-heart {
          animation: beat 1.2s infinite;
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }
        .note-quote {
          font-size: 1.25rem;
          font-family: var(--font-serif);
          font-style: italic;
          color: #881337;
          line-height: 1.5;
        }
        .note-author {
          display: block;
          margin-top: 6px;
          font-size: 0.95rem;
          color: #b45309;
          font-weight: 500;
        }
        .note-close-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 8px 22px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s;
        }
        .note-close-btn:hover {
          background: #d97706;
        }
      `}</style>
    </section>
  );
}
