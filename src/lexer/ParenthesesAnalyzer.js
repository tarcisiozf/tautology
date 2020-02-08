const { OPEN_PARENTHESIS, CLOSING_PARENTHESIS } = require('./TokenTypes')

const OPEN_PARENTHESIS_CHAR = '(';
const CLOSING_PARENTHESIS_CHAR = ')';

const check = (char) => {
    return [OPEN_PARENTHESIS_CHAR, CLOSING_PARENTHESIS_CHAR].includes(char)
}

const transform = (iterator, tokens) => {
    const value = iterator.next()

    const type = value === OPEN_PARENTHESIS_CHAR
        ? OPEN_PARENTHESIS
        : CLOSING_PARENTHESIS

    tokens.push({ type })
}

module.exports = {
    check,
    transform,
}
