"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.Stack = void 0;
class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    // Push a new element to the top of the stack
    push(data) {
        const newNode = new node(data);
        newNode.next = this.top;
        this.top = newNode;
    }
    // Pop the top element from the stack
    pop() {
        if (this.top === null)
            return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.data;
    }
    // Check if the stack is empty
    isEmpty() {
        return this.top === null;
    }
}
exports.Stack = Stack;
class Queue {
    constructor() {
        this.front = this.rear = null; // The queue starts empty
    }
    // Add a new string to the rear of the queue
    enqueue(data) {
        const newNode = new node(data);
        if (this.rear === null) { // If queue is empty
            this.front = this.rear = newNode; // The new node is both front and rear
        }
        else {
            this.rear.next = newNode; // Link current rear to the new node
            this.rear = newNode; // Set the new node as the rear
        }
    }
    // Remove and return the front element from the queue
    dequeue() {
        if (this.front === null)
            return null; // If queue is empty, return null
        const dequeuedNode = this.front;
        this.front = this.front.next; // Move front to the next node
        if (this.front === null)
            this.rear = null; // If queue is now empty
        return dequeuedNode.data; // Return the dequeued data
    }
    // Check if the queue is empty
    isEmpty() {
        return this.front === null; // Return true if there's no front node
    }
}
exports.Queue = Queue;
