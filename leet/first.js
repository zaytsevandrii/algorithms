function isPalindrome(x) {
    let origin=x.toString()
    let reverse=origin.split('').reverse().join('')
    return origin==reverse
}

console.log(isPalindrome(121))
