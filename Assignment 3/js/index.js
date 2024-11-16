"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Part 1 Take in graphs1, 
const fileOps_1 = require("./fileOps");
const makeGraphs_1 = require("./makeGraphs");
const filename = './files/graphs1.txt';
const graphs = (0, fileOps_1.getGraphData)(filename);
//Part 2 Use text in graphs 2 and use "new graph", "add vertex ", and "add edge"
graphs.forEach((graph, index) => {
    console.log(`Graph ${index + 1}:`);
    console.log('Vertices:', graph.vertices);
    console.log('Edges:', graph.edges);
    // Create different representations
    const matrix = (0, makeGraphs_1.toMatrix)(graph);
    const adjList = (0, makeGraphs_1.toAdjList)(graph);
    // Print matrix
    console.log('Matrix Representation:');
    matrix.forEach(row => console.log(row.join(' ')));
    // Print adjacency list
    console.log('Adjacency List Representation:');
    Object.entries(adjList).forEach(([vertex, neighbors]) => {
        console.log(`${vertex}: ${neighbors.join(', ')}`);
    });
    console.log('-------------------------');
});
//Part 3 use it to create a matrix, adjacency list, and Linked objects for each graph
//Part 4 Run a deapth first and breadth first traversal on the linked objects
