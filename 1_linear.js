const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count =0

function linearSearcher(array, item) {
    for (let i = 0; i < array.length; i++) {
        count+=1
        if (array[i] == item) {
            return i
        }
        
    }
    return null
}

console.log(linearSearcher(array,6))
console.log('count',count)
