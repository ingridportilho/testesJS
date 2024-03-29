const texto1 = "Olá mundo";
//em casos de citação, podemos colocar aspas simples e duplas

const citacao = 'O Leo disse "oi!" ';

console.log(texto1);
console.log(citacao);

//concatenação é com +

console.log("Meu nome é " + "Ingrid");

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
//o \u diz para o JS que é para interpretar
//um unicode
//JS usa UTF-16, ou seja, 16 bits para cada caractere
//JS é case sensitive
// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)

const cidade = "Belo Horizonte";
const cidadeMinuscula = cidade.toLowerCase();
const cidadeMaiuscula = cidade.toUpperCase();
console.log(cidadeMinuscula);
console.log(cidadeMaiuscula); 
console.log(cidade.length)

//TEMPLATE STRING (foi introduzido no ES6)
//---com acento grave (`) e a variável entre ${variavel}
const nome = "Ingrid";
const idade = 2021 - 2000;
const cidadeNascimento = 'Trindade';
// const apresent = "meu nome é "+ nome + " minha idade é " + idade + " e nasci em " + cidadeNascimento;

const apresent = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}`;
console.log(apresent);