let preco = parseFloat(prompt("Me informe o preço de custo do produto: "));
let porcentagem = parseFloat(prompt("Me informe a porcentagem de venda desse produto: "));

porcentagem = porcentagem / 100;

let valorFinal = preco + porcentagem;

console.log("O valor de venda desse produto será: " + valorFinal);
