"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
function linearSearch(arr, searchItems) {
    let totalComparisons = 0;
    for (const item of searchItems) {
        let comparisons = 0;
        for (let i = 0; i < arr.length; i++) {
            comparisons++;
            if (arr[i] === item) {
                break;
            }
        }
        totalComparisons += comparisons;
        //console.log(`Item: ${item}, Comparisons: ${comparisons}`); //test b
    }
    const avgComparisons = parseFloat((totalComparisons / searchItems.length).toFixed(2));
    console.log(`Total Comparisons: ${totalComparisons}`);
    console.log(`Average Comparisons: ${avgComparisons}`);
}
exports.linearSearch = linearSearch;
