class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next  = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) {
            return undefined
        } else {
            const currentTail = this.tail
            if(this.length === 1) {
                this.tail = null
                this.head = null
            } else {
                this.tail = currentTail.prev;
                this.tail.next = null;  
                currentTail.prev = null;
            }
            this.length--
            return currentTail
        }
    }

    shift() {
        if(!this.head) {
            return undefined
        } else {
            const currentHead = this.head
            if (this.length === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null                
            }
            currentHead.next = null
            this.length--
            return currentHead
        }
    }

    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index > this.length) {
            return null
        } else if (index <= this.length / 2) {
            let count = 0
            let current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
            return current
        } else {
            let count = this.length - 1
            let current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
            return current
        }
    }

    set(index, val) {
        const node = this.get(index)
        if (node) {
            node.val = val
            return true 
        } else {
            return false
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        } else {
            if (index === 0) {
                return !!this.unshift(val)
            } else if (index === this.length) {
                return !!this.push(val)
            } else {
                const prevNode = this.get(index - 1)
                const nextNode = prevNode.next
                const newNode = new Node(val)
                prevNode.next = newNode
                newNode.prev = prevNode
                newNode.next = nextNode
                nextNode.prev = newNode
                this.length++
                return true
            }
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false
        } else {
            if (index === 0) {
                return this.shift()
            } else if (index === this.length-1) {
                return this.pop()
            } else {
                const prevNode = this.get(index - 1)
                const removedNode = prevNode.next
                const nextNode = removedNode.next
                prevNode.next = nextNode
                nextNode.prev = prevNode
                removedNode.next = null
                removedNode.prev = null
                this.length--
                return removedNode
            }
        }
    }

    BFS() {
        let node = this.root
        const data = []
        const queue = []
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node)
            if (node.left) queue.push(node)
            if (node.right) queue.push(node.right)
        }
        return data
    }
}