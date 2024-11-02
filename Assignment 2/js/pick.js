"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
function pick(eggs, numPicks = 42) {
    let basket = [];
    let availableEggs = [...eggs]; // Create a copy of the original array
    for (let i = 0; i < numPicks && availableEggs.length > 0; i++) {
        let num = Math.floor(Math.random() * availableEggs.length);
        basket.push(availableEggs[num]);
        availableEggs.splice(num, 1); // Remove from the copy only
    }
    return basket;
}
exports.pick = pick;
