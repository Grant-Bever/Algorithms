"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAdjList = toAdjList;
// Convert to adjacency list
function toAdjList(graph) {
    const adjList = {};
    graph.vertices.forEach(vertex => (adjList[vertex] = []));
    graph.edges.forEach(([from, to, weight]) => {
        adjList[from].push({ to, weight });
    });
    return adjList;
}
