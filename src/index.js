
exports.min = function min (array) {

  return (array === undefined || array.length === 0) ? 0 : array.sort((a, b)  => { return a - b })[0];
}

exports.max = function max (array) {
    return (array === undefined || array.length === 0) ? 0 : array.sort((a, b)  => { return b - a })[0];
}

exports.avg = function avg (array) {
    return (array === undefined || array.length === 0) ? 0 : array.reduce((sum, elem)  => { return sum + elem }, 0) / array.length;

}
