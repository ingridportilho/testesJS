//bolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 -> false
// 1 -> true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

//null => vazio ou nada 

let minhaVar; //undefined, valor indefinido
let varNull = null; //null, valor vazio

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";
console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);
//retorna object, pois quando o null foi criado no JS,
//ele foi criado como objeto. É um bug que não mexem para não prejudicar programas existentes
