import { readFileToArray } from './fileOps';

//1st read items into array whilst cleaning them(make them readable)
const filepath = 'magicitems.txt'
const items = readFileToArray(filepath);
console.log(items);

//2nd send those items into the dataStructures, where itll make each letter a node then push it into the stack / queue
//3rd bring the stack and queue back to this file where itll be compared, if its a palendrome then itll be printed and added to an array
//4th check then length and contents of the array of palendromes (this file) for verification purposes
//5th make it comprehendable and fix it up.