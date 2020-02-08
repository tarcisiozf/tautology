class ListIterator {
    constructor(value) {
        this.position = 0
        this.value = value
    }

    rewind() {
        this.position = 0
    }

    current() {
        return this.value[this.position]
    }

    peak() {
        return this.value[this.position + 1]
    }

    key() {
        return this.position
    }

    next() {
        return this.value[this.position++]
    }

    valid() {
        return this.position < this.value.length
    }
}

module.exports = ListIterator
