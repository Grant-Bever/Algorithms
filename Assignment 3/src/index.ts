//Part 1 Take in graphs1, 
import { getGraphData } from './fileOps';
import { toMatrix, toAdjList, Matrix, AdjList, dfs, bfs } from './makeGraphs';

const filename = './files/graphs1.txt'

//Part 2 Use text in graphs 2 and use "new graph", "add vertex ", and "add edge"

const graphs = getGraphData(filename);

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
    // Run Depth First Search (DFS) starting from the first vertex
    console.log('DFS Traversal:');
    dfs(adjList, graph.vertices[0]); // Assuming the first vertex is a valid starting point

    // Run Breadth First Search (BFS) starting from the first vertex
    console.log('BFS Traversal:');
    bfs(adjList, graph.vertices[0]);
    console.log('-------------------------');
});


//Part 4 Run a deapth first and breadth first traversal on the linked objects
