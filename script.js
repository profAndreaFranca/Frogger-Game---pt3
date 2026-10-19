
var vidas = 3;
var pontos = 0;
var fase = 1;
var travessiaConcluida = false;

// JOGADOR
var jogador = createSprite(200, 365);
jogador.setAnimation("jogador");

// CARROS
var carro1 = createSprite(50, 280);
carro1.setAnimation("carro_vermelho");
carro1.velocityX = 3;

var carro2 = createSprite(350, 210);
carro2.setAnimation("carro_azul");
carro2.velocityX = -4;

// PREPARAR A PRIMEIRA FASE
prepararFase1();

// FUNÇÃO PRINCIPAL
function draw() {
  jogarFase1();
}

// MOVIMENTO DO JOGADOR
function moverJogador() {
  if (keyWentDown("up")) {
    jogador.y = jogador.y - 35;
  }

  if (keyWentDown("down")) {
    jogador.y = jogador.y + 35;
  }

  if (keyWentDown("left")) {
    jogador.x = jogador.x - 35;
  }

  if (keyWentDown("right")) {
    jogador.x = jogador.x + 35;
  }

  // LIMITES DA TELA
  if (jogador.x < 20) {
    jogador.x = 20;
  }

  if (jogador.x > 380) {
    jogador.x = 380;
  }

  if (jogador.y > 380) {
    jogador.y = 380;
  }
}

// MOVIMENTAÇÃO DOS VEÍCULOS
function movimentarVeiculos() {
  if (carro1.x > 430) {
    carro1.x = -30;
  }

  if (carro2.x < -30) {
    carro2.x = 430;
  }
}

// VERIFICAR COLISÕES
function verificarColisoes() {
  if (
    jogador.isTouching(carro1) ||
    jogador.isTouching(carro2)
  ) {
    perderVida();
  }
}

// PERDER VIDA
function perderVida() {
  if (vidas > 0) {
    vidas = vidas - 1;

    jogador.x = 200;
    jogador.y = 365;
  }
}

// MOSTRAR INFORMAÇÕES
function mostrarInformacoes() {
  fill("white");
  stroke("black");
  strokeWeight(3);
  textSize(15);

  text("VIDAS: " + vidas, 10, 20);
  text("PONTOS: " + pontos, 125, 20);
  text("FASE: " + fase, 315, 20);

  noStroke();
}

// PREPARAR FASE 1
function prepararFase1() {
  jogador.x = 200;
  jogador.y = 365;

  carro1.x = 50;
  carro1.y = 280;
  carro1.velocityX = 3;

  carro2.x = 350;
  carro2.y = 210;
  carro2.velocityX = -4;
}

// JOGAR FASE 1
function jogarFase1() {
  background("green");

  moverJogador();
  movimentarVeiculos();
  verificarColisoes();

  drawSprites();

  mostrarInformacoes();

  // OBJETIVO DA TRAVESSIA
  if (
    jogador.y < 50 &&
    travessiaConcluida == false
  ) {
    pontos = pontos + 100;
    travessiaConcluida = true;
  }
}
