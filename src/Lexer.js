const ListIterator = require('./ListIterator')

const isWhiteSpace = (char) => {
    return char.match(/^\s$/)
}

const analyse = (input) => {
    const tokens = []

    for (const it = new ListIterator(input); it.valid(); it.next()) {
        const char = it.current()

        if (isWhiteSpace(char)) {
            continue
        }
    }

    return tokens
}

module.exports = {
    analyse
}
