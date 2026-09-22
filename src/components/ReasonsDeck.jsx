import React from 'react';
import { Sparkles } from 'lucide-react';
import { loveConfig } from '../config';

export default function ReasonsDeck() {
  return (
    <section className="section-wrapper reasons-section">
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={16} color="#d97706" /> Infinitas Razones
        </span>
        <h2 className="section-title">Por Qué Iluminas Mi Vida</h2>
        <p className="section-subtitle">
          Hay miles de motivos por los que me enamoro de ti todos los días, y aquí tienes algunos de mis preferidos.
        </p>
      </div>

      <div className="reasons-grid">
        {loveConfig.reasons.map((reason, index) => (
          <div key={index} className="reason-card glass-card">
            <div className="reason-icon-bubble">
              <span>{reason.icon}</span>
            </div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-text">{reason.text}</p>
          </div>
        ))}
      </div>

      <style>{`
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .reason-card {
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 24px;
          border: 1px solid rgba(254, 240, 138, 0.7);
          transition: all 0.35s ease;
        }

        .reason-card:hover {
          transform: translateY(-8px);
          border-color: #f59e0b;
          box-shadow: 0 20px 35px rgba(245, 158, 11, 0.18);
        }

        .reason-icon-bubble {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fef08a, #fcd34d);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 16px;
          box-shadow: 0 8px 18px rgba(217, 119, 6, 0.2);
          transition: transform 0.3s ease;
        }

        .reason-card:hover .reason-icon-bubble {
          transform: scale(1.15) rotate(10deg);
        }

        .reason-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: #78350f;
          margin-bottom: 10px;
        }

        .reason-text {
          font-size: 0.98rem;
          color: #57534e;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
