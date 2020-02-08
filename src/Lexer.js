const ListIterator = require('./ListIterator')

const isWhiteSpace = (char) => {
    if (char === undefined) return false
    return char.match(/^\s$/)
}

const analyse = (input) => {
    const tokens = []

    for (const iterator = new ListIterator(input); iterator.valid(); iterator.next()) {
        const char = iterator.current()

        if (isWhiteSpace(char)) {
            continue
        }
    }

    return tokens
}

module.exports = {
    analyse
}
