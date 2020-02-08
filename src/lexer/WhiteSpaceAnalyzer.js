const check = (char) => {
    if (char === undefined) return false
    return char.match(/^\s$/)
}

module.exports = {
    check
}
