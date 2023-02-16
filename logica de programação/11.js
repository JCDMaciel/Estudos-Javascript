let massa = parseFloat(prompt("Me informe o seu peso em kilogramas: "));
let altura = parseFloat(prompt("Me informe a altura em metros: "));

let imc = massa / (altura * altura);

if (imc >= 16 && imc <= 16.99){
    console.log("Baixo peso grave");
} else if (imc >= 17 && imc <= 18.49){
    console.log("Baixo peso");
} else if (imc >= 18.50 && imc <= 24.99){
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.99){
    console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 34.99){
    console.log("Obesidade grau I");
} else if (imc >= 35 && imc <= 39.99){
    console.log("Obesidade grau II");
} else if (imc >= 40){
    console.log("Obesidade grau III");
}
