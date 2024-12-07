export interface Graph {
    vertices: number[];
    edges: [number, number, number][]; // [from, to, weight]
}

export interface AdjList {
    [vertex: number]: { to: number; weight: number }[];
}

export function toAdjList(graph: Graph): AdjList {
    const adjList: AdjList = {};
    graph.vertices.forEach(vertex => adjList[vertex] = []);
    graph.edges.forEach(([from, to, weight]) => {
        adjList[from].push({ to, weight });
    });
    return adjList;
}
