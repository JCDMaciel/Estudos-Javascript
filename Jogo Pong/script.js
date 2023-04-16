//variaveis de ambiente:
let larguraQuadro = 1500;
let alturaQuadro = 700;

//variaveis da bolinha:
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

//variaveis do player1:
let xPlayer1 = 15;
let yPlayer1 = 300;
let comprimentoPlayer1 = 10;
let alturaPlayer1 = 90;
let velocidadePlayer1 = 10;

//variaveis do player2:
let xPlayer2 = larguraQuadro - 25;
let yPlayer2 = 300;
let comprimentoPlayer2 = 10;
let alturaPlayer2 = 90;
let velocidadePlayer2 = 10;

//variaveis do placar:
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
    //tela inteira do notebook
    createCanvas (larguraQuadro, alturaQuadro);
}

function draw () {
    //cor de fundo
    background (0);

    //funções da bolinha
    criarBolinha ();
    movimentaBolinha ();
    ricocheteBolinha ();

    //funções do player1
    criarPlayer1 ();
    movimentaPlayer1 ();
    ricocheteBolinhaPlayer1 ();

    //funções do player2
    criarPlayer2 ();
    movimentaPlayer2 ();
    ricocheteBolinhaPlayer2 ();   
    
    //funções do placar
    incluiPlacar ();
    pontuar ();
}

function criarBolinha () {
    //criação da bolinha
    circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha () {
    //velocidade da bolinha
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function ricocheteBolinha () {   
    //ricochete da bolinha no eixo X
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }

    //ricochete da bolinha no eixo y
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function criarPlayer1 () {
    //criar player1
    rect (xPlayer1, yPlayer1, comprimentoPlayer1, alturaPlayer1);
}

function movimentaPlayer1 () {
    //movimento do player1 pra cima
    if (keyIsDown(UP_ARROW)){
        yPlayer1 -= velocidadePlayer1;
    }

    //movimento do player1 pra baixo
    if (keyIsDown(DOWN_ARROW)){
        yPlayer1 += velocidadePlayer1;
    }
}

function ricocheteBolinhaPlayer1 () {
    //ricochete do player1 com a bolinha
    if (xBolinha - raio < xPlayer1 + comprimentoPlayer1 && yBolinha - raio < yPlayer1 + alturaPlayer1 && yBolinha + raio > yPlayer1) {
        velocidadeXBolinha *= -1;
    }
}

function criarPlayer2 () {
    //criar player2
    rect (xPlayer2, yPlayer2, comprimentoPlayer2, alturaPlayer2);
}

function movimentaPlayer2 () {
    velocidadePlayer2 = yBolinha - yPlayer2 - comprimentoPlayer2 / 2 - 3;
    yPlayer2 += velocidadePlayer2;
}

function ricocheteBolinhaPlayer2 () {
    //ricochete do player2 com a bolinha
    if (xBolinha + raio > xPlayer2 + comprimentoPlayer2 && yBolinha + raio < yPlayer2 + alturaPlayer2 && yBolinha - raio > yPlayer2) {
        velocidadeXBolinha *= -1;
    }
}

function incluiPlacar () {
    //cor branca para o texto da função
    fill (255);
    //placar player1
    text ('Pontos do player1', 234, 26);
    text (meusPontos, 278, 56);
    //placar player2
    text ('Pontos do player2', larguraQuadro - 322, 26);
    text (pontosOponente, larguraQuadro - 278, 56);
}

function pontuar () {
    if (xBolinha > larguraQuadro - 10) {
        meusPontos += 1;
    }

    if (xBolinha < 10) {
        pontosOponente += 1;
    }
}

