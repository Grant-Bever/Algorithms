"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOps_1 = require("./fileOps");
const quickSort_1 = require("./quickSort");
const pick_1 = require("./pick");
const linearSearch_1 = require("./linearSearch");
const binarySearch_1 = require("./binarySearch");
const hash_1 = require("./hash");
//First step - sort items 
//Second step - pick 42 items then search for them 
const filepath = './src/magicItems.txt';
const magicItems = (0, fileOps_1.readFileToArray)(filepath);
let sortedItems = (0, quickSort_1.quickSort)(magicItems);
let picks = (0, pick_1.pick)(sortedItems);
// Search for them
console.log("\nPerforming Linear Search:\n");
(0, linearSearch_1.linearSearch)(sortedItems, picks);
// Search for them again but better
console.log("\nPerforming Binary Search\n");
(0, binarySearch_1.binarySearch)(sortedItems, picks);
//PART 2 ---- Hashing
const hashTable = new hash_1.HashTable();
magicItems.forEach((item, index) => hashTable.insert(item, index));
console.log("\nPerforming Hash Lookup\n");
let totalComparisons = 0;
// Search for each item in searchItems and count comparisons
picks.forEach(item => {
    const { value, comparisons } = hashTable.get(item);
    totalComparisons += comparisons;
    //console.log(`Item: ${item}, Found: ${value !== undefined}, Comparisons: ${comparisons}`);
});
// Calculate and print the average comparisons per search
const avgComparisons = parseFloat((totalComparisons / picks.length).toFixed(2));
console.log(`Total Comparisons: ${totalComparisons}`);
console.log(`Average Comparisons: ${avgComparisons}`);
