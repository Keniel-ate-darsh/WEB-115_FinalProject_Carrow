let canvas = document.getElementById("canvasTable")
let context = canvas.getContext("2d")
let bw = (Object.keys(this.data[0]).length) * 200;
let bh = (this.data.length + 1) * 40;
let p = 10;
context.clearRect(0,0,canvas.width,canvas.height);
for(let x = 0; x <= bw; x+=100){
    context.moveTo(0.5 + x + p,p)

    context.lineTo(0.5 + x + p,bh + p);

}
for(let x = 0; x <= bh; x+=40){
    context.moveTo(p,0.5+x+p);
    context.lineTo(bw + p, 0.5 + x + p);

}
context.strokeStyle = "black"
context.stroke()
let keys = Object.keys(this.data[0])

for(let y = 80, count = 0; y <= bh; y += 40){
    for(let x = 0, keyCount = 0; x < bw; x += 200){
        context
    }

}