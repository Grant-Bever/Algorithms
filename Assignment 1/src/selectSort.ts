//Selection sort goes through the array and finds the minimum value in the unsorted portion and swaps it out
//keeps going untill the whole thing is sorted
//O(n^2), n(n-1) / 2 with n = 666 should be 221595 but its 221445 so im probably getting a weird off by one error

export function selectionSort(items: []){
    let comparisons = 0;

    for(let i = 0; i < items.length - 1; i++){ // i loop
        let smallNum = i;
        for (let j = i + 1; j < items.length; j++){ // j loop
            comparisons++
            if (items[j] < items[smallNum]) {
                smallNum = j;
            }
        } // end i loop 
        if (smallNum !== i) {
            [items[i], items[smallNum]] = [items[smallNum], items[i]];
        }
        
    } // end j loop 
    console.log("Selection sort had", comparisons, "comparrisons");
    return items
}
