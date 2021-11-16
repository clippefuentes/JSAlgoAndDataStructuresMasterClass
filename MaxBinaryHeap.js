class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.valuess.length - 1;
        const element = this.values[idx]
        while(idx > 0) {
            let parentInd = Math.floor((idx-1)/2) 
            let parent = this.values[parentInd]
            if (parent >= element) break;
            this.values[parentInd] = element
            this.values[idx] = parent;
            idx = parentIdx
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        return max
    }
}