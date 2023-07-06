function calculateKMs(totalBeef: number, totalPork: number, totalChicken: number): number { 
    {
        //(amount of animal * total 100g in animal (cow-1350lbs = 612350g)(288lbs = 1306g) * gwp per source) * kms produced for one 1 gwp
    }
    return Math.round(((totalBeef * 6123.50 * 15.5) + (totalPork * 1306.35 * 2.4) + (totalChicken * 17.69 * 1.82)) * 5)
}

function calculateApples(totalBeef: number, totalPork: number, totalChicken: number): number { 
    {
        //(amount of animal * total 100g in animal * gwp per source ) * apples produced for one 1 gwp
    }
    return Math.round(((totalBeef * 6123.50 * 15.5 ) + (totalPork * 1306.35 * 2.4 ) + (totalChicken * 17.69 * 1.82 )) * 17)
}

function calculatePlasticBags(totalBeef: number, totalPork: number, totalChicken: number): number { 
    {
        //(amount of animal * total 100g in animal * gwp per source) * plastic bags produced for one 1 gwp
    }
    return Math.round(((totalBeef * 6123.50 * 15.5 ) + (totalPork * 1306.35 * 2.4 ) + (totalChicken * 17.69 * 1.82 )) * 0.63)
}

export default {
    calculateKMs,
    calculateApples,
    calculatePlasticBags
}
