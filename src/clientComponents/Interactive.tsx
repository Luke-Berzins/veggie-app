"use client"

import React, { useState } from 'react';

import Card from './Card'
import Calculator from './Calculator.client'


const Interactive: React.FC = () => {

    const [ageValue, setAgeValue] = useState('');
    const [totalBeef, setTotalBeef] = useState<number>(0);
    const [totalChicken, setTotalChicken] = useState<number>(0);
    const [totalPork, setTotalPork] = useState<number>(0);
    const [beef, setBeef] = useState('1');
    const [chicken, setChicken] = useState('1');
    const [pork, setPork] = useState('1');

    const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value
      setAgeValue(newValue);
      calculateBeef(newValue, beef);
      calculateChicken(newValue, chicken);
      calculatePork(newValue, pork);
    };
  
  
    const handleBeefChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setBeef(newValue);
      calculateBeef(ageValue, newValue);
    };
  
    const handleChickenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setChicken(newValue);
      calculateChicken(ageValue, newValue);
    };
  
    const handlePorkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setPork(newValue);
      calculatePork(ageValue, newValue);
    };
  const calculateBeef = (age: string, chicken: string) => {
    const num1 = parseFloat(age);
    const num2 = parseFloat(chicken);

    if (!isNaN(num1) && !isNaN(num2)) {
        // number * 365 days * 5 ounces in a serving / 9120 ounce beef yield from average cow
        const cows = (num1 * num2 * 365 * 0.3125) / (1350 * 0.61);
        updateBeef(cows);
    }
    else {
        updateBeef(0)
    }
  };

  
  const calculatePork = (age: string, val2: string) => {
    const num1 = parseFloat(age);
    const num2 = parseFloat(val2);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      // number * 365 days * 4 ounces in a serving / 9120 ounce beef yield from average cow
      const pork = (num1 * num2 * 365 * 0.375) / (258 * 0.57)
      updatePork(pork);
    }
    else {
      updatePork(0)
    }
  };

  const calculateChicken = (age: string, val2: string) => {
    const num1 = parseFloat(age);
    const num2 = parseFloat(val2);

    if (!isNaN(num1) && !isNaN(num2)) {
        // number * 365 days * 4 ounces in a serving / 72 ounce chicken yield from average chicken
        const chicken = (num1 * num2* 365 * 0.3125) / (3.9 * 0.75)
        updateChicken(chicken);
    }
    else {
        updateChicken(0)
    }
  };



    const updateBeef = (value: number) => {
        setTotalBeef(Math.round(value));
    };

    const updateChicken = (value: number) => {
        setTotalChicken(Math.round(value));
    };
    
    const updatePork = (value: number) => {
      setTotalPork(Math.round(value));
  };

      return (
        <div className="flex flex-col items-center sm:justify-between h-screen border-black-800 w-screen">
          
            <Calculator
                handleAgeChange={handleAgeChange}
                handleBeefChange={handleBeefChange}
                handlePorkChange={handlePorkChange}
                handleChickenChange={handleChickenChange}
                ageValue={ageValue}
                beef={beef}
                pork={pork}
                chicken={chicken}
            />
            <br />
            <Card
                totalBeef={totalBeef}
                totalChicken={totalChicken}
                totalPork={totalPork}
            />
        </div>
    );
};

export default Interactive;