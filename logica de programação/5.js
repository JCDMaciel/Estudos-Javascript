let custoDeFabrica = parseFloat(prompt("Me informe o custo de fábrica deste veículo: "));
let impostos = custoDeFabrica * (45 / 100);
let porcentagemDoDistribuidor = custoDeFabrica * (28 / 100);

let custoAoConsumidor = custoDeFabrica + impostos + porcentagemDoDistribuidor;
