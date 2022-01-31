const socket = new WebSocket('ws://localhost:8025/');

// Abrir conexão
socket.addEventListener('open', function (event) {
  socket.send('Ola!');
});

// variável controle
var vc=Array(128).fill(0.5)

socket.addEventListener('message', function (event) {
  let [index, val] = event.data.split(",");
  
  //printa variável
  console.log(index, val)
  vc[index] = parseFloat(val);
});
