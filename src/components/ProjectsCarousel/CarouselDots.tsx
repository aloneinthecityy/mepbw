import React from 'react';

interface CarouselDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  scrollSnaps,
  selectedIndex,
  scrollTo,
}) => {
  return (
    <div className="flex space-x-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full border border-white ${
            index === selectedIndex ? 'bg-white' : 'bg-transparent'
          }`}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};