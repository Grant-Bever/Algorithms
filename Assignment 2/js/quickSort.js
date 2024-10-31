"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qsComparison = exports.quickSort = void 0;
//Quick sort algo, also works with divide and conquer method, chooses a pivit point at random and swaps the numbers around that point until its sorted
// Results vary but should be around 6248
let comparisons = 0;
function quickSort(items) {
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
        }
        else if (item > pivot) {
            right.push(item);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
exports.quickSort = quickSort;
function qsComparison() {
    console.log("Quick Sort completed with", comparisons, "comparisons");
}
exports.qsComparison = qsComparison;
