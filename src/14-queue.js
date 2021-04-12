const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.newArr = [];
    this.first = null;
    this.lost = null;
  }

  get size() {
    return this.newArr.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    this.newArr.push(element);

    if (this.first) {
      this.lost.next = newNode;
      this.lost = newNode;
    } else {
      this.first = newNode;
      this.lost = newNode;
    }
  }

  dequeue() {
    this.first = this.first.next;
    return this.newArr.shift();
  }
}

module.exports = Queue;
