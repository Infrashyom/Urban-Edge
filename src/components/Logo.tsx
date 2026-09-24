import { useState } from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = "w-full h-full object-contain", alt = "Urban Edge Logo" }: LogoProps) {
  const [imgSrc, setImgSrc] = useState<string>('/logo.png');
  const [failed, setFailed] = useState<boolean>(false);

  const handleError = () => {
    // If logo.png isn't found, try logo.jpg once, else display placeholder until uploaded
    if (imgSrc === '/logo.png') {
      setImgSrc('/logo.jpg');
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className={`flex items-center justify-center font-bold text-xs bg-slate-900 text-white rounded px-1.5 py-0.5 ${className}`}>
        UE
      </div>
    );
  }

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={`${className} transition-transform duration-300`}
      onError={handleError}
    />
  );
}
