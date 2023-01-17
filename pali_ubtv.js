function palindrome(word) {
    word=word.toString()
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false
        }
    }return true
}

console.log(palindrome(121))

function palindromeArr(word){
    return word==word.toString().toLowerCase().split('').reverse().join('')
}

console.log(palindromeArr(121))