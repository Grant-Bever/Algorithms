import { readFileToArrayDataStructures } from './fileOps';
import { readFileToArraySort } from './fileOps';
import { processItemsWithStackQueue, Queue, Stack } from './dataStructure'
import { shuffle } from './shuffle';
import { selectionSort } from './selectSort';
import { insertionSort } from './insertSort';
import { mergeSort } from './mergeSort';
import { mergeComparison } from './mergeSort';
import { quickSort } from './quickSort';
import { qsComparison } from './quickSort';


// Hello Prof. Labouseur if you run npm start into the terminal as the code is it will show you the palendromes and the number of comparisons for the 4 sorts but it will not print the sorted arrays.
// if you would like to completely fill up the screen with the sorted arrays so you can check if it works. Set the boolean below to true (you may have to run tsc before a subsequent npm start)

let fillUpTerminal:boolean = false

const filepath = './src/text/magicItems.txt'
//1st bring magic items from file into array whilst cleaning it up
const dataItems = readFileToArrayDataStructures(filepath);      //two seperate arrays, this one is meant for the palendromes, I decided to make two since I wanted spaces and caps for the sort
const sortItems = readFileToArraySort(filepath); 

let palendromes: string[] = []
//2nd send those items into the dataStructures, where itll make each letter a node then push it into the stack / queue
for (let i = 0; i < dataItems.length; i++) {
    const word = dataItems[i];
    const { stack, queue } = processItemsWithStackQueue(word);  

    // Compare the stack and queue to check for a palindrome
    if (compareStackQueue(stack, queue)) {
      console.log(`${word} is a palindrome`);
      palendromes.push(word)
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
if (palendromes.length === 15){ //there are 15 palendromes in magicitems.txt
    console.log("All 15 palendromes are accounted for!\n\nNow for the sorting portion")
}else{
    console.log("It appears there are some technical difficulties")
}

// PART 2 SORTING

const shuffledItems = shuffle(sortItems)
if (sortItems.length === shuffledItems.length){
    console.log("all " + shuffledItems.length + " items are shuffled\nReady for sorting!")
}

let selectSortedItems = selectionSort(shuffle(shuffledItems))    // SELECT SORT DRIVER CODE
if (fillUpTerminal) {
    console.log(selectSortedItems);
}
let insertionSortedItems = insertionSort(shuffle(shuffledItems))   // INSERTION SORT DRIVER CODE
if (fillUpTerminal) {
    console.log(insertionSortedItems)}

let mergeSortedItems = mergeSort(shuffle(shuffledItems))         // MERGE SORT DRIVER CODE
mergeComparison()

if (fillUpTerminal) {
    console.log(mergeSortedItems)}

let quickSortedItems = quickSort(shuffle(shuffledItems))         // QUICK SORT DRIVER CODE
qsComparison()
if (fillUpTerminal) {
    console.log(quickSortedItems)}
