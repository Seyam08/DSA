class Queue {
  items: any[];

  constructor() {
    this.items = [];
  }

  enqueue(item: any) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    return this.items.toString();
  }

  peak() {
    if (this.items.length > 0) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }
}

const firstQueue = new Queue();

console.log(firstQueue.isEmpty());
firstQueue.enqueue(3);
firstQueue.enqueue(32);
firstQueue.enqueue(53);
firstQueue.enqueue(31);
console.log(firstQueue.isEmpty());
console.log(firstQueue.print());
console.log(firstQueue.dequeue());
console.log(firstQueue.print());
console.log(firstQueue.peak());
console.log(firstQueue.size());
