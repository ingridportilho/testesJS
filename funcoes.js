// let x = "";
// console.log(x);

// x = "oi";

function imprimeTexto(texto){
    console.log(texto);
}

imprimeTexto(soma(2,4));
imprimeTexto(apresentacao("Ingrid",21));
imprimeTexto(multiplica(soma(2,3)));

function soma(a,b){
    return a+b;
}

function apresentacao(nome, idade){
    return `Olá! Meu nome é ${nome} e tenho ${idade} anos.`;
}

function multiplica(a=1,b=1){
    return a*b;
}

