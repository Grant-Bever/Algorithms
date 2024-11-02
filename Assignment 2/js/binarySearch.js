"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearch(arr, searchItems) {
    let totalComparisons = 0;
    for (const item of searchItems) {
        let comparisons = 0;
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            comparisons++;
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === item) {
                break;
            }
            else if (arr[mid] < item) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        totalComparisons += comparisons;
        //console.log(`Item: ${item}, Comparisons: ${comparisons}`);
    }
    const avgComparisons = parseFloat((totalComparisons / searchItems.length).toFixed(2));
    console.log(`Total Comparisons: ${totalComparisons}`);
    console.log(`Average Comparisons: ${avgComparisons}`);
}
exports.binarySearch = binarySearch;
