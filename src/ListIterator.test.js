const ListIterator = require('./ListIterator')

test('key', () => {
    const it = new ListIterator("testing")

    expect(it.key()).toBe(0)
})

test('next', () => {
    const it = new ListIterator("testing")
    it.next()

    expect(it.key()).toBe(1)
})

test('valid', () => {
    const it = new ListIterator("a")
    it.next()
    it.next()

    expect(it.valid()).toBe(false)
})

test('current', () => {
    const it = new ListIterator("testing")

    expect(it.current()).toBe('t')
    it.next()
    expect(it.current()).toBe('e')
})

test('peak', () => {
    const it = new ListIterator("testing")

    expect(it.peak()).toBe('e')
    expect(it.key()).toBe(0)
})

test('rewind', () => {
    const it = new ListIterator("testing")
    expect(it.key()).toBe(0)
    it.next()
    expect(it.key()).toBe(1)
    it.rewind()
    expect(it.key()).toBe(0)
})
