class Node {
    constructor(val) {
        this.value = val;
        this.tail = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head 
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        length++;
        return this
    }
}