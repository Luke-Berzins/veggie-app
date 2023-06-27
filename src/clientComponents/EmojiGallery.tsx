'use client'

import React from 'react';

interface EmojiGalleryProps {
  numberOfEmojis: number;
  emoji: string;
  animal: string;
  totalAnimal: number;
}

const EmojiGallery: React.FC<EmojiGalleryProps> = ({ numberOfEmojis, emoji, animal, totalAnimal }) => {
  const EmojiArray = Array.from({ length: numberOfEmojis }, (_, index) => index + 1);

  return (
    <div className="">

        <p>
        <span className="text-2xl font-medium text-gray-900"> {totalAnimal} </span>
        <span className="text-xs text-gray-500">{animal}</span>
        </p>
    <div
      className="grid gap-6 mb-6 md:grid-cols-10 grid-cols-4" >
    {EmojiArray.map((EmojiNumber, index: number) => (
      <div key={index} className="text-lrg">
        {emoji}
      </div>  
    ))}
      
    </div>
    </div>
  );
};

export default EmojiGallery;
