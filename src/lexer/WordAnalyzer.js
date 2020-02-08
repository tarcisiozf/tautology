const { WORD } = require('./TokenTypes')

const check = (char) => {
    if (char === undefined) return false
    return char.match(/^\w$/)
}

const extractWord = (iterator) => {
    const word = []

    do {
        word.push(iterator.current())
        iterator.next()
    } while (check(iterator.current()))

    return word.join('')
}

const transform = (iterator, tokens) => {
    const word = extractWord(iterator)

    tokens.push({
        type: WORD,
        value: word
    })
}

module.exports = {
    check,
    transform
}
