"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOps_1 = require("./fileOps");
const filepath = 'magicitems.txt';
const items = (0, fileOps_1.readFileToArray)(filepath);
console.log(items);
