function fibonachi(n){
    if(n<0){
        return 0
    }
    if(n<=2){
        return 1

    }
    return fibonachi(n-1)+fibonachi(n-2)
}

console.log(fibonachi(7))

function fibLoop(n){
    let a=1
    let b=1
    let c
    if(n<=2){
        return 1
    }
    for(let i=3; i<=n; i++){
        c=a+b
        a=b
        b=c
    }
    return c
}
console.log(fibLoop(7))

function fibUbitv(n){
    if(n<=2){
        return 1
    }
    let prev=1
    let result=1
    for(let i=0; i<n-2; i++){
        let temp=result
        result=temp+prev
        prev=temp
    }
    return result
}

console.log(fibUbitv(7))