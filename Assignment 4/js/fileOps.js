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
exports.getSpiceData = getSpiceData;
const fs = __importStar(require("fs"));
function getGraphData(filename) {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    const graphs = [];
    let currentVertices = [];
    let currentEdges = [];
    for (const line of data) {
        // Skip comments and empty lines
        if (line.trim().startsWith('--') || line.trim() === '')
            continue;
        // Split on spaces and filter out empty strings
        const parts = line.trim().split(/\s+/).filter(Boolean);
        if (parts[0] === 'new' && parts[1] === 'graph') {
            if (currentVertices.length > 0 || currentEdges.length > 0) {
                graphs.push({
                    vertices: [...currentVertices],
                    edges: [...currentEdges]
                });
            }
            currentVertices = [];
            currentEdges = [];
        }
        else if (parts[0] === 'add' && parts[1] === 'vertex') {
            const vertex = parseInt(parts[2], 10);
            if (!isNaN(vertex) && !currentVertices.includes(vertex)) {
                currentVertices.push(vertex);
            }
        }
        else if (parts[0] === 'add' && parts[1] === 'edge') {
            // Handle edge lines like "add edge 2 - 3 5"
            const allNumbers = parts
                .filter(part => part !== '-' && part !== 'add' && part !== 'edge')
                .map(num => parseInt(num, 10))
                .filter(num => !isNaN(num));
            if (allNumbers.length >= 3) {
                const [from, to, weight] = allNumbers;
                currentEdges.push([from, to, weight]);
            }
        }
    }
    // Don't forget the last graph
    if (currentVertices.length > 0 || currentEdges.length > 0) {
        graphs.push({
            vertices: [...currentVertices],
            edges: [...currentEdges]
        });
    }
    return graphs;
}
function getSpiceData(filename) {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    const spices = [];
    const knapsacks = [];
    for (const line of data) {
        if (line.trim().startsWith('--') || line.trim() === '')
            continue;
        if (line.includes('spice name')) {
            // spice line
            const parts = line.split(';').map(part => part.trim());
            const name = parts[0].split('=')[1].trim();
            const totalPrice = parseFloat(parts[1].split('=')[1]);
            const quantity = parseInt(parts[2].split('=')[1]);
            spices.push({ name, totalPrice, quantity });
        }
        else if (line.includes('knapsack capacity')) {
            // knapsack line
            const capacity = parseInt(line.split('=')[1]);
            knapsacks.push(capacity);
        }
    }
    spices.forEach(spice => {
        spice.unitPrice = spice.totalPrice / spice.quantity;
    });
    // Sort spices by unit price in descending order
    spices.sort((a, b) => (b.unitPrice || 0) - (a.unitPrice || 0));
    return { spices, knapsacks };
}
