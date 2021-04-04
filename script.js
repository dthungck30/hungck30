const canvas = document.querySelector(`#draw`)
const ctx = canvas.getContext(`2d`)

ctx.fillstyle =`red`

const circle = new Path2D();
circle.arc(100,35,25,0,2*math.PI);
ctx.fill(circle)

