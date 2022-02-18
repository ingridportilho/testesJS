// == (comparação implícita)
// compara só os valores e realiza a conversão implícita

// const numero = 5;
// const texto = "5";

// console.log(numero == texto);//true
// console.log(numero === texto);//false

// === compara valor e tipo de dados
// boa prática é usar === e conversão explícita 
// console.log(typeof numero);
// console.log(typeof texto);

//outros operadores
// || -> ou
// && -> e
// != -> não igual
// !== -> estritamente não igual

//OPERADOR TERNÁRIO

const idadeMinima = 18;
const idadeCliente = 16;
                //condição               //true    //false
console.log(idadeCliente>=idadeMinima ? "cerveja" : "suco");
//para comparações pequenas é boa prática
//para comparações grandes não é boa prática