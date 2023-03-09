function MoneyConvert(){
    let money = document.getElementById("input").value;
    let exchange = 23000;
    let C1= document.getElementById("currency1").value;
    let C2= document.getElementById("currency2").value;
    let resultjs;
    if(C1=="VietNam" && C2=="USD"){
        resultjs=money/exchange+" Dollar(s)"}
        else if(C1=="USD"&&C2=="VietNam"){
            resultjs=money*exchange+" Dong(s)"}
            else if(C1=="VietNam"){
                resultjs=money+" Dong(s)"}
                else{
                resultjs=money+" USD(s)"}

document.getElementById("result").innerHTML=resultjs
}