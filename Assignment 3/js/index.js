"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Part 1 Take in graphs1, 
const fileOps_1 = require("./fileOps");
const makeGraphs_1 = require("./makeGraphs");
const binarySearchTree_1 = require("./binarySearchTree");
const graphFile = './files/graphs1.txt';
const itemFile = './files/magicitems.txt';
//Part 2 Use text in graphs 2 and use "new graph", "add vertex ", and "add edge"
const graphs = (0, fileOps_1.getGraphData)(graphFile);
const items = (0, fileOps_1.getItems)(itemFile);
//Part 3 use it to create a matrix, adjacency list, and Linked objects for each graph
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
    //Part 4 Run a deapth first and breadth first traversal on the linked objects
    // Run Depth First Search (DFS) starting from the first vertex
    console.log('DFS Traversal:');
    (0, makeGraphs_1.dfs)(adjList, graph.vertices[0]);
    // Run Breadth First Search (BFS) starting from the first vertex
    console.log('BFS Traversal:');
    (0, makeGraphs_1.bfs)(adjList, graph.vertices[0]);
    console.log('-------------------------');
});
//Part 5 create a Binary Search Tree
const bst = new binarySearchTree_1.BinarySearchTree();
// Insert each item into the BST
items.forEach(item => {
    bst.insert(item);
});
// Print the entire tree using in-order traversal
console.log("\nIn-order Traversal of the BST:");
bst.inOrderTraversal();
