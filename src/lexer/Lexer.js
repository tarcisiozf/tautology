const ListIterator = require('../ListIterator')

const analyzers = [
    require('./WhiteSpaceAnalyser'),
    require('./WordAnalyser'),
]

const analyse = (input) => {
    const iterator = new ListIterator(input);
    const tokens = []

    while (iterator.valid()) {
        const char = iterator.current()

        const analyzer = analyzers.find(analyzer => analyzer.check(char))

        if (!analyzer) {
            throw new SyntaxError(`unrecognized character '${char}'`)
        }

        if (analyzer.transform) {
            analyzer.transform(iterator, tokens)
        } else {
            iterator.next()
        }
    }

    return tokens
}

module.exports = {
    analyse
}
