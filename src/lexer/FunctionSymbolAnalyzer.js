const { FUNCTION_SYMBOL } = require('./TokenTypes')

const symbols = ['¬','~','∧','&','.','∨','+','⇒','→','↔','=','≡','⊕','≠','↑','|','↓']

const check = (char) => {
    return symbols.includes(char)
}

const transform = (iterator, tokens) => {
    const symbol = iterator.next()

    tokens.push({
        type: FUNCTION_SYMBOL,
        value: symbol
    })
}

module.exports = {
    check,
    transform
}
