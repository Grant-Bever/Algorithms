//divide and conquor method, split it up and sort it while you put it back together
let comparissons = 0;
export function mergeSort(items: string[]): string[] {
    if (items.length <= 1) {
        return items
    }
    const middle = Math.floor(items.length / 2);
    const left = mergeSort(items.slice(0, middle));
    const right = mergeSort(items.slice(middle));

    const merged = merge(left, right);
    return merged;
  }

function merge(left: string[], right: string[]): string[] {
    let sortedItems: string[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
        comparissons++
        if (left[leftIndex].toLowerCase() < right[rightIndex].toLowerCase()) {
            sortedItems.push(left[leftIndex]);
            leftIndex++;
      } else {
        sortedItems.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return sortedItems
           .concat(left.slice(leftIndex))
           .concat(right.slice(rightIndex));
  }

export function mergeComparison(){
    console.log("Merge sort completed with", comparissons, "comparissons.")
}