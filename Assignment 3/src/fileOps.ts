import * as fs from 'fs';

export function getGraphData(filename: string) {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    const graphs: { vertices: number[]; edges: [number, number][] }[] = [];
    let currentVertices: number[] = [];
    let currentEdges: [number, number][] = [];

    for (const line of data) {
        const parts = line.trim().split(' ');

        if (parts[0] === '--') continue; // Ignore comments
        else if (parts[0] === 'new' && parts[1] === 'graph') {
            // Save and reset for new graph 
            // need to add end of file 
            if (currentVertices.length > 0 || currentEdges.length > 0) {
                graphs.push({ vertices: currentVertices, edges: currentEdges });
            }
            currentVertices = [];
            currentEdges = [];
        } else if (parts[0] === 'add' && parts[1] === 'vertex') {
            currentVertices.push(parseInt(parts[2]));
        } else if (parts[0] === 'add' && parts[1] === 'edge') {
            currentEdges.push([parseInt(parts[2]), parseInt(parts[4])]);
        }
    }

    // Push the final graph
    if (currentVertices.length > 0 || currentEdges.length > 0) {
        graphs.push({ vertices: currentVertices, edges: currentEdges });
    }

    return graphs;
}
