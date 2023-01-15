const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

function linearSearcher(array, item) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count = count + 1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < array[middle]) {
            end = middle - 1
        }
        if (item > array[middle]) {
            start = middle + 1
        }
    }
    return position
}

console.log(linearSearcher(array, 8))
console.log("count", count)

function recursiveBinarysearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2)
    count += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarysearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarysearch(array, item, middle + 1, end)
    }
}

console.log(recursiveBinarysearch(array, 15, 0, array.length))
console.log("count", count)
