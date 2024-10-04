"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
//Knuth shuffle
//Works by randomly selecting items from the array and swaps it into a "shuffled zone" thats at the end of the array
function shuffle(items) {
    for (let i = items.length - 1; i > 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //console.log(j);
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}
exports.shuffle = shuffle;
