function one(callback) {
    return callback ? callback(1) : 1
}
function two(callback) {
    return callback ? callback(2) : 2
}
function three(callback) {}
function four(callback) {}
function five(callback) {}
function six(callback) {}
function seven(callback) {}
function eight(callback) {}
function nine(callback) {}

function plus(a) {
    return (b) => a + b
}
function minus(a) {
    return (b) => a - b
}
function devide(a) {
    return (b) => b / a
}
function mult(a) {
    return (b) => a * b
}

console.log(one(plus(two())))
