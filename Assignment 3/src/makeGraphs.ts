export interface Graph {
    vertices: number[];
    edges: [number, number][];
}

export type Matrix = number[][];

export interface AdjList {
    [vertex: number]: number[];
}

// Convert to adjacency matrix
export function toMatrix(graph: { vertices: number[]; edges: [number, number][] }) {
    const vertices = graph.vertices;
    const vertexIndexMap = new Map<number, number>();
    vertices.forEach((vertex, index) => vertexIndexMap.set(vertex, index));

    const size = vertices.length;
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));

    graph.edges.forEach(([v1, v2]) => {
        const i = vertexIndexMap.get(v1);
        const j = vertexIndexMap.get(v2);

        if (i === undefined || j === undefined) {
            console.warn(`Invalid edge detected: ${v1} - ${v2}`);
        } else {
            matrix[i][j] = 1;
            matrix[j][i] = 1; 
        }
    });

    return matrix;
}

// Convert to adjacency list
export function toAdjList(graph: Graph): AdjList {
    const adjList: AdjList = {};
    graph.vertices.forEach(vertex => (adjList[vertex] = []));
    graph.edges.forEach(([v1, v2]) => {
        adjList[v1].push(v2);
        adjList[v2].push(v1); 
    });

    return adjList;
}
