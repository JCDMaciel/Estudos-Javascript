let lista = [3,1,2];

lista.push(lista.splice(0,1)[0]);

//a função splice é utilizada para remover ou adicionar valor a uma lista, ela retorna os valores removidos
//os parametros que a função recebe são: splice(index, quantidade de valor a ser removido, valor a ser adicionado)
//no caso, o que foi feito foi remover apenas um valor da lista, sendo o primeiro valor e retornar esse valor

//a função push é utilizada para adicionar valor ao final de uma lista e retornar a lista em seu novo tamanho
//O que foi feito foi pegar o valor retornado da função splice e adicionar ao final da lista 

console.log(lista); //a saída esperada é [1, 2, 3]
