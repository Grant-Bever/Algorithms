"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOps_1 = require("./fileOps");
const fileOps_2 = require("./fileOps");
const dataStructure_1 = require("./dataStructure");
const shuffle_1 = require("./shuffle");
const selectSort_1 = require("./selectSort");
const insertSort_1 = require("./insertSort");
const mergeSort_1 = require("./mergeSort");
const mergeSort_2 = require("./mergeSort");
const quickSort_1 = require("./quickSort");
const quickSort_2 = require("./quickSort");
// Hello Prof. Labouseur if you run npm start into the terminal as the code is it will show you the palendromes and the number of comparisons for the 4 sorts but it will not print the sorted arrays.
// if you would like to completely fill up the screen with the sorted arrays so you can check if it works. Set the boolean below to true (you may have to run tsc before a subsequent npm start)
let fillUpTerminal = false;
const filepath = './src/text/magicItems.txt';
//1st bring magic items from file into array whilst cleaning it up
const dataItems = (0, fileOps_1.readFileToArrayDataStructures)(filepath); //two seperate arrays, this one is meant for the palendromes, I decided to make two since I wanted spaces and caps for the sort
const sortItems = (0, fileOps_2.readFileToArraySort)(filepath);
let palendromes = [];
//2nd send those items into the dataStructures, where itll make each letter a node then push it into the stack / queue
for (let i = 0; i < dataItems.length; i++) {
    const word = dataItems[i];
    const { stack, queue } = (0, dataStructure_1.processItemsWithStackQueue)(word);
    // Compare the stack and queue to check for a palindrome
    if (compareStackQueue(stack, queue)) {
        console.log(`${word} is a palindrome`);
        palendromes.push(word);
    }
}
;
//3rd bring the stack and queue back to this file where itll be compared, if its a palendrome then itll be printed and added to an array
function compareStackQueue(stack, queue) {
    while (!stack.isEmpty() && !queue.isEmpty()) {
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
    }
    return true;
}
//4th pray
if (palendromes.length === 15) { //there are 15 palendromes in magicitems.txt
    console.log("All 15 palendromes are accounted for!\n\nNow for the sorting portion");
}
else {
    console.log("It appears there are some technical difficulties");
}
// PART 2 SORTING
const shuffledItems = (0, shuffle_1.shuffle)(sortItems);
if (sortItems.length === shuffledItems.length) {
    console.log("all " + shuffledItems.length + " items are shuffled\nReady for sorting!");
}
let selectSortedItems = (0, selectSort_1.selectionSort)((0, shuffle_1.shuffle)(shuffledItems)); // SELECT SORT DRIVER CODE
if (fillUpTerminal) {
    console.log(selectSortedItems);
}
let insertionSortedItems = (0, insertSort_1.insertionSort)((0, shuffle_1.shuffle)(shuffledItems)); // INSERTION SORT DRIVER CODE
if (fillUpTerminal) {
    console.log(insertionSortedItems);
}
let mergeSortedItems = (0, mergeSort_1.mergeSort)((0, shuffle_1.shuffle)(shuffledItems)); // MERGE SORT DRIVER CODE
(0, mergeSort_2.mergeComparison)();
if (fillUpTerminal) {
    console.log(mergeSortedItems);
}
let quickSortedItems = (0, quickSort_1.quickSort)((0, shuffle_1.shuffle)(shuffledItems)); // QUICK SORT DRIVER CODE
(0, quickSort_2.qsComparison)();
if (fillUpTerminal) {
    console.log(quickSortedItems);
}
