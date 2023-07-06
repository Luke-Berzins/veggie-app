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
                  className="flex flex-col h-full w-11/12 gap-4 rounded-lg border-t-2 border-x-2 border-gray-300 bg-white md:pl-6 md:py-6 pl-3 py-3"
                >
                   {

                       totalBeef ? <div>
                        <span
                        className="text-base "
                        >The production of these animals releases the same level of carbon dioxide equivalent (CO2e) into the atomosphere as:</span>
                    </div> : <div></div>
                    }
                <div className="flex justify-items-start justify-start ">

                <div
                    className="inline-flex self-start rounded bg-green-100 p-2 mr-2 text-green-600"
                    >
                    <span className="text-xs font-medium text-center">
                        {utils.calculateKMs(totalBeef, totalPork, totalChicken)} kilometers of driving </span>
                </div>
                <div
                    className="inline-flex self-start rounded bg-green-100 p-2 mr-2 text-green-600"
                    >
                    <span className="text-xs font-medium text-center">
                        {utils.calculateApples(totalBeef, totalPork, totalChicken)} apples produced </span>
                </div>
                <div
                    className="inline-flex self-start rounded bg-green-100 p-2 mr-2 text-green-600"
                    >
                    <span className="text-xs font-medium text-center">
                        {utils.calculatePlasticBags(totalBeef, totalPork, totalChicken)} plastic bags produced</span>
                </div>
                    <Link href="/about" className="text-blue-500 underline text-xs p-2 mr-2 font-medium text-left">
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