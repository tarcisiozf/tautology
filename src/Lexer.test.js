const Lexer = require('./Lexer')

test('should ignore white spaces', () => {
    const result = Lexer.analyse('\r\n\t\f\v ')

    expect(result).toEqual([])
})

test('should extract word', () => {
    const result = Lexer.analyse(' foo')

    expect(result).toEqual([
        {
            type: 'word',
            value: 'foo'
        }
    ])
})
