//Quick sort algo, also works with divide and conquer method, chooses a pivit point at random and swaps the numbers around that point until its sorted
// Results vary but should be around 6248
let comparisons = 0;
export function quickSort(items: string[]): string[] {
    if (items.length <= 1) {
        return items;
    }

    const pivot = items[Math.floor(items.length / 2)];
    const left = [];
    const right = [];

    for (const item of items) {
        comparisons++; 
        if (item < pivot) {
            left.push(item);
        } else if (item > pivot) {
            right.push(item);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

export function qsComparison(){
    console.log("Quick Sort completed with", comparisons, "comparisons")
}