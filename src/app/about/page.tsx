import React from 'react';
import Link from 'next/link'

const BlogPost = () => {

    return (
        <div className="prose lg:prose-xl max-w-none m-4">
            <h1 className="text-4xl font-bold mb-4">How Many Animals Would You Eat in a Lifetime?</h1>
            <br />
            <p className="mb-4">
                First, we need to know the average weights of cows, pigs, and chickens. The average cow weighs <a href="https://www.thecoldwire.com/how-much-does-a-cow-weigh/" className="text-blue-500 underline">1350 pounds</a>, 
                
                a pig <a href="https://beyondthetreat.com/how-much-does-a-pig-weigh/" className="text-blue-500 underline">288 pounds</a>, 
                and a chicken is typically <a href="https://weighschool.com/whole-chicken-weights-sizes-servings/" className="text-blue-500 underline">3.9 pounds</a>.
            </p>
            <p className="mb-4">
                Next, we need to consider the average serving sizes for each type of meat. 
                According to various sources, the average (pre-cooked) serving size is <a href="https://www.nytimes.com/2014/06/25/dining/how-to-make-a-great-burger.html" className="text-blue-500 underline">5 ounces for beef</a>, <a href="https://www.clovegarden.com/ingred/ap_chopz.html#:~:text=Pork%20chops%20typically%20weigh%20between,trimmed%20of%20nearly%20all%20fat)." className="text-blue-500 underline">6 ounces for pork</a>, and <a href="https://bakeitwithlove.com/how-much-does-a-chicken-breast-weigh/" className="text-blue-500 underline">5 ounces for chicken</a>.
            </p>
            <p className="mb-4">
                Not all of an animal's weight is usable as meat, 
                so we also have to take yield into account. According to the USDA, 
                the yield from beef is about 61%, from pigs about 57%, and from a chicken is about 75%.
            </p>
            <p className="mb-4">
                Now we can calculate how many animals are eaten in a lifetime:
            </p>
            <ul className="list-disc list-inside mb-4">

                <li>Cows = Age x meals per day x 365 x serving size (~0.3125lbs) / (cow weight (~1350) x yield (~0.61))</li>
                <li>Pigs = Age x meals per day x 365 x serving size (~0.375lbs) / (pig weight (~258) x yield (~0.57))</li>
                <li>Chickens = Age x meals per day x 365 x serving size (~0.3125lbs) / (chicken weight (~3.9) x yield (~0.75))</li>
            </ul>
            
            <p className="mb-4">
            
            To determine how the production of animal products equates to kilometers of driving, 
            there's a measure known as C02e, or "Carbon Dioxide Equivalent".  It represents the damage 1 kilogram of CO2 has on our atmosphere,
             and other gases can be measured against it based on their own damage to the atmosphere. For example, methane is approximately 25x more damaging than CO2, 
             so methane has a Carbon-Dioxide-Equivalent(CO2e) around 25. 
                
             </p>
             
            <p className="mb-4">

             The website <a href="https://www.co2everything.com/" className="text-blue-500 underline">co2everything.com</a> has calculated 
             the CO2e produced by various items during their production. It found that 100g of beef, pork, and chicken produce 15.5 CO2e, 2.4 CO2e, and 1.8 CO2e, respectively. 
            </p>

            
             <p className="mb-4">
             Since these figures represent the CO2e per 100g serving of each animal, we can adjust the weight of each animal to 100g increments. A 1350lb cow equals 612350g. Divide this by 100 to match the 100g measurement. 
             Multiply the result by the number of cows consumed in a lifetime to get the total CO2e, and repeat the same for pigs and chickens. 
            </p>

             <p className="mb-4">
             Adding all these values together gives us the total CO2e released to produce all the animals listed. We then convert this total CO2e into the equivalent number of kilometers driven,
              by multiplying it by the amount of km that 1 CO2e will take you (around 5km).
            </p>

            <p className="mb-4">
            These are rough estimates and actual numbers can vary based on many factors, however it illustrates our consumption patterns and the scale of our food system.
            </p>
        <Link href="/" className="text-blue-500 underline">
                Back to main
        </Link>
    </div>
    );
};

export default BlogPost;
