let idade = new Array(10);
let sexo = new Array(10);
let peso = new Array(10);
let idadeDosHomens = 0;
let idadeDasMulheres = 0;
let pesoDosHomens = 0;
let pesoDasMulheres = 0;
let mediaDosPesosMasculinos = 0;
let mediaDosPesosFemininos = 0;
let mediaDasIdadesMasculinas = 0;
let mediaDasIdadesFemininas = 0;
let numeroDeHomens = 0;
let numeroDeMulheres = 0;

for (let i = 1; i <= 10; i++){
    idade[i] = parseInt(prompt("Me informe a idade do individuo numero: " + i));
    sexo[i] = prompt("Me informe o sexo do individuo numero: " + i + " sendo M para masculino e F para feminino");
    peso[i] = parseFloat(prompt("Me informe o peso do individuo numero: " + i));

    if (sexo[i] == "M" || sexo[i] == "m"){
        idadeDosHomens =  idadeDosHomens + idade[i];
        pesoDosHomens = pesoDosHomens + peso[i];
        numeroDeHomens++;
    }
    
    if (sexo[i] == "F" || sexo[i] == "f"){
        idadeDasMulheres = idadeDasMulheres + idade[i];
        pesoDasMulheres = pesoDasMulheres + peso[i];  
        numeroDeMulheres++;
    }
}

mediaDosPesosMasculinos = pesoDosHomens / numeroDeHomens;
mediaDosPesosFemininos = pesoDasMulheres / numeroDeMulheres;
mediaDasIdadesMasculinas = idadeDosHomens / numeroDeHomens;
mediaDasIdadesFemininas = idadeDasMulheres / numeroDeMulheres;

console.log(mediaDasIdadesMasculinas);
console.log(mediaDasIdadesFemininas);
console.log(mediaDosPesosMasculinos);
console.log(mediaDosPesosFemininos);
