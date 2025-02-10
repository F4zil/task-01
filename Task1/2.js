let word = prompt ("Tekrarlamasini isteyiniz sozu daxil edin:");
let repeat = +prompt ("Necedefe tekrarlansin:");
function tekrar (word,repeat) {
    let yeni = '';
    for (let i = 0; i < repeat; i++){
        yeni += word;
    }
    return yeni; 
}

let netice = tekrar(word,repeat);
console.log(netice);