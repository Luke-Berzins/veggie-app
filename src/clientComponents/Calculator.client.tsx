import React from 'react';


const Calculator: React.FC<{ handleAgeChange: Function, handleBeefChange: Function, handleChickenChange: Function, ageValue: string, beef: string, chicken: string}> = ({ ageValue, handleAgeChange, beef, handleBeefChange, chicken, handleChickenChange }) => {
  

  return (
    <div  className="grid gap-2 mb-6 md:grid-cols-2" >
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Age
                </label>
                <input 
                type="text" 
                value={ageValue} 
                onChange={handleAgeChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Meals with beef per day
                </label>
                <p className="text-sm text-gray-600">(Burger)</p>
                <input 
                type="text"
                value={beef} 
                onChange={handleBeefChange}
                className="bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Meals with chicken per day
                </label>
                <p className="text-sm text-gray-600">(Chicken thigh)</p>
                <input 
                type="text"
                value={chicken} 
                onChange={handleChickenChange}
                className="bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                
            </div>
    </div>
  );
};

export default Calculator;
