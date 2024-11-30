export interface Graph {
    vertices: number[];
    edges: [number, number][];
}

export interface AdjList {
    [vertex: number]: number[];
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