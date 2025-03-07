let adlar = ["Fazil" ,"Vaqif", "Ugur" ,"Mehemmed"]

let ad = "Vaqif";
function yoxlanis(){
    let yoxla = adlar.some(arr => arr === ad);
    return yoxla;
}

console.log(yoxlanis());

