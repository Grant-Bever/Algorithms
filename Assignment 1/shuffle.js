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
    return items; //should I be using a better name than items? it feels reductive but its also not. Professor if you somehow stumble on this one strangly long comment that will probably only exist in this one commit what do you think? should i be more descriptive? i like how short and easy it is especially when i have to type it out all the time and at this point ive written items[] as the array of magic items for all of its applications so its too late now. Ive found that its better to make vars simple but make function names descript because its a good balance of making it readable for other but still suporting my style of coding where i feel like it matters most but id love an outside opinion.
}
exports.shuffle = shuffle;
