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

    pop() {
        if (!this.head) {
            return undefined
        } else {
            let current = this.head
            let newTail = current 
            while (current.next) {
                newTail = current
                current = current.next 
            }
            this.tail.next = null
            this.tail = newTail
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
                return this.head
            }
            return current
        }
    }

    shift() {
        if (!this.head) return undefined;
        const currentHead = this.head
        const newHead = this.head.next
        this.head = newHead
        this.length--
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            const currentHead = this.head
            this.head = newNode
            this.head.next = currentHead
            // or 
            //  newNode.next = this.head 
            //  this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        } else {
            let counter = 0;
            let currentHead = this.head
            while (counter < index) {
            // or while (counter !== index)
                currentHead = currentHead.next
                counter++
            }
            return currentHead
        }
    }

    set(val, index) {
        const getNode = this.get(index)
        if (!getNode) {
            return false
        } else {
            getNode.value = val
            return true
        }
    }

    insert(val, index) {
        if (index < 0 || index > this.length) { 
            return false
        } else {
            if (index === this.length) {
                return !!this.push(val)
            } else if (index === 0) {
                return !!this.unshift(val)
            } else {
                const newNode = new Node(val)
                const currentPrevNode = this.get(index - 1)
                const temp = currentPrevNode.next
                currentPrevNode.next = newNode
                newNode.next = temp
                this.length++
                return true
            }
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) { 
            return undefined
        } else if (index === this.length - 1) {
            return this.pop()
        } else if (index === 0) {
            return this.shift()
        } else {
            const currentPrevNode = this.get(index - 1)
            const temp = currentPrevNode.next.next
            currentPrevNode.next = temp;
            // or
            // const removed = currentPrevNode.next
            // currentPrevNode.next = removed.next
        }
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next = null
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}