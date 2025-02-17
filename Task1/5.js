let eded = []
for(let i = 0; i < 5; i++){
    let yaz = prompt((i+1) + "reqemi daxil edin:")
     eded[i] = Number(yaz) 
}

let boyuk = eded[0]
let kicik = eded[0]
console.log(eded);

for ( let i =0; i<eded.length; i++){
    if (eded[i] > boyuk){
        boyuk = eded[i]
    }
    if (eded[i] < kicik){
        kicik = eded[i]
    }
}       
 
alert("En boyuk eded:" + boyuk)
alert(``)