const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth; //canvas크기를 정해줘야 깨지지 않고 나온다.
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#fff'

for (let i = 0; i < 50; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  let a = Math.floor(Math.random() * 1000) + 1;
  let b = Math.floor(Math.random() * 100) + 1;
  let c = Math.floor(Math.random() * 100) + 1;

  // arc, circle
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  // ctx.rect(x, y, 10, 10);
  ctx.fillStyle = `rgba(${a}, ${b}, ${c})`;
  ctx.fill();
  // ctx.strokeStyle = `rgba(${b}, 20, 60)`;
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

