class node {
    data: string;
    next: node | null;
  
    constructor(data: string) {
      this.data = data;
      this.next = null;
    }
  }

export class Stack {
  top: node | null;
 
  constructor() {
    this.top = null;
  }

  // FIRST IN 
  push(data: string): void {
    const newNode = new node(data);
    newNode.next = this.top;
    this.top = newNode;
    }
  
  // FIRST OUT
  pop(): string | null {
    if (this.top === null) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode.data;
    }
  
  isEmpty(): boolean {
    if (this.top === null){
      return true
    }else{
      return false
    }
    }
  }

export class Queue {
  front: node | null; 
  rear: node | null; 

  constructor() {
    this.front = null;
    this.rear = null; 
  }
  //LAST IN
  enqueue(data: string): void {
    const newNode = new node(data);
    if (this.rear === null) {        
      this.front = this.rear = newNode; 
    } else {
      this.rear.next = newNode;      
      this.rear = newNode;           
    }
  }
  //FIRST OUT
  dequeue(): string | null {
    if (this.front === null) return null; // If queue is empty, then... its empty
    const dequeuedNode = this.front;
    this.front = this.front.next;         
    if (this.front === null) this.rear = null; 
    return dequeuedNode.data;             
  }

  isEmpty(): boolean {
    if (this.front === null){
      return true
    }else
    return false 
  }
}

// Refer to 3rd step on index.ts (line 27)
export function processItemsWithStackQueue(word: string): { stack: Stack, queue: Queue } {
  const stack = new Stack();
  const queue = new Queue();

  // Splits into letters and pushes and enqueues it
  for (const letter of word) {
    stack.push(letter);
    queue.enqueue(letter);
  }
  // back to index
  return { stack, queue };
}