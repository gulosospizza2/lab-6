let canvas = document.getElementById('canvas'); 
let ctx = canvas.getContext('2d');

let ret_3 = {
    x: 250,
    y: 250,
    raio: 50,
    img: new Image(),
    carregada: false,
    desenha: function () {
        if (this.carregada) {
            ctx.beginPath();
            ctx.drawImage(this.img, this.x, this.y, 2 * this.raio, 2 * this.raio);
            ctx.closePath();
        }
    }
};

// Caminho da imagem
ret_3.img.src = "images.jpg"; // ou use uma URL direta para testar: "https://via.placeholder.com/100"
ret_3.img.onload = function () {
    ret_3.carregada = true;
};

// Animação
function animacao(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ret_3.desenha();
    requestAnimationFrame(animacao);
}
animacao();

// Movimento do mouse com limite para não sair do canvas
document.addEventListener('mousemove', function(evento){  
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    // Garante que a imagem fique dentro do canvas
    let raio = ret_3.raio;
    ret_3.x = Math.min(Math.max(x_mouse, 0), canvas.width - 2 * raio);
    ret_3.y = Math.min(Math.max(y_mouse, 0), canvas.height - 2 * raio);
});