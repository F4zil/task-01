let cumle =  "I love programming"
function soz(){
    let arr = cumle.split(" ").sort()
    let son = arr[arr.length - 1];

    return son
}

console.log(soz());