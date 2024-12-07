import { Graph } from './makeGraph';

interface BellmanFordResult {
    distances: Map<number, number>;
    predecessors: Map<number, number | null>;
    hasNegativeCycle: boolean;
    getPath(target: number): number[];
}

export function bellmanFord(graph: Graph, source: number): BellmanFordResult {
    const distances = new Map<number, number>();
    const predecessors = new Map<number, number | null>();
    const vertices = graph.vertices;
    const edges = graph.edges;

    // Initialize distances and predecessors
    vertices.forEach(vertex => {
        distances.set(vertex, Infinity);
        predecessors.set(vertex, null);
    });
    distances.set(source, 0);
    // Relax edges |V| - 1 times
    for (let i = 0; i < vertices.length - 1; i++) {
        edges.forEach(([from, to, weight]) => {
            const distFrom = distances.get(from)!;
            const distTo = distances.get(to)!;
            
            if (distFrom !== Infinity && distFrom + weight < distTo) {
                distances.set(to, distFrom + weight);
                predecessors.set(to, from);
            }
        });
    }
    // Check for negative cycles
    let hasNegativeCycle = false;
    edges.forEach(([from, to, weight]) => {
        if (distances.get(from)! !== Infinity && 
            distances.get(from)! + weight < distances.get(to)!) {
            hasNegativeCycle = true;
        }
    });
    // Function to reconstruct path from source to target
    const getPath = (target: number): number[] => {
        const path: number[] = [];
        let current: number | null = target;
        
        if (distances.get(target) === Infinity) {
            return path;
        }
        
        while (current !== null) {
            path.unshift(current);
            current = predecessors.get(current)!;
            
            if (path.length > vertices.length) {
                console.warn('Possible cycle detected in path reconstruction');
                break;
            }
        }
        return path;
    };

    return {
        distances,
        predecessors,
        hasNegativeCycle,
        getPath
    };
}