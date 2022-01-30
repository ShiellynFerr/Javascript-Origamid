//Números

var idade = 2e1;
console.log(idade)
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10 //20000000000

var testeNaN = "esse número é 100" / 2;
console.log(testeNaN)
console.log(isNaN(testeNaN))

//A ordem importa

// - mutiplicação, divisão, soma e substração
// os parênteses priorizam uma expressão

var total1 =  20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; // 50 segue a ordem definida
var total4 = 10 + 10 * 2 + 20 /2; //40

console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);


//operadores aritméticos unários

var incremento = 5
console.log(incremento++)
console.log(incremento)
// 5 = 5 + 1 = 6

var decremento = 5
console.log(--decremento)
// 5 = 5 - 1 = 4
 

//operadores Ariméticos Unarios
// + e -  tenta transformar  o valor seguinte  em numero

var idadeNew = "20"
+idade
console.log( +idade + 5)

var possuiFaculdade = true;
console.log(+possuiFaculdade)
