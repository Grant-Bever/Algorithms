//Part 1 Take in graphs1, 
import { getGraphData } from './fileOps';


const filename = './files/graphs1.txt'

const graphs = getGraphData(filename);
    graphs.forEach((graph, index) => {
        console.log(`Graph ${index + 1}:`);
        console.log('Vertices:', graph.vertices);
        console.log('Edges:', graph.edges);
        console.log('-------------------------');
    });
//Part 2 Use text in graphs 2 and use "new graph", "add vertex ", and "add edge"

//Part 3 use it to create a matrix, adjacency list, and Linked objects for each graph

//Part 4 Run a deapth first and breadth first traversal on the linked objects