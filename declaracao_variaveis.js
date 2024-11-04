// Declarações Variaveis
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types */

var global = "Variavel global"; // declara um valor de escopo global

let local = 35; // declara um valor de escopo local

const constante = 621 // declara um valor para somente leitura, não pode ser alterado.

// undefined
/* Variaveis var e let declaradas sem especificar valor inicial tem o valor undefined */

let nome;
var idade;

console.log(`Meu nome é ${nome} e minha idade é ${idade}.`)

/* Pode-se utilizar undefined para determinar se uma variavel tem valor */
let input;

if (input === undefined) {
    console.log(`Valor não atribuido = ${input}`);
} else {
    console.log(`Valor = ${input}`);
}

/* O valor undefined se comporta como false */
let myArray = [];

if (myArray[0]) {
    console.log(true)
} else {
    console.log(false)
}

/* O valor undefined é convertido para NaN quando usado no contexto numérico */
let a;
console.log(a + 2);

/*Quando você avalia uma variável nula, o valor nulo se comporta como 0 em 
contextos numéricos e como falso em contextos booleanos. */

let n = null;
console.log(n * 32); // a saída para o console será 0.
