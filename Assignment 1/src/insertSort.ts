//should average around 110,000 comparisons
export function insertionSort(items: string[]){
    let comparisons = 0
    for( let i = 1; i < items.length; i++){
        let selected = items[i]
        let j = i - 1;
        while (j >= 0 && (items[j] > selected)) {
            comparisons++; 
            items[j + 1] = items[j];
            j--;
        }
        items[j + 1] = selected
    }
    console.log("Insertion sort complete with", comparisons, "comparisons");
    return items
}
// Insetion sort works left to right examining each item and comparing it to the items on its left, then we inset the item in the correct position in the array