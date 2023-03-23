let listOg = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];
function drawTable(list) {
    let tab2 = `<table id='tab2' style="width: 650px; border-collapse: collapse; font-size: 15px; ">
            <tbody>
            <tr>
            <th colspan='2' align="left" style="padding: 20px 30px 8px 15px;">Product Name</th>
            <th align="right" style="color: rgb(167, 28, 28)">${list.length} products</th>
            </tr>`;
    for (var i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            tab2 = tab2 + `<tr>
                    <td style="padding: 20px 30px 8px 15px;">${list[i]}</td>
                    <td>
                    <button onclick="edit('${list[i]}')">Edit</button>
                    </td>
                    <td>
                    <button onclick="deleteItem('${list[i]}')">Delete</button>
                    </td>
                    </tr>`
        } else {
            tab2 = tab2 + `<tr style="background-color: whitesmoke;">
                    <td style="padding: 20px 30px 8px 15px;">${list[i]}</td>
                    <td>
                    <button onclick="edit('${list[i]}')">Edit</button>
                    </td>
                    <td>
                    <button onclick="deleteItem('${list[i]}')">Delete</button>
                    </td>
                    </tr>`
        }
    }
    return tab2 = tab2 + "</tbody></table>"
}
document.getElementById("div2").innerHTML = drawTable(listOg);
function add(){
    let item = document.getElementById("newProduct").value;
    listOg.push(item);
    document.getElementById("div2").innerHTML = ""
    document.getElementById("div2").innerHTML = drawTable(listOg);
    return listOg;
}
function deleteItem(key){
    let index = listOg.indexOf(key);
    listOg.splice(index,1);
    document.getElementById("div2").innerHTML = ""
    document.getElementById("div2").innerHTML = drawTable(listOg);
    return listOg;
}
function edit(key){
    let change = prompt(`Thay ${key} thành:`);
    let index = listOg.indexOf(key);
    listOg.splice(index,1,change);
    document.getElementById("div2").innerHTML = ""
    document.getElementById("div2").innerHTML = drawTable(listOg);
    return listOg;
}
