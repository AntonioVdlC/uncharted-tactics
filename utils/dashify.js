const dashify = function (str) {
    return String(str)
        .toLowerCase()
        .replace(/ /g, "-")
}

module.exports = dashify
