//from assignment 3, needs modification
import * as fs from 'fs';
// Reads the data from graphs1 but works for other files of the same format

export interface Graph {
    vertices: number[];
    edges: [number, number, number][]; // [from, to, weight]
}
export function getGraphData(filename: string): Graph[] {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    const graphs: Graph[] = [];
    let currentVertices: number[] = [];
    let currentEdges: [number, number, number ][] = [];

    for (const line of data) {
        if (line.startsWith('--')) continue;

        if (line === '') {
            // End of current graph
            if (currentVertices.length > 0 || currentEdges.length > 0) {
                graphs.push({ vertices: currentVertices, edges: currentEdges });
                currentVertices = [];
                currentEdges = [];
            }
            continue;
        }

        const parts = line.trim().split(' ');

        if (parts[0] === 'new' && parts[1] === 'graph') {
            // Save and reset for new graph 
            if (currentVertices.length > 0 || currentEdges.length > 0) {
                graphs.push({ vertices: currentVertices, edges: currentEdges });
            }
            currentVertices = [];
            currentEdges = [];
        }
        if (parts[0] === 'add' && parts[1] === 'vertex') {
                const vertex = parseInt(parts[2], 10);
                if (!currentVertices.includes(vertex)) {
                    currentVertices.push(vertex);
                }
            }
        
        if (parts[0] === 'add' && parts[1] === 'edge') {
            const from = parseInt(parts[2], 10);
            const to = parseInt(parts[4], 10);
            const weight = parseInt(parts[5], 10);
            currentEdges.push([ from, to, weight ]);
        }
    }

    // Push the final graph
    if (currentVertices.length > 0 || currentEdges.length > 0) {
        graphs.push({ vertices: currentVertices, edges: currentEdges });
    }

    return graphs;
}