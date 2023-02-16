let valorDoProduto = parseFloat(prompt("Informe o valor do produto: "));
let quantidadeDasPrestacoes = parseFloat(prompt("Informe o numero de parcelas: "));

let valorDasParcelas = valorDoProduto / quantidadeDasPrestacoes;

console.log("O valor das parcelas será igual a: " + valorDasParcelas);
