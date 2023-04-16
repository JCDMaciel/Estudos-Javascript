let primeiroValor =  parseInt(prompt("Me informe o primeiro valor: "));
let segundoValor = parseInt(prompt("Me informe o segundo valor: "));

if (primeiroValor > segundoValor){
    console.log("O primeiro valor é maior que o segundo valor");
} else if (segundoValor > primeiroValor){
    console.log("O segundo valor é maior que o primeiro valor");
} else {
    console.log("Os valores são iguais");
}
