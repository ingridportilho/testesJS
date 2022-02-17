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

console.log(numero + Number(numeroString));
