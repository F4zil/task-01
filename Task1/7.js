let reqemler = [10, 51, 120, 67, 80, 30, 20];

let netice = [];

for (let i = 0; i < reqemler.length; i++)
{ 
    if (reqemler[i] > 50)
    {
        netice.push(reqemler[i] * 3);
    }
}
console.log(netice);