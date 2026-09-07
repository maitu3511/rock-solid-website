import React, { useEffect, useState } from 'react';

interface HeroVideoBackgroundProps {
  /** CDN url of the looping hero video */
  src: string;
  /** Poster / fallback image shown before the video is ready */
  poster: string;
  alt: string;
  /** Extra classes applied to the media element (filters, etc.) */
  mediaClassName?: string;
  /** Base opacity of the background media (0-1) */
  baseOpacity?: number;
}

/**
 * Full-bleed hero background: poster image first (instant paint),
 * then a muted, looping, controls-free video fades in once it can play.
 * Skipped entirely for users who prefer reduced motion or save-data.
 */
export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({
  src,
  poster,
  alt,
  mediaClassName = '',
  baseOpacity = 1,
}) => {
  const [allowVideo, setAllowVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    if (reduceMotion || connection?.saveData) return;

    // Defer loading so the video never competes with first paint
    const idle = window.setTimeout(() => setAllowVideo(true), 400);
    return () => window.clearTimeout(idle);
  }, []);

  return (
    <>
      <img
        src={poster}
        alt={alt}
        style={{ opacity: isReady ? 0 : baseOpacity }}
        className={`absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom transition-opacity duration-1000 ${mediaClassName}`}
        referrerPolicy="no-referrer"
      />
      {allowVideo && (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setIsReady(true)}
          style={{ opacity: isReady ? baseOpacity : 0 }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${mediaClassName}`}
        />
      )}
    </>
  );
};
