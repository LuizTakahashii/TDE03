// Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. 
// A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. 
// A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes

function filtrarArray(funcaoFiltro, array) {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (funcaoFiltro(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

function filtroPar(numero) {
    return numero % 2 === 0;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarArray(filtroPar, numeros);
console.log(numerosPares); 