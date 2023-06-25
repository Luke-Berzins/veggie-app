"use client"

import React, { useState } from 'react';

import Card from './Card'
import Calculator from './Calculator.client'


const Interactive: React.FC = () => {
    const [totalBeef, setTotalBeef] = useState<number>(0);
    const [totalChicken, setTotalChicken] = useState<number>(0);

    const updateBeef = (value: number) => {
        setTotalBeef(Math.round(value));
    };

    const updateChicken = (value: number) => {
        setTotalChicken(Math.round(value));
    };

      return (
        <div className="flex flex-col items-center justify-between p-24 h-screen border-black-800">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Cowculator</mark></h1>
            <br />
            <br />
            <Calculator
                updateBeef={updateBeef}
                updateChicken={updateChicken}
            />
            <br />
            <Card
                totalBeef={totalBeef}
                totalChicken={totalChicken}
            />
        </div>
    );
};

export default Interactive;