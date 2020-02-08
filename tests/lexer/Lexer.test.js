const Lexer = require('../../src/lexer/Lexer')
const TokenTypes = require('../../src/lexer/TokenTypes')

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

test('should extract multiple words', () => {
    const result = Lexer.analyse(' foo bar\tbaz')

    expect(result).toEqual([
        {
            type: TokenTypes.WORD,
            value: 'foo'
        },
        {
            type: TokenTypes.WORD,
            value: 'bar'
        },
        {
            type: TokenTypes.WORD,
            value: 'baz'
        }
    ])
})

test('should extract function symbol', () => {
    const symbols = ['¬','~','∧','&','.','∨','+','⇒','→','↔','=','≡','⊕','≠','↑','|','↓']

    for (const symbol of symbols) {
        const result = Lexer.analyse(symbol)

        expect(result).toEqual([
            {
                type: TokenTypes.FUNCTION_SYMBOL,
                value: symbol
            }
        ])
    }
})

test('should tokenize parentheses', () => {
    const result = Lexer.analyse(' ( ) ')

    expect(result).toEqual([
        {
            type: TokenTypes.OPEN_PARENTHESIS,
        },
        {
            type: TokenTypes.CLOSING_PARENTHESIS,
        },
    ])
})

test('should tokenize an complete expression', () => {
    const result = Lexer.analyse('(FOO + BAR + BAZ) ⊕ ~LOL')

    expect(result).toEqual([
        {
          type: TokenTypes.OPEN_PARENTHESIS,
        },
        {
          type: TokenTypes.WORD,
          value: 'FOO',
        },
        {
          type: TokenTypes.FUNCTION_SYMBOL,
          value: '+',
        },
        {
          type: TokenTypes.WORD,
          value: 'BAR',
        },
        {
          type: TokenTypes.FUNCTION_SYMBOL,
          value: '+',
        },
        {
          type: TokenTypes.WORD,
          value: 'BAZ',
        },
        {
          type: TokenTypes.CLOSING_PARENTHESIS,
        },
        {
          type: TokenTypes.FUNCTION_SYMBOL,
          value: '⊕',
        },
        {
          type: TokenTypes.FUNCTION_SYMBOL,
          value: '~',
        },
        {
          type: TokenTypes.WORD,
          value: 'LOL',
        },
    ])
})

test('should raise syntax error on unreconized charaters', () => {
    const result = () => {
        Lexer.analyse('foo#')
    }

    expect(result).toThrow('unrecognized character \'#\'')
})
