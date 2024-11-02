import { readFileToArray } from "./fileOps";
import { quickSort } from "./quickSort";
import { pick } from "./pick";
import { linearSearch } from "./linearSearch";
import { binarySearch } from "./binarySearch";
import { HashTable } from "./hash";

//First step - sort items 

//Second step - pick 42 items then search for them 

const filepath = './src/magicItems.txt'
const magicItems = readFileToArray(filepath)

let sortedItems = quickSort(magicItems)

let picks = pick(sortedItems)

// Search for them
console.log("\nPerforming Linear Search:\n")
linearSearch(sortedItems, picks)

// Search for them again
//console.log("\nPerforming Binary Search\n")
//binarySearch(sortedItems, picks)

//PART 2 ---- Hashing

const hashTable = new HashTable();
magicItems.forEach((item, index) => hashTable.insert(item, index));

console.log("\nPerforming Hash Lookup\n")

let totalComparisons = 0;

    // Search for each item in searchItems and count comparisons
    picks.forEach(item => {
        const { value, comparisons } = hashTable.get(item);
        totalComparisons += comparisons;
        //console.log(`Item: ${item}, Found: ${value !== undefined}, Comparisons: ${comparisons}`);
    });

    // Calculate and print the average comparisons per search
    const avgComparisons = parseFloat((totalComparisons / picks.length).toFixed(2));
    //console.log(`Total Comparisons: ${totalComparisons}`);
    //console.log(`Average Comparisons: ${avgComparisons}`);

