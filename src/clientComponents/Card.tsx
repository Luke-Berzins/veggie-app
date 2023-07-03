"use client"

import React from 'react';
import Link from 'next/link';
import EmojiGallery from './EmojiGallery';
import  utils from '../utils/utils';


const Card: React.FC<{ 
    totalBeef: number, 
    totalPork: number,
    totalChicken: number
}> =
 ({ 
    totalBeef, 
    totalPork,
    totalChicken 
}) => {

    return (
            <article
                  className="flex flex-col h-full w-screen gap-4 rounded-lg border border-gray-100 bg-white md:pl-6 md:py-6 pl-3 py-3"
                >
                <div className="grid grid-cols-3 justify-items-start grid-flow gap-2 ">

                <div
                    className="inline-flex self-start rounded bg-green-100 p-1 text-green-600"
                    >
                    <span className="text-xs font-medium">
                        {utils.calculateKMs(totalBeef)} kilometers of driving </span>
                    </div>
                    <Link href="/about" className="text-blue-500 underline text-xs font-medium">
                        How this was calculated →
                    </Link>
                </div>
                
                <EmojiGallery 
                    numberOfEmojis={totalBeef < 100 ? totalBeef : 100}
                    emoji={'🐄'}
                    animal={'cows'}
                    totalAnimal={totalBeef}
                />
                <EmojiGallery 
                    numberOfEmojis={totalPork < 500 ? totalPork : 500}
                    emoji={'🐷'}
                    animal={'pigs'}
                    totalAnimal={totalPork}
                />
                <EmojiGallery 
                    numberOfEmojis={totalChicken < 1000 ? totalChicken : 1000}
                    emoji={'🐔'}
                    animal={'chicken'}
                    totalAnimal={totalChicken}
                />
            </article>
    )
}

export default Card