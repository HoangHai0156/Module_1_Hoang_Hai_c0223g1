function calculate(){
    let Numa=parseInt(document.getElementById("numa").value);
    let Numb=parseInt(document.getElementById("numb").value);
    let Math=document.getElementById("select").value;
    let result;
    switch(Math){
        case "+":
            result=Numa+Numb
            break;
        case "-":
            result=Numa-Numb
            break;
        case "*":
            result=Numa*Numb
            break;
        case "/":
            result=Numa/Numb
            break;
    }
    document.getElementById("res").innerHTML=result
}