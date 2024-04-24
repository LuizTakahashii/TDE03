// Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros.
// A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os elementos resultantes.

function mapearArray(funcao, array) {
    return array.map(funcao)
}

function dobrar(numero) {
    return numero * 2;
}

const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = mapearArray(dobrar, numeros);
console.log(numerosDobrados); 
