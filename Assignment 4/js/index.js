"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOps_1 = require("./fileOps");
const makeGraph_1 = require("./makeGraph");
// 1 modify graph maker from assignment 3 to accept directed and weighted graphs
// 2 modify fileOps to take in directed an weighted graphs, then take in graphs2
const filename = './files/graphs2.txt';
const graphData = (0, fileOps_1.getGraphData)(filename);
// 3 create a linked object orientation for each graph
graphData.forEach((graph, index) => {
    console.log(`Processing Graph #${index + 1}`);
    // Convert to adjacency list
    const adjList = (0, makeGraph_1.toAdjList)(graph);
    console.log('Adjacency List:');
    for (const vertex in adjList) {
        console.log(`Vertex ${vertex}: ${adjList[vertex].join(', ')}`);
    }
});
// 4 run SSSP for each graph and outpit the results 
