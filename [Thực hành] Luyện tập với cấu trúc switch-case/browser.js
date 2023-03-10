let brs=prompt("Enter browser name!")
switch(brs){
    case "Edge":
        alert("You have got the Edge!");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        alert("Okay we support these browsers too");
        break;
    default:
        alert("We hope that this page looks ok!")
}