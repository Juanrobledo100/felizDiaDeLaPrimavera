import React, { useState } from 'react';
import { Camera, Heart, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { loveConfig } from '../config';

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % loveConfig.photos.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + loveConfig.photos.length) % loveConfig.photos.length);
  };

  // Pequeñas rotaciones para aspecto orgánico estilo Polaroid
  const rotations = [-2.5, 2, -1.8, 2.5];

  return (
    <section className="section-wrapper gallery-section">
      <div className="section-header">
        <span className="section-tag">
          <Camera size={16} color="#d97706" /> Momentos Inolvidables
        </span>
        <h2 className="section-title">Nuestra Historia en Fotografías</h2>
        <p className="section-subtitle">
          Cada recuerdo contigo es un tesoro. Haz clic en cualquiera de nuestras fotos para verla en grande.
        </p>
      </div>

      <div className="polaroid-grid">
        {loveConfig.photos.map((photo, index) => (
          <div
            key={index}
            className="polaroid-card"
            style={{
              transform: `rotate(${rotations[index % rotations.length]}deg)`,
            }}
            onClick={() => openLightbox(index)}
          >
            <div className="polaroid-pin">
              <Sparkles size={14} color="#f59e0b" />
            </div>
            
            <div className="polaroid-image-frame">
              <img src={photo.url} alt={photo.title} className="polaroid-img" />
              <div className="polaroid-overlay">
                <span className="view-more-badge">Ver recuerdo</span>
              </div>
            </div>

            <div className="polaroid-text">
              <h4 className="polaroid-title">{photo.title}</h4>
              <p className="polaroid-caption">{photo.caption}</p>
              <div className="polaroid-meta">
                <span className="polaroid-date">{photo.date}</span>
                <Heart size={16} fill="#f43f5e" color="#f43f5e" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">
              <X size={24} />
            </button>

            {loveConfig.photos.length > 1 && (
              <>
                <button className="nav-arrow left" onClick={prevPhoto} aria-label="Foto anterior">
                  <ChevronLeft size={28} />
                </button>
                <button className="nav-arrow right" onClick={nextPhoto} aria-label="Foto siguiente">
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <img
              src={loveConfig.photos[selectedPhotoIndex].url}
              alt={loveConfig.photos[selectedPhotoIndex].title}
              className="lightbox-photo"
            />

            <div className="lightbox-caption">
              <span className="lightbox-date">
                {loveConfig.photos[selectedPhotoIndex].date}
              </span>
              <h3 className="lightbox-title">
                {loveConfig.photos[selectedPhotoIndex].title}
              </h3>
              <p className="lightbox-desc">
                {loveConfig.photos[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .polaroid-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
          margin-top: 20px;
          padding: 10px;
        }

        .polaroid-card {
          background: #ffffff;
          padding: 16px 16px 24px 16px;
          border-radius: 12px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(217, 119, 6, 0.08);
          cursor: pointer;
          position: relative;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid #fef3c7;
        }

        .polaroid-card:hover {
          transform: translateY(-10px) scale(1.03) rotate(0deg) !important;
          box-shadow: 0 22px 42px rgba(217, 119, 6, 0.22);
          z-index: 5;
        }

        .polaroid-pin {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 26px;
          height: 26px;
          background: #fef08a;
          border: 2px solid #f59e0b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }

        .polaroid-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          background: #fdf2f8;
        }

        .polaroid-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .polaroid-card:hover .polaroid-img {
          transform: scale(1.05);
        }

        .polaroid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(244, 63, 94, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .polaroid-card:hover .polaroid-overlay {
          opacity: 1;
        }

        .view-more-badge {
          background: #fff;
          color: #be123c;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .polaroid-text {
          margin-top: 16px;
          text-align: left;
        }

        .polaroid-title {
          font-family: var(--font-handwriting);
          font-size: 1.55rem;
          color: #881337;
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .polaroid-caption {
          font-size: 0.92rem;
          color: #57534e;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .polaroid-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px dashed #fed7aa;
          padding-top: 8px;
        }

        .polaroid-date {
          font-size: 0.82rem;
          color: #d97706;
          font-weight: 600;
        }

        /* Lightbox controles */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          color: #78350f;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
          z-index: 110;
        }
        .nav-arrow:hover {
          background: #f59e0b;
          color: #fff;
          transform: translateY(-50%) scale(1.1);
        }
        .nav-arrow.left {
          left: 16px;
        }
        .nav-arrow.right {
          right: 16px;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: #78350f;
          margin-bottom: 6px;
        }
        .lightbox-desc {
          font-size: 1.05rem;
          color: #57534e;
          max-width: 600px;
          margin: 0 auto;
        }
        .lightbox-date {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: #ea580c;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
      `}</style>
    </section>
  );
}
