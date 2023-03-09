function evaluatecong(){
    let numA = parseInt(document.getElementById("a").value);
    let numB = parseInt(document.getElementById("b").value);
    let result=numA+numB;
    document.getElementById("res").innerHTML=result;
}
function evaluatetru(){
    let numA = parseInt(document.getElementById("a").value);
    let numB = parseInt(document.getElementById("b").value);
    let result=numA-numB;
    document.getElementById("res").innerHTML="Kết quả của phép tính "+numA+"-"+numB+" là "+result;
}
function evaluatenhan(){
    let numA = parseInt(document.getElementById("a").value);
    let numB = parseInt(document.getElementById("b").value);
    let result=numA*numB;
    document.getElementById("res").innerHTML="Kết quả của phép tính "+numA+"x"+numB+" là "+result;
}
function evaluatechia(){
    let numA = parseInt(document.getElementById("a").value);
    let numB = parseInt(document.getElementById("b").value);
    let result=numA/numB;
    document.getElementById("res").innerHTML="Kết quả của phép tính "+numA+"/"+numB+" là "+result;
}