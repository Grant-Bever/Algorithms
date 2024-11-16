import * as fs from 'fs';

export function getGraphData(filename: string) {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    const graphs: { vertices: number[]; edges: [number, number][] }[] = [];
    let currentVertices: number[] = [];
    let currentEdges: [number, number][] = [];

    for (const line of data) {
        const parts = line.trim().split(' ');

        if (parts[0] === '--') continue; // Ignore comments
            if (parts[0] === 'new' && parts[1] === 'graph') {
            // Save and reset for new graph 
            // need to add end of file 
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
            const v1 = parseInt(parts[2], 10);
            const v2 = parseInt(parts[4], 10);
            currentEdges.push([v1, v2]);
        }
    }

    // Push the final graph
    if (currentVertices.length > 0 || currentEdges.length > 0) {
        graphs.push({ vertices: currentVertices, edges: currentEdges });
    }

    return graphs;
}
