import React from 'react';

const Calculator: React.FC<{
  ageValue: string, 
  handleAgeChange: React.ChangeEventHandler<HTMLSelectElement>, 
  beef: string, 
  handleBeefChange: React.ChangeEventHandler<HTMLInputElement>, 
  chicken: string,
  handleChickenChange: React.ChangeEventHandler<HTMLInputElement>, 
  pork: string,
  handlePorkChange: React.ChangeEventHandler<HTMLInputElement>, 
}> = ({ 
    ageValue, 
    handleAgeChange, 
    beef, 
    handleBeefChange, 
    chicken, 
    handleChickenChange,
    pork,
    handlePorkChange
  }) => {
  
    const ages = Array.from({ length: 100 }, (_, index) => index + 1);
 

  return (
    <div  className="flex flex-col md:flex-row" >
           <div className="flex flex-col md:items-start justify-end">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Age
                </label>
    <select
      className="w-1/2 md:w-1/2 px-4 ring ring-gray-300 py-2 mb-2 md:mb-0 md:mr-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      value={ageValue ?? ''}
      onChange={handleAgeChange}
    >
      <option value="">Age</option>
      {ages.map((age) => (
        <option key={age} value={age}>
          {age}
        </option>
      ))}
    </select>
                
                </div>
           <div className="flex flex-col md:items-start justify-end">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Meals with beef per day (burger)
                </label>
                <input 
                type="text"
                value={beef} 
                onChange={handleBeefChange}
                className="w-1/2 md:w-1/2 px-4 ring ring-gray-300 py-2 mb-2 md:mb-0 md:mr-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div className="flex flex-col md:items-start justify-end">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Meals with pork per day (sausage)
                </label>
                <input 
                type="text"
                value={pork} 
                onChange={handlePorkChange}
                className="w-1/2 md:w-1/2 px-4 py-2 ring ring-gray-300 mb-2 md:mb-0 md:mr-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
          </div>
           <div className="flex flex-col md:items-start justify-end">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Meals with chicken per day (chicken breast)
                </label>
                <input 
                type="text"
                value={chicken} 
                onChange={handleChickenChange}
                className="w-1/2 md:w-1/2 px-4 py-2 ring ring-gray-300 mb-2 md:mb-0 md:mr-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
          </div>
    </div>
  );
};

export default Calculator;
