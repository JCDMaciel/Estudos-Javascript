let anoInserido = parseInt(prompt("Me informe o ano para consulta"));

if(anoInserido >= 1930){
    while(anoInserido > 1930){
        anoInserido = anoInserido - 4;
    } 
    if (anoInserido == 1930){
        console.log("Teve copa");
    } else {
        console.log("Não teve copa");
    }
} else {
    console.log("Não teve copa");
}
