let eded = []
for(let i = 0; i < 5; i++){
    let yaz = prompt((i+1) + "reqemi daxil edin:")
     eded[i] = Number(yaz) 
}

for ( let i =1; i<eded.length; i++){
    if (eded[i] < boyuk){
        boyuk = eded[i]
    }
    if (eded[i]< kicik){
        kicik = eded[i]
    }
}       
 
alert("En boyuk eded:" + boyuk)
alert("en kicik eded" + kicik)