import { Graph } from './makeGraph';
import * as fs from 'fs';

export function getGraphData(filename: string): Graph[] {
    const data = fs.readFileSync(filename, 'utf-8').split('\n');
    const graphs: Graph[] = [];
    let currentVertices: number[] = [];
    let currentEdges: [number, number, number][] = [];

    for (const line of data) {
        // Skip comments and empty lines
        if (line.trim().startsWith('--') || line.trim() === '') continue;

        // Split on spaces and filter out empty strings
        const parts = line.trim().split(/\s+/).filter(Boolean);

        if (parts[0] === 'new' && parts[1] === 'graph') {
            if (currentVertices.length > 0 || currentEdges.length > 0) {
                graphs.push({ 
                    vertices: [...currentVertices], 
                    edges: [...currentEdges] 
                });
            }
            currentVertices = [];
            currentEdges = [];
        }
        else if (parts[0] === 'add' && parts[1] === 'vertex') {
            const vertex = parseInt(parts[2], 10);
            if (!isNaN(vertex) && !currentVertices.includes(vertex)) {
                currentVertices.push(vertex);
            }
        }
        else if (parts[0] === 'add' && parts[1] === 'edge') {
            // Handle edge lines like "add edge 2 - 3 5"
            const allNumbers = parts
                .filter(part => part !== '-' && part !== 'add' && part !== 'edge')
                .map(num => parseInt(num, 10))
                .filter(num => !isNaN(num));

            if (allNumbers.length >= 3) {
                const [from, to, weight] = allNumbers;
                currentEdges.push([from, to, weight]);
            }
        }
    }
    // Don't forget the last graph
    if (currentVertices.length > 0 || currentEdges.length > 0) {
        graphs.push({ 
            vertices: [...currentVertices], 
            edges: [...currentEdges] 
        });
    }
    return graphs;
}