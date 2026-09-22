import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Arpegio romántico y relajante tipo caja de música / piano suave de primavera
  const notes = [
    261.63, // C4
    329.63, // E4
    392.00, // G4
    493.88, // B4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99  // G5
  ];

  // Secuencia armónica romántica (progresión cálida de primavera)
  const pattern = [
    0, 2, 4, 6, 4, 2,
    1, 3, 5, 7, 5, 3,
    0, 2, 4, 7, 6, 4,
    2, 4, 6, 5, 4, 2
  ];

  const playTone = (freq) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Sonido suave estilo piano eléctrico / campanas de viento
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 2.3);
  };

  const startMelody = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    let step = 0;
    const interval = 450; // milisegundos entre notas

    timerRef.current = setInterval(() => {
      const noteIdx = pattern[step % pattern.length];
      playTone(notes[noteIdx % notes.length]);
      step++;
    }, interval);

    setIsPlaying(true);
  };

  const stopMelody = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMelody();
    } else {
      startMelody();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="music-player-widget">
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        title={isPlaying ? "Pausar melodía romántica" : "Escuchar melodía romántica de primavera"}
      >
        <div className="music-icon-wrap">
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </div>
        
        <div className="music-details">
          <span className="music-title">Melodía de Primavera</span>
          <span className="music-status">{isPlaying ? "Sonando para ti..." : "Toca para música"}</span>
        </div>

        {isPlaying && (
          <div className="equalizer-bars">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </div>
        )}
      </button>

      <style>{`
        .music-player-widget {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 90;
        }

        .music-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #fde047;
          padding: 10px 18px;
          border-radius: 999px;
          box-shadow: 0 10px 25px rgba(217, 119, 6, 0.22);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .music-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 30px rgba(217, 119, 6, 0.3);
          background: #ffffff;
        }

        .music-btn.playing {
          border-color: #f43f5e;
          animation: pulseGlow 3s infinite ease-in-out;
        }

        .music-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .music-btn.playing .music-icon-wrap {
          background: linear-gradient(135deg, #f43f5e, #fb7185);
        }

        .music-details {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .music-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #78350f;
          font-family: var(--font-serif);
        }

        .music-status {
          font-size: 0.75rem;
          color: #b45309;
        }

        .equalizer-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 18px;
          margin-left: 4px;
        }

        .bar {
          width: 3px;
          background: #f43f5e;
          border-radius: 999px;
          animation: bounceBar 0.8s infinite ease-in-out;
        }

        .bar-1 { height: 60%; animation-delay: 0.1s; }
        .bar-2 { height: 100%; animation-delay: 0.3s; }
        .bar-3 { height: 40%; animation-delay: 0.2s; }

        @keyframes bounceBar {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
