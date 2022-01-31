// cria uma hydra-synth instancia
var hydra = new Hydra({
canvas: document.getElementById("hyCanvas"),
detectAudio: false,
enableStreamCapture: false,
})




osc(10, 0.1, ()=>vc[0]).out()