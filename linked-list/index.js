class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node(value)
        // move pointer forward i.e point last null address to new Node
        this.tail.next = newNode;
        // Set it to last elmeent
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        // Store previous pointer reference
        let prevHead = this.head;
        //Our new Node
        let newNode = new Node(value)
        newNode.next = prevHead;
        // Update pointer to new Node reference
        this.head = newNode;
        // Increase node length
        this.length++;
    }
}
const myLinkedList = new LinkedList(5);
myLinkedList.append(16);
myLinkedList.append(18);
myLinkedList.prepend(2);

