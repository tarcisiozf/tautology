const ListIterator = require('./ListIterator')
const TokenTypes = require('./TokenTypes')

const isWhiteSpace = (char) => {
    if (char === undefined) return false
    return char.match(/^\s$/)
}

const isWordToken = (char) => {
    if (char === undefined) return false
    return char.match(/^\w$/)
}

const extractWord = (iterator) => {
    const word = []

    do {
        word.push(iterator.current())
        iterator.next()
    } while (isWordToken(iterator.current()))

    return word.join('')
}

const analyse = (input) => {
    const tokens = []

    for (const iterator = new ListIterator(input); iterator.valid(); iterator.next()) {
        const char = iterator.current()

        if (isWhiteSpace(char)) {
            continue
        }
        if (isWordToken(char)) {
            const word = extractWord(iterator)

            tokens.push({ type: TokenTypes.WORD, value: word })
        }
    }

    return tokens
}

module.exports = {
    analyse
}
