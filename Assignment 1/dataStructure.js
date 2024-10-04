"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processItemsWithStackQueue = exports.Queue = exports.Stack = void 0;
//needs cleaning badly not even sure it works. Edit: It works!
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
    // FIRST IN 
    push(data) {
        const newNode = new node(data);
        newNode.next = this.top;
        this.top = newNode;
    }
    // FIRST OUT
    pop() {
        if (this.top === null)
            return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.data;
    }
    isEmpty() {
        if (this.top === null) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Stack = Stack;
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    //LAST IN
    enqueue(data) {
        const newNode = new node(data);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    //FIRST OUT
    dequeue() {
        if (this.front === null)
            return null; // If queue is empty, then... its empty
        const dequeuedNode = this.front;
        this.front = this.front.next;
        if (this.front === null)
            this.rear = null;
        return dequeuedNode.data;
    }
    isEmpty() {
        if (this.front === null) {
            return true;
        }
        else
            return false;
    }
}
exports.Queue = Queue;
// Refer to 3rd step on index.ts (line 27)
function processItemsWithStackQueue(word) {
    const stack = new Stack();
    const queue = new Queue();
    // Split the word into individual characters and process each letter
    for (const letter of word) {
        stack.push(letter);
        queue.enqueue(letter);
    }
    return { stack, queue };
}
exports.processItemsWithStackQueue = processItemsWithStackQueue;
