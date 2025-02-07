function tekrar (soz,say) {
    let yeni = '';
    for (let i = 0; i < say; i++){
        yeni += soz;
    }
    return yeni; 
}

let netice = tekrar('Fazil' , 7);
console.log(netice);