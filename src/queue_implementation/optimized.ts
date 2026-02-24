class Queue {
  items: Record<number, any>;
  head: number;
  tail: number;

  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item: any) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.head === this.tail) return null; // Queue is empty
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.tail - this.head === 0;
  }

  print() {
    console.log(this.items);
  }

  peak() {
    return this.items[this.head];
  }

  size() {
    return this.tail - this.head;
  }
}

const firstQueue = new Queue();

console.log(firstQueue.isEmpty());
firstQueue.enqueue(3);
firstQueue.enqueue(32);
firstQueue.enqueue(53);
firstQueue.enqueue(31);
console.log(firstQueue.isEmpty());
firstQueue.print();
console.log(firstQueue.dequeue());
firstQueue.print();
console.log(firstQueue.peak());
console.log(firstQueue.size());
