import { useState } from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = "w-full h-full object-contain", alt = "Urban Edge Logo" }: LogoProps) {
  // Sequentially checks public files: /logo.png -> /logo.jpg -> /logo.jpeg -> /logo.svg
  const [imgSrc, setImgSrc] = useState<string>('/logo.png');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImgError = () => {
    if (imgSrc === '/logo.png') {
      setImgSrc('/logo.jpg');
    } else if (imgSrc === '/logo.jpg') {
      setImgSrc('/logo.jpeg');
    } else if (imgSrc === '/logo.jpeg') {
      setImgSrc('/logo.svg');
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <svg viewBox="0 0 250 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10,10 L 36,10 L 36,72 C 36,92 50,104 68,104 C 86,104 100,92 100,72 L 100,10 L 126,10 L 126,72 C 126,108 100,130 68,130 C 36,130 10,108 10,72 Z" fill="#0F172A"/>
        <path d="M 43,98 L 43,75 L 49,75 L 49,55 L 55,55 L 55,72 L 63,72 L 63,38 L 67,22 L 71,22 L 75,38 L 75,70 L 83,70 L 83,58 L 89,58 L 89,78 L 94,78 L 94,98 Z" fill="#0F172A"/>
        <polygon points="136,15 240,15 220,42 136,42" fill="#0F172A"/>
        <polygon points="136,58 225,58 205,85 136,85" fill="#0F172A"/>
        <polygon points="136,102 210,102 190,129 136,129" fill="#FF5A1F"/>
      </svg>
    );
  }

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={`${className} transition-transform duration-300`}
      onError={handleImgError}
    />
  );
}
