import { getGraphData, getSpiceData } from "./fileOps"
import { Graph } from "./fileOps"
import { bellmanFord } from "./bellmanFord"
import * as spice from "./spice" 
// 1 modify graph maker from assignment 3 to accept directed and weighted graphs

// 2 modify fileOps to take in directed an weighted graphs, then take in graphs2
const filename = './files/graphs2.txt';
const spicefilename = './files/spice.txt';

const graphData: Graph[] = getGraphData(filename);

// 3 create a linked object orientation for each graph
graphData.forEach((graph, index) => {
    console.log(`\nProcessing Graph #${index + 1}`);

// 4 Run Bellman Ford algorithm 
    const source = 1;
    const { distances, hasNegativeCycle, getPath } = bellmanFord(graph, source);
    
    console.log(`SSSP Results for Source Vertex ${source}:`);
    graph.vertices.forEach(vertex => {
        if (vertex === source) return;
        
        const distance = distances.get(vertex);
        const path = getPath(vertex);
        console.log(`${source} --> ${vertex} cost is ${distance}; path: ${path.join(' --> ')}`);
    });
    if (hasNegativeCycle) {
        console.log('Warning: Graph contains negative cycles!');
    }
});

// Part 5 run knapsack to gather the spice from arrakis 
const { spices, knapsacks } = getSpiceData(spicefilename);

// Process each knapsack
knapsacks.forEach(capacity => {
    const filledKnapsack = spice.solveFractionalKnapsack(spices, capacity);
    console.log(spice.formatKnapsackOutput(filledKnapsack));
});
