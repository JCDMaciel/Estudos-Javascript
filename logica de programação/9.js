let a = parseFloat(prompt("Me informe o valor da primeira nota "));
let b = parseFloat(prompt("Me informe o valor da segunda nota "));
let c = parseFloat(prompt("Me informe o valor da terceira nota "));

let media = (a + b + c) / 3;

if (media <= 5) {
    console.log("Aluno reprovado");
} else if (5.1 <= media <= 6.9) {
    console.log("Aluno de recuperação");
} else {
    console.log("Aluno aprovado");
}
