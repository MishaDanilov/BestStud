stydents = {
    DenisAleshkov:"https://sun9-9.userapi.com/c206628/v206628018/7676e/QJn-5admYnk.jpg",
    SashaBatan:"https://sun9-25.userapi.com/c857632/v857632836/caacb/c8Nm2_3_yVY.jpg",
    MishaDanilov:"https://sun9-25.userapi.com/c857028/v857028599/f5366/ya2SZzHb5aM.jpg",
    IgnatDrozdov:"https://sun9-29.userapi.com/c206824/v206824544/129820/NHQt4vOP-rE.jpg",
    DaniilDragan:"https://sun9-64.userapi.com/c853516/v853516649/206a9/lyEEi_f5ze8.jpg",
    NikitaLapin:"https://sun9-25.userapi.com/c851224/v851224569/521fc/eAdwaBdtYpY.jpg",
    DenisMajygov:"https://sun9-52.userapi.com/c840234/v840234580/77d36/4bquG_8CDMw.jpg",
    JeniaMasanin:"https://sun2.beltelecom-by-minsk.userapi.com/c830108/v830108742/1207d9/ND0JNq5EKUI.jpg",
    VladMatievski:"https://sun9-43.userapi.com/GH57pqZSyvmuOnM98uxg1EhsWN8_xn2qaFepew/0-kd8fwDK6k.jpg",
    AlisaPetrova:"https://sun9-15.userapi.com/c849232/v849232882/16b490/uYPzEltBBP4.jpg",
    DanilaSamusev:"https://sun9-41.userapi.com/c846018/v846018153/8ed80/2ba-kve6VDw.jpg",
    SegeiSitnikov:"https://sun9-68.userapi.com/c854520/v854520109/cfee6/JysuSlQHYfc.jpg",
    ValeriaSushko:"https://sun9-68.userapi.com/c852036/v852036521/cf96e/73F4HGHSffM.jpg",
    KristinaTishenko:"https://sun9-6.userapi.com/c857736/v857736586/51fea/Q674PBTfB5c.jpg",
    JeniaTumachik:"https://sun9-66.userapi.com/c846420/v846420388/bf161/8vItUlXSqAY.jpg",
    KirilShamekov:"https://sun9-30.userapi.com/c845524/v845524179/df814/TD7n5VJ6PXo.jpg"
}
let ArrayStydentsName = []
// for (let key in stydents) {
//     if (stydents.hasOwnProperty(key)) {
//         ArrayStydentsName.push(key)
//     }
// }
function pushArr(){
    ArrayStydentsName = []
    for (let key in stydents) {
        if (stydents.hasOwnProperty(key)) {
            ArrayStydentsName.push(key)
        }
    }
    ArrayStydentsName.sort(function(a, b){return 0.5 - Math.random()});
}
function Count(){
    let count = 0
    return function(){
        count+=2
        return count-2
    }
}
var k = 0
var i = 0
window.getCount={
    0:Count()
}
function start(){
    pushArr()
    var i = window.getCount[k]()
    console.log('Размерность массива: '+ArrayStydentsName.length)
    console.log(i)
    document.getElementById('start').style = `background-image: url("https://www.piku.co.kr/w/images/versus.png"); background-color: rgba(0, 0, 0, 0);pointer-events:none;`
    document.getElementById('wleft').style = `visibility: visible;`
    document.getElementById('wright').style = `visibility: visible;`
    document.getElementById('wleftn').innerHTML = `${ArrayStydentsName[i+1]}`
    document.getElementById('wrightn').innerHTML = `${ArrayStydentsName[i]}`
    document.getElementById('wleft').style = `background-image: url("${stydents[ArrayStydentsName[i]]}");`
    document.getElementById('wright').style = `background-image: url("${stydents[ArrayStydentsName[i+1]]}");`
}
function mainClick(Position){
    if(Position=='left'){
        var i = window.getCount[k]()
        console.log(i)
        delete stydents[ArrayStydentsName[i-1]]
        console.log(stydents)
        if(i==ArrayStydentsName.length){
            if(i-1==1){
                document.getElementById('start').style = `visibility: hidden;`
                document.getElementById('wleftn').style = `visibility: hidden;`
                document.getElementById('wrightn').style = `visibility: hidden;`
                document.getElementById('wright').style = `visibility: hidden;`
                document.getElementById('wleft').innerHTML = '<b style="color: red; font-size: 50px;">WINNER!!!</b>'
            }
            else{
                k++
                window.getCount[k] = Count()
                start()
            }

        }
        else{
            document.getElementById('wleftn').innerHTML = `${ArrayStydentsName[i+1]}`
            document.getElementById('wrightn').innerHTML = `${ArrayStydentsName[i]}`
            document.getElementById('wleft').style = `background-image: url("${stydents[ArrayStydentsName[i]]}");`
            document.getElementById('wright').style = `background-image: url("${stydents[ArrayStydentsName[i+1]]}");`
        }
        
    }
    if(Position=='right'){
        var i = window.getCount[k]()
        console.log(i)
        delete stydents[ArrayStydentsName[i-2]]
        console.log(stydents)
        if(i==ArrayStydentsName.length){
            if(i-1==1){
                document.getElementById('start').style = `visibility: hidden;`
                document.getElementById('wleftn').style = `visibility: hidden;`
                document.getElementById('wrightn').style = `visibility: hidden;`
                document.getElementById('wleft').style = `visibility: hidden;`
                document.getElementById('wright').innerHTML = '<b style="color: red; font-size: 50px;">WINNER!!!</b>'
            }
            else{
                k++
                window.getCount[k] = Count()
                start()
            }

        }
        else{
            document.getElementById('wleftn').innerHTML = `${ArrayStydentsName[i+1]}`
            document.getElementById('wrightn').innerHTML = `${ArrayStydentsName[i]}`
            document.getElementById('wleft').style = `background-image: url("${stydents[ArrayStydentsName[i]]}");`
            document.getElementById('wright').style = `background-image: url("${stydents[ArrayStydentsName[i+1]]}");`
        }
        
    }
}
