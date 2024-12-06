export interface Graph {
    vertices: number[];
    edges: [number, number, number][];
}

export interface AdjList {
    [vertex: number]: { to: number; weight: number }[];
}


// Convert to adjacency list
export function toAdjList(graph: Graph): AdjList {
    const adjList: AdjList = {};
    graph.vertices.forEach(vertex => (adjList[vertex] = []));
    
    graph.edges.forEach(([from, to, weight]) => {
        adjList[from].push({ to, weight });
    });
    return adjList;
}