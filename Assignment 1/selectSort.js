"use strict";
//Selection sort goes through the array and finds the minimum value in the unsorted portion and swaps it out
//keeps going untill the whole thing is sorted
//O(n^2), n(n-1) / 2 with n = 666 should be 221595 but its 221445 so im probably getting a weird off by one error
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
//I just realized that the strings coming into here have no caps and no spaces... I should probably change that... ugh
function selectionSort(items) {
    let comparrisons = 0;
    for (let i = 0; i < items.length - 1; i++) { // i loop
        let smallNum = i;
        for (let j = i + 1; j < items.length; j++) { // j loop
            comparrisons++;
            if (items[j] < items[smallNum]) {
                smallNum = j;
            }
        } // end i loop 
        if (smallNum !== i) {
            [items[i], items[smallNum]] = [items[smallNum], items[i]];
        }
    } // end j loop 
    console.log("Selection sort had", comparrisons, "comparrisons");
    return items;
}
exports.selectionSort = selectionSort;
