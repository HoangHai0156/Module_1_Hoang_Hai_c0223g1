let ddly=prompt("Nhập điểm Vật Lý");
let ddhoa=prompt("Nhập điểm Hóa");
let ddsinh=prompt("Nhập điểm Sinh");
let dly=parseInt(ddly);
let dhoa=parseInt(ddhoa);
let dsinh=parseInt(ddsinh);
let avg=(dly+dhoa+dsinh)/3;
let sum=(dly+dhoa+dsinh);
document.write("Điểm tổng = "+sum+"</br>"+"Điểm trung bình = "+avg)