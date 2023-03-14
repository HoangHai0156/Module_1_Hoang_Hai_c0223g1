function showdate() {
    var inputMo = parseInt(document.getElementById("month").value);
    var output = "";
    switch (inputMo) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            output = "Tháng " + inputMo + " có 31 ngày";
            break;
        case 2:
            output = "Tháng 2 có 28 hoặc 29 ngày";
            break;
        default:
            output = "Tháng " + inputMo + " có 30 ngày";
    }
    document.getElementById("res").innerText = output;
}