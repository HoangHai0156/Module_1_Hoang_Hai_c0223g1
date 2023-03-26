let ctx = document.getElementById("myCanvas").getContext("2d");
var img = document.getElementById("myCar");
console.log(ctx.innerWidth);
ctx.drawImage(img,150,70,20,10);