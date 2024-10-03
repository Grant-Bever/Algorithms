//needs cleaning badly not even sure it works

class node {
    data: string;
    next: node | null;
  
    constructor(data: string) {
      this.data = data;
      this.next = null;
    }
  }

//reminder to decide if I even need the export here
//probably best to do that work here then send final product to index for comparrison. 
export class Stack {
  top: node | null;
 
  constructor() {
    this.top = null;
    }
    // REMINDER FIRST IN FIRST OUT!!!!
    // Push a new element to the top of the stack
  push(data: string): void {
    const newNode = new node(data);
    newNode.next = this.top;
    this.top = newNode;
    }
  
  pop(): string | null {
    if (this.top === null) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode.data;
    }
  
  isEmpty(): boolean {
    return this.top === null;
    }
  }

// refer to line 13 and 14 for my export confusion
export class Queue {
  front: node | null; 
  rear: node | null; 

  constructor() {
    this.front = null;
    this.rear = null; //probably going to give an error
  }
  // REMINDER LAST IN FIRST OUT
  // Add a new string to the rear of the queue
  enqueue(data: string): void {
    const newNode = new node(data);
    if (this.rear === null) {        
      this.front = this.rear = newNode; 
    } else {
      this.rear.next = newNode;      
      this.rear = newNode;           
    }
  }

  dequeue(): string | null {
    if (this.front === null) return null; // If queue is empty, return null
    const dequeuedNode = this.front;
    this.front = this.front.next;         
    if (this.front === null) this.rear = null; 
    return dequeuedNode.data;             
  }

  isEmpty(): boolean {
    return this.front === null; // Return true if there's no front node
  }
}
  