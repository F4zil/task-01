let sozler = ["alma" , "banan" , "ciyelek" , "armud"]

let uzun = sozler.reduce((acc,curr) => {
    return  curr.length > acc.length ? curr : acc;
});

console.log(uzun);