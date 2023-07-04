function calculateKMs(totalBeef: number, totalPork: number, totalChicken: number): number { 
    {
        //amount of animal * total 100g in animal * gwp per source * (km / gwp)
    }
    return Math.round(((totalBeef * 6123.50 * 15.5) + (totalPork * 130.64 * 2.4) + (totalChicken * 17.69 * 182.2)) * 5)
}

function calculateApples(totalBeef: number, totalPork: number, totalChicken: number): number { 
    {
        //amount of animal * total 100g in animal * gwp per source * apple / gwp
    }
    return Math.round(((totalBeef * 6123.50 * 15.5 ) + (totalPork * 130.64 * 2.4 ) + (totalChicken * 17.69 * 182.2 )) * 17)
}

function calculatePlasticBags(totalBeef: number, totalPork: number, totalChicken: number): number { 
    {
        //amount of animal * total 100g in animal * gwp per source * apple / gwp
    }
    return Math.round(((totalBeef * 6123.50 * 15.5 ) + (totalPork * 130.64 * 2.4 ) + (totalChicken * 17.69 * 182.2 )) * 0.63)
}

export default {
    calculateKMs,
    calculateApples,
    calculatePlasticBags
}
