const Lexer = require('./Lexer')

test('should ignore white spaces', () => {
    const result = Lexer.analyse('\r\n\t\f\v ')

    expect(result).toEqual([])
})
