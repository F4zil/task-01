function Toplama () {
    let Reqemler = prompt('Reqemleri qeyd edin:')
    let arr =Reqemler.split('')
    let netice = arr.reduce(function (a,b){
        return a+ parseFloat(b);
    },0);
     console.log('Netice:' + netice);
    alert('Netice:' + netice);
}
Toplama();