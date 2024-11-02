export function pick(eggs: string[], numPicks: number = 42): string[] {
    let basket: string[] = [];
    let availableEggs = [...eggs]; // Create a copy of the original array

    for (let i = 0; i < numPicks && availableEggs.length > 0; i++) {
        let num = Math.floor(Math.random() * availableEggs.length);
        basket.push(availableEggs[num]);
        availableEggs.splice(num, 1); // Remove from the copy only
    }

    return basket;
}