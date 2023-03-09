let aElement = document.getElementById("a");
let bElement = document.getElementById("b");
function evaluatecong(){
    let numA = parseInt(aElement.value)
    let numB = parseInt(bElement.value);
    let result=numA+numB;
    document.getElementById("res").innerHTML="Kết quả của phép tính "+numA+"+"+numB+" là "+result;
}
function evaluatetru(){
    let numA = parseInt(aElement.value)
    let numB = parseInt(bElement.value);
    let result=numA-numB;
    document.getElementById("res").innerHTML="Kết quả của phép tính "+numA+"-"+numB+" là "+result;
}
function evaluatenhan(){
    let numA = parseInt(aElement.value)
    let numB = parseInt(bElement.value);
    let result=numA*numB;
    document.getElementById("res").innerHTML="Kết quả của phép tính "+numA+"x"+numB+" là "+result;
}
function evaluatechia(){
    let numA = parseInt(aElement.value)
    let numB = parseInt(bElement.value);
    let result=numA/numB;
    document.getElementById("res").innerHTML="Kết quả của phép tính "+numA+"/"+numB+" là "+result;
}