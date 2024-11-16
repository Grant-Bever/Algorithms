//Part 1 Take in graphs1, 
import { getGraphData, getItems } from './fileOps';
import { toMatrix, toAdjList, Matrix, AdjList, dfs, bfs } from './makeGraphs';
import { BinarySearchTree } from './binarySearchTree';

const graphFile = './files/graphs1.txt'
const itemFile = './files/magicitems.txt'

//Part 2 Use text in graphs 2 and use "new graph", "add vertex ", and "add edge"

const graphs = getGraphData(graphFile);
const items = getItems(itemFile)

//Part 3 use it to create a matrix, adjacency list, and Linked objects for each graph
graphs.forEach((graph, index) => {
    console.log(`Graph ${index + 1}:`);
    console.log('Vertices:', graph.vertices);
    console.log('Edges:', graph.edges);

    // Create different representations
    const matrix: Matrix = toMatrix(graph);
    const adjList: AdjList = toAdjList(graph);

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
    dfs(adjList, graph.vertices[0]); 

    // Run Breadth First Search (BFS) starting from the first vertex
    console.log('BFS Traversal:');
    bfs(adjList, graph.vertices[0]);
    console.log('-------------------------');
});

//Part 5 create a Binary Search Tree
const bst = new BinarySearchTree();

// Insert each item into the BST, printing the path along the way
items.forEach(item => {
    bst.insert(item);
});

//Part 6 Print the entire tree using in-order traversal
console.log("\nIn-order Traversal of the BST:");
bst.inOrderTraversal();
