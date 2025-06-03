import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from './CarouselItem';
import { CarouselDots } from './CarouselDots';
import type { CarouselItemType } from '../types/carousel';

interface CarouselProps {
  items: CarouselItemType[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <div 
      className="relative flex items-center gap-4" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button 
        className="w-10 h-10 flex items-center justify-center border border-white bg-black hover:bg-opacity-70 transition duration-200"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
        </div>
      </div>
      
      <button 
        className="w-10 h-10 flex items-center justify-center border border-white bg-black hover:bg-opacity-70 transition duration-200"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      <div className="absolute -bottom-4 left-0 right-0 flex justify-center mt-4">
        <CarouselDots 
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          scrollTo={scrollTo}
        />
      </div>
    </div>
  );
};