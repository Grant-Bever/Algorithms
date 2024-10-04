"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
//Knuth shuffle
//Works by randomly selecting items from the array and swaps it into a "shuffled zone" 
function shuffle(items) {
    for (let i = items.length; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}
exports.shuffle = shuffle;
