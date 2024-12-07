"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOps_1 = require("./fileOps");
const bellmanFord_1 = require("./bellmanFord");
// 1 modify graph maker from assignment 3 to accept directed and weighted graphs
// 2 modify fileOps to take in directed an weighted graphs, then take in graphs2
const filename = './files/graphs2.txt';
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
