let idade = parseInt(prompt("Me informe sua idade: "));

if (idade < 18) {
    console.log("Você é menor de idade e não pode ter carteira de motorista");
} else {
    let validaCNH = parseInt(prompt("Informe 1 caso possua CNH e 2 caso não possua"));
    if (validaCNH == 1) {
        console.log("Você possui CNH");
    } else if (validaCNH == 2) {
        console.log("Você não possui CNH");
    } else {
        console.log("Foi informado um valor inválido");
    }
}
