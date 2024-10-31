"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOps_1 = require("./fileOps");
const quickSort_1 = require("./quickSort");
const pick_1 = require("./pick");
const linearSearch_1 = require("./linearSearch");
const binarySearch_1 = require("./binarySearch");
//First step - sort items 
//Second step - pick 42 items then search for them 
const filepath = './src/magicItems.txt';
const magicitems = (0, fileOps_1.readFileToArray)(filepath);
let sortedItems = (0, quickSort_1.quickSort)(magicitems);
let picks = (0, pick_1.pick)(sortedItems);
console.log("Performing Linear Search:");
(0, linearSearch_1.linearSearch)(sortedItems, picks);
(0, binarySearch_1.binarySearch)(sortedItems, picks);
