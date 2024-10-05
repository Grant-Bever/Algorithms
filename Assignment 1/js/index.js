"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOps_1 = require("./fileOps");
const fileOps_2 = require("./fileOps");
const shuffle_1 = require("./shuffle");
const quickSort_1 = require("./quickSort");
const quickSort_2 = require("./quickSort");
//1st read items array whilst cleaning them
//const filepath = 'miniMagicItems.txt' //mini version of magicItems.txt only containing 15 strings used for testing purposes
const filepath = './src/text/magicItems.txt';
const dataItems = (0, fileOps_1.readFileToArrayDataStructures)(filepath);
const sortItems = (0, fileOps_2.readFileToArraySort)(filepath);
// console.log(items) // for testing but its annoying me 
const shuffledItems = (0, shuffle_1.shuffle)(sortItems);
if (sortItems.length === shuffledItems.length) {
    console.log("all " + shuffledItems.length + " items are shuffled\nnow for sorting");
}
//let selectSortedItems = selectionSort(shuffledItems)    // SELECT SORT DRIVER CODE
//console.log(selectSortedItems);
//let insertionSortedItems = insertionSort(shuffledItems)   // INSERTION SORT DRIVER CODE
//console.log(insertionSortedItems)
//let mergeSortedItems = mergeSort(shuffledItems)         // MERGE SORT DRIVER CODE
//console.log(mergeSortedItems)
//mergeComparison()
let quickSortedItems = (0, quickSort_1.quickSort)(shuffledItems); // QUICK SORT DRIVER CODE
(0, quickSort_2.qsComparison)();
console.log(quickSortedItems);
/*

let palendromes = [] // this will be used to save me tears, will be cut later

//2nd send those items into the dataStructures, where itll make each letter a node then push it into the stack / queue
for (let i = 0; i < items.length; i++) {
    const word = items[i];
    const { stack, queue } = processItemsWithStackQueue(word);

    // Compare the stack and queue to check for a palindrome
    if (compareStackQueue(stack, queue)) {
      console.log(`${word} is a palindrome`);
      palendromes.push(word)
    } else {
      //console.log(`${word} is not a palindrome`);
    }
  };

//3rd bring the stack and queue back to this file where itll be compared, if its a palendrome then itll be printed and added to an array
function compareStackQueue(stack: Stack, queue: Queue): boolean {
while (!stack.isEmpty() && !queue.isEmpty()) {
    if (stack.pop() !== queue.dequeue()) {
    return false;
    }
}
    return true;
}

//4th pray
makeSureIDidThisCorrectly(palendromes);
function makeSureIDidThisCorrectly(palendromes: string | any[]){
    if (palendromes.length === 15){ //there are 15 palendromes in magicitems.txt
        console.log("oh my god it actually works")
    }else{
        console.log("sleep is totally overrated anyway")
    }
}
*/ 
