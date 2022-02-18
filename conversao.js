//conversão implícita

const numero = 456;
const numeroString = "456a";

console.log(numero === numeroString);//false
console.log(numero == numeroString);//true
console.log(numero + numeroString);

//conversão explícita

// Number() -> transformar String em número
// se a Sting contém algum algarismo junto com os números, retorna NaN
// String() -> transformar número em String.
//toString() também funciona

console.log(numero + Number(numeroString));

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

