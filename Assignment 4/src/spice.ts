export interface Spice {
    name: string;
    totalPrice: number;
    quantity: number;
    unitPrice?: number; // Price per unit, calculated
}

export interface Knapsack {
    capacity: number;
    contents: SpiceAllocation[];
    totalValue: number;
}

export interface SpiceAllocation {
    spiceName: string;
    scoops: number;
}

export function solveFractionalKnapsack(spices: Spice[], capacity: number): Knapsack {
const knapsack: Knapsack = {
    capacity,
    contents: [],
    totalValue: 0
};

let remainingCapacity = capacity;
const spiceInventory = spices.map(s => ({...s})); // Create copy to track remaining quantities

for (const spice of spiceInventory) {
    if (remainingCapacity <= 0) break;

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


export function formatKnapsackOutput(knapsack: Knapsack): string {
    if (knapsack.contents.length === 0) {
        return `Knapsack of capacity ${knapsack.capacity} is empty`;
    }

    const contentsDescription = knapsack.contents
        .map(allocation => `${allocation.scoops} scoop${allocation.scoops !== 1 ? 's' : ''} of ${allocation.spiceName}`)
        .join(', ');

    return `Knapsack of capacity ${knapsack.capacity} is worth ${Math.round(knapsack.totalValue)} quatloos and contains ${contentsDescription}.`;
}