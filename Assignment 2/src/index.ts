import { readFileToArray } from "./fileOps";
import { quickSort } from "./quickSort";
import { pick } from "./pick";
import { linearSearch } from "./linearSearch";
import { binarySearch } from "./binarySearch";

//First step - sort items 

//Second step - pick 42 items then search for them 

const filepath = './src/magicItems.txt'
const magicitems = readFileToArray(filepath)

let sortedItems = quickSort(magicitems)

let picks = pick(sortedItems)

// Search for them
console.log("Performing Linear Search:")
linearSearch(sortedItems, picks)

// Search for them again
console.log("Performing Binary Search")
binarySearch(sortedItems, picks)


