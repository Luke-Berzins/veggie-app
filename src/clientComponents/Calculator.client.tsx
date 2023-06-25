import React, { useState } from 'react';

interface FormProps {
  updateBeef: (value: number) => void;
  updateChicken: (value: number) => void;
}

const Calculator: React.FC<{ updateBeef: Function, updateChicken: Function }> = ({ updateBeef, updateChicken }) => {
  
  const [value1, setValue] = useState('');
  const [beef, setBeef] = useState('');
  const [chicken, setChicken] = useState('');

  const calculateBeef = (val1: string, val2: string) => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (!isNaN(num1) && !isNaN(num2)) {
        // number * 365 days * 5 ounces in a serving / 9120 ounce beef yield from average cow
        const cows = (num1 * num2) * 365 * 5 / 9120;
        updateBeef(cows);
    }
    else {
        updateBeef(0)
    }
  };

  const calculateChicken = (val1: string, val2: string) => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (!isNaN(num1) && !isNaN(num2)) {
        // number * 365 days * 5 ounces in a serving / 9120 ounce beef yield from average cow
        const chicken = (num1 * num2) * 365 * 5 / 9120;
        updateChicken(chicken);
    }
    else {
        updateChicken(0)
    }
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    calculateBeef(newValue, beef);
    calculateChicken(newValue, chicken);
  };

  const handleBeefChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setBeef(newValue);
    calculateBeef(value1, newValue);
  };

  const handleChickenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setChicken(newValue);
    calculateChicken(value1, newValue);
  };



  return (
    <div  className="flex flex-row content-evenly gap-12">
        <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Age
                </label>
                <input 
                type="text" 
                value={value1} 
                onChange={handleAgeChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                
                </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Meals with beef per day
                </label>
                <input 
                type="text"
                value={beef} 
                onChange={handleBeefChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Meals with chicken per day
                </label>
                <input 
                type="text"
                value={chicken} 
                onChange={handleChickenChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                
            </div>
    </div>
  );
};

export default Calculator;
