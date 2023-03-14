var bmi;
function calculate(){
    var inputHeight = document.getElementById("height").value;
    var inputWeight = document.getElementById("weight").value;
    bmi = inputWeight / (inputHeight*inputHeight);
}
function result(){
    var conclusion="";
    if(bmi<18.5){
        conclusion = "Underweight";
    }else if(bmi<25){
        conclusion = "Normal";
    }else if(bmi<30){
        conclusion = "Overwight";
    }else{
        conclusion = "Obese";
    }
    alert(conclusion);
}