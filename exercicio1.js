// Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna o maior elemento do array.

function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        return undefined; 
    }

    let maior = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; 
        }
    }

    return maior;
}


const numeros = [10, 5, 20, 15, 8];
console.log(encontrarMaiorElemento(numeros)); 
