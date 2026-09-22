import React, { useState, useEffect } from 'react';
import { Clock, Heart, Calendar } from 'lucide-react';
import { loveConfig } from '../config';

export default function LoveCounter() {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date(loveConfig.anniversaryDate);

    const updateCounter = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeTogether({ days, hours, minutes, seconds });
      }
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-wrapper counter-section">
      <div className="section-header">
        <span className="section-tag">
          <Clock size={16} color="#d97706" /> Nuestro Tiempo Juntos
        </span>
        <h2 className="section-title">Cada Segundo a Tu Lado Vale Oro</h2>
        <p className="section-subtitle">
          El tiempo vuela cuando eres feliz, pero cada instante contigo queda grabado en mi alma.
        </p>
      </div>

      <div className="counter-card glass-card">
        <div className="counter-grid">
          <div className="counter-unit">
            <span className="counter-number">{timeTogether.days}</span>
            <span className="counter-label">Días</span>
          </div>
          <span className="counter-colon">:</span>

          <div className="counter-unit">
            <span className="counter-number">{String(timeTogether.hours).padStart(2, '0')}</span>
            <span className="counter-label">Horas</span>
          </div>
          <span className="counter-colon">:</span>

          <div className="counter-unit">
            <span className="counter-number">{String(timeTogether.minutes).padStart(2, '0')}</span>
            <span className="counter-label">Minutos</span>
          </div>
          <span className="counter-colon">:</span>

          <div className="counter-unit">
            <span className="counter-number highlight">{String(timeTogether.seconds).padStart(2, '0')}</span>
            <span className="counter-label">Segundos</span>
          </div>
        </div>

        <div className="counter-footer">
          <Heart size={20} fill="#f43f5e" color="#f43f5e" className="pulse-heart" />
          <span>...y contando una eternidad más a tu lado</span>
        </div>
      </div>

      <style>{`
        .counter-card {
          padding: 40px 30px;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .counter-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .counter-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
          border: 1px solid #fde68a;
          padding: 16px 22px;
          border-radius: 18px;
          min-width: 100px;
          box-shadow: 0 8px 20px rgba(245, 158, 11, 0.12);
        }

        .counter-number {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          color: #92400e;
          line-height: 1;
        }

        .counter-number.highlight {
          color: #f43f5e;
        }

        .counter-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #78350f;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 6px;
        }

        .counter-colon {
          font-size: 2.2rem;
          font-weight: 700;
          color: #f59e0b;
        }

        @media (max-width: 600px) {
          .counter-colon {
            display: none;
          }
          .counter-unit {
            min-width: 75px;
            padding: 12px 14px;
          }
        }

        .counter-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.05rem;
          color: #78350f;
          font-style: italic;
          font-family: var(--font-serif);
        }

        .pulse-heart {
          animation: beat 1.4s infinite;
        }
      `}</style>
    </section>
  );
}
