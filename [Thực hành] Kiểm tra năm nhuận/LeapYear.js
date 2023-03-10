let year=parseInt(prompt("Nhập năm để kiểm tra năm nhuận"));
let LeapYear=false;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            LeapYear=true
        }else{
            LeapYear=false
        }
    }else{
        LeapYear=true
    }
}
if(LeapYear){
    alert(year+" là năm nhuận")
}else{
    alert(year+" không phải là năm nhuận")
}