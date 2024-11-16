"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMatrix = toMatrix;
exports.toAdjList = toAdjList;
exports.dfs = dfs;
exports.bfs = bfs;
// Convert to adjacency matrix
function toMatrix(graph) {
    const vertices = graph.vertices;
    const vertexIndexMap = new Map();
    vertices.forEach((vertex, index) => vertexIndexMap.set(vertex, index));
    const size = vertices.length;
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));
    graph.edges.forEach(([v1, v2]) => {
        const i = vertexIndexMap.get(v1);
        const j = vertexIndexMap.get(v2);
        if (i === undefined || j === undefined) {
            console.warn(`Invalid edge detected: ${v1} - ${v2}`);
        }
        else {
            matrix[i][j] = 1;
            matrix[j][i] = 1;
        }
    });
    return matrix;
}
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
// DFS (Depth First Search) Traversal
function dfs(graph, start, visited = new Set()) {
    console.log(start); // Print vertex ID
    visited.add(start);
    // Visit all the unvisited neighbors
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
// BFS (Breadth First Search) Traversal
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex); // Print vertex ID
        // Visit all unvisited neighbors
        for (const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
