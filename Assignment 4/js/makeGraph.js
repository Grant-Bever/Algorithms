"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAdjList = toAdjList;
// Convert to adjacency list
function toAdjList(graph) {
    const adjList = {};
    graph.vertices.forEach(vertex => (adjList[vertex] = []));
    graph.edges.forEach(([v1, v2]) => {
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    });
    return adjList;
}
