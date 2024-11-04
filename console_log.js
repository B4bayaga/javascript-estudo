// Comando Console.log()
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction */

// Sintaxe

//Strings
console.log("Olá mundo!");
console.log("Sintaxe básica da função 'console.log()'.");
console.log('Sintaxe básica da função "console.log()".');

//Números
console.log(33);

//Variável
let nome = "Rafael";
console.log(nome)

// Expressões
console.log(2 + 3);

//Objetos
console.log({nome: "Rafael", idade: 41});

//Exemplo prático

let first_name = "Rafael";
let idade = 41;
let altura = 1.82;

console.log("Meu nome é: " + first_name + ", e minha idade: " + idade + "anos.");
// Formatação
console.log("Meu nome é %s, e minha idade é %d anos e altura de %f.", first_name, idade, altura)
// Usando template literals com ` (mais moderno)
console.log(`Meu nome é ${nome}, e minha idade é ${idade} anos e altura de ${altura}.`);

let numeros = [25, 36, 35.6, 52]
console.log(numeros)