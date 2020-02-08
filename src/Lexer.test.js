const Lexer = require('./Lexer')
const TokenTypes = require('./TokenTypes')

test('should ignore white spaces', () => {
    const result = Lexer.analyse('\r\n\t\f\v ')

    expect(result).toEqual([])
})

test('should extract word', () => {
    const result = Lexer.analyse(' foo')

    expect(result).toEqual([
        {
            type: TokenTypes.WORD,
            value: 'foo'
        }
    ])
})
