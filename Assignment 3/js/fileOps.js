"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphData = getGraphData;
exports.getItems = getItems;
const fs = __importStar(require("fs"));
// Reads the data from graphs1 but works for other files of the same format
function getGraphData(filename) {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    const graphs = [];
    let currentVertices = [];
    let currentEdges = [];
    for (const line of data) {
        const parts = line.trim().split(' ');
        if (parts[0] === '--')
            continue; // Ignore comments
        if (parts[0] === 'new' && parts[1] === 'graph') {
            // Save and reset for new graph 
            if (currentVertices.length > 0 || currentEdges.length > 0) {
                graphs.push({ vertices: currentVertices, edges: currentEdges });
            }
            currentVertices = [];
            currentEdges = [];
        }
        if (parts[0] === 'add' && parts[1] === 'vertex') {
            const vertex = parseInt(parts[2], 10);
            if (!currentVertices.includes(vertex)) {
                currentVertices.push(vertex);
            }
        }
        if (parts[0] === 'add' && parts[1] === 'edge') {
            const v1 = parseInt(parts[2], 10);
            const v2 = parseInt(parts[4], 10);
            currentEdges.push([v1, v2]);
        }
    }
    // Push the final graph
    if (currentVertices.length > 0 || currentEdges.length > 0) {
        graphs.push({ vertices: currentVertices, edges: currentEdges });
    }
    return graphs;
}
// Reads the data from magicitems.txt (or similar files)
function getItems(filename) {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    return data.map(line => line.trim()).filter(line => line.length > 0);
}
