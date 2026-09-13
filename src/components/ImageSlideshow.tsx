import { useEffect, useState } from "react";

type ImageSlideshowProps = {
  images: string[];
  alt: string;
  className?: string;
  intervalMs?: number;
};

export function ImageSlideshow({ images, alt, className, intervalMs = 3500 }: ImageSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt}${images.length > 1 ? ` — ${i + 1} of ${images.length}` : ""}`}
          width={1280}
          height={720}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
