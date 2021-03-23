class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    let qElement = new QElement(element, priority);
    let contain = false;
    for(let i=0; i<this.items.length; i++) {
      if(this.items[i].priority > priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if(!contain) {
      this.items.push(qElement);
    }
  }
  dequeue() {
    if(this.isEmpty()) {
      return 'Queue is Empty';
    }
    return this.items.shift();
  }
  front() {
    if(this.isEmpty()) {
      return 'Queue is Empty';
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printPQueue() 
  { 
      var str = ""; 
      for (var i = 0; i < this.items.length; i++) 
          str += this.items[i].element + " "; 
      return str; 
  } 
}

var priorityQueue = new PriorityQueue(); 

priorityQueue.enqueue("Sumit", 2); 
priorityQueue.enqueue("Gourav", 1); 
priorityQueue.enqueue("Piyush", 1); 
priorityQueue.enqueue("Sunny", 2); 
priorityQueue.enqueue("Sheru", 3); 
  
// prints [Gourav Piyush Sumit Sunny Sheru] 
console.log(priorityQueue.printPQueue());