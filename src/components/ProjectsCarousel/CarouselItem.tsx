import React from 'react';
import type { CarouselItemType } from '../types/carousel';
import { ArrowRight } from 'lucide-react';

interface CarouselItemProps {
  item: CarouselItemType;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-2">
      <div className="border border-white bg-black h-full">
        <div className="border-b border-white p-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover border-b border-white"
            loading="lazy"
          />
        )}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">&gt;</span>
            <h3 className="font-mono text-lg">{item.title}</h3>
          </div>
          <p className="text-sm text-gray-400 mb-2">[{item.date}]</p>
            <p className="text-sm mb-4 line-clamp-[13]">{item.description}</p>
          <a 
            href={item.link} 
            className="inline-flex items-center text-sm border-b border-white hover:text-gray-300 transition-colors"
          >
            See the project <ArrowRight className="ml-1 w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};