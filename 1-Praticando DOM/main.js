const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const botaoTrocaRobo = document.querySelector("#novo-robo")
const robo = document.querySelector("#robotron")

const listaDeRobos = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/final']

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function trocaRobo () {
    for (let i = 0; i < 1; i++) {
        botaoTrocaRobo.addEventListener('click', () => {
            robo.setAttribute('src', listaDeRobos[i])
            i++
            if (listaDeRobos[i] == 'img/final') {
                i=0
            }
        })
    }
}

trocaRobo ()