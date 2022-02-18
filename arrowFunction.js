//Arrow Function
//Surgiu no ES6
const apresentarArrow = nome => {`meu nome é ${nome}`};
const soma = (num1, num2) => num1+num2;
console.log(soma(1,2));

//Quando tiver mais de uma linha de instrução:
//adicionamos chaves e return

const somaNumerosPequenos = (num1, num2) =>{
    if(num1 || num2 >10){
        return "Somente números de 1 a 9";
    }else{
        return num1+num2;
    }
}

//Hoinsting: arrow function se comporta como expressão