"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveFractionalKnapsack = solveFractionalKnapsack;
exports.formatKnapsackOutput = formatKnapsackOutput;
function solveFractionalKnapsack(spices, capacity) {
    const knapsack = {
        capacity,
        contents: [],
        totalValue: 0
    };
    let remainingCapacity = capacity;
    const spiceInventory = spices.map(s => (Object.assign({}, s))); // Create copy to track remaining quantities
    for (const spice of spiceInventory) {
        if (remainingCapacity <= 0)
            break;
        const scoopsToTake = Math.min(spice.quantity, remainingCapacity);
        if (scoopsToTake > 0) {
            knapsack.contents.push({
                spiceName: spice.name,
                scoops: scoopsToTake
            });
            knapsack.totalValue += scoopsToTake * (spice.unitPrice || 0);
            remainingCapacity -= scoopsToTake;
        }
    }
    return knapsack;
}
function formatKnapsackOutput(knapsack) {
    if (knapsack.contents.length === 0) {
        return `Knapsack of capacity ${knapsack.capacity} is empty`;
    }
    const contentsDescription = knapsack.contents
        .map(allocation => `${allocation.scoops} scoop${allocation.scoops !== 1 ? 's' : ''} of ${allocation.spiceName}`)
        .join(', ');
    return `Knapsack of capacity ${knapsack.capacity} is worth ${Math.round(knapsack.totalValue)} quatloos and contains ${contentsDescription}.`;
}
