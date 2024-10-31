"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
function pick(eggs) {
    let basket = [];
    for (let i = 0; i < 42 && eggs.length > 0; i++) {
        let num = Math.floor(Math.random() * eggs.length);
        basket.push(eggs[num]);
        eggs.splice(num, 1);
    }
    return basket;
}
exports.pick = pick;
