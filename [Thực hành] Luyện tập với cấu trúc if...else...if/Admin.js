let id=prompt("Enter the ID");
if(id=="Admin"){
    let psw=prompt("Please enter your password");
    if(psw=="TheMaster"){
        alert("Welcome!")
    }else if(psw==null){
        alert("Canceled!")
    }else{
        alert("Wrong password")
    }
}else if(id==null){
    alert("Canceled!");
}else{
    alert("I don't know you");
}