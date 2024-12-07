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
const fileOps_1 = require("./fileOps");
const bellmanFord_1 = require("./bellmanFord");
const spice = __importStar(require("./spice"));
// 1 modify graph maker from assignment 3 to accept directed and weighted graphs
// 2 modify fileOps to take in directed an weighted graphs, then take in graphs2
const filename = './files/graphs2.txt';
const spicefilename = './files/spice.txt';
const graphData = (0, fileOps_1.getGraphData)(filename);
// 3 create a linked object orientation for each graph
graphData.forEach((graph, index) => {
    console.log(`\nProcessing Graph #${index + 1}`);
    // 4 Run Bellman Ford algorithm 
    const source = 1;
    const { distances, hasNegativeCycle, getPath } = (0, bellmanFord_1.bellmanFord)(graph, source);
    console.log(`SSSP Results for Source Vertex ${source}:`);
    graph.vertices.forEach(vertex => {
        if (vertex === source)
            return;
        const distance = distances.get(vertex);
        const path = getPath(vertex);
        console.log(`${source} --> ${vertex} cost is ${distance}; path: ${path.join(' --> ')}`);
    });
    if (hasNegativeCycle) {
        console.log('Warning: Graph contains negative cycles!');
    }
});
const { spices, knapsacks } = (0, fileOps_1.getSpiceData)(spicefilename);
// Process each knapsack
knapsacks.forEach(capacity => {
    const filledKnapsack = spice.solveFractionalKnapsack(spices, capacity);
    console.log(spice.formatKnapsackOutput(filledKnapsack));
});
