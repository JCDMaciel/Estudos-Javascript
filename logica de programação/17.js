let idade = new Array(10);
let nota = new Array(10);
let somaDasIdades = 0;
let regular = 0;
let bom = 0;

for (let i = 1; i <= 10; i++) {
    idade[i] = parseInt(prompt("Me informe a idade do individuo: " + i));

    while(nota[i] == undefined){
        nota[i] = parseInt(prompt("Me informe a nota do individuo: " + i + " sendo 3 para otimo, 2 para bom e 1 para regular"));

        if (nota[i] == 1 || nota[i] == 2 || nota[i] == 3 ){
            console.log("Nota corretamente inserida para o individuo: " + i);
            if (nota[i] == 1){
                regular++;
            } else if (nota[i] == 2) {
                bom++;
            } else if (nota[i] == 3) {  
                somaDasIdades = somaDasIdades + idade[i]; 
            }
        } else {
            console.log("Valor incorreto inserido para o individuo: " + i);
            nota[i] = undefined;
        }
    }
}

let mediaDasIdades = somaDasIdades / 10;
let porcentagemDeNotaBoa = 100 * (bom / 10);

console.log("A media das idades de quem respondeu que o filme era ótimo é: " + mediaDasIdades);
console.log(regular + " é a quantidade de pessoas que respondeu que o filme era regular");
console.log("A porcentagem das pessoas que responderam que o filme era bom é igual a: " + porcentagemDeNotaBoa);

