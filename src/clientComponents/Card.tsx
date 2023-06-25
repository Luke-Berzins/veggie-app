"use client"

import React from 'react';
import EmojiGallery from './EmojiGallery';


const Card: React.FC<{ totalBeef: number, totalChicken: number }> = ({ totalBeef, totalChicken }) => {

    return (
            <article
                  className="flex flex-col h-full w-full gap-4 rounded-lg border border-gray-100 bg-white p-6"
                >
                <div
                    className="inline-flex self-start rounded bg-green-100 p-1 text-green-600"
                >
                    <span className="text-xs font-medium">
                        {/* 220 pounds methane released per cow x 450 grams per pound x 25 gwp value for methane vs co2 * cow 192 grams cO2 released per km*/}
                        {Math.round(220 * 450 * totalBeef * 25 / 192)} kilometers of driving </span>
                </div>
                
                <EmojiGallery 
                    numberOfEmojis={totalBeef < 100 ? totalBeef : 100}
                    emoji={'🐄'}
                    animal={'cows'}
                    totalAnimal={totalBeef}
                />
                <EmojiGallery 
                    numberOfEmojis={totalChicken < 100 ? totalChicken : 100}
                    emoji={'🐔'}
                    animal={'chicken'}
                    totalAnimal={totalChicken}
                />
            </article>
    )
}

export default Card