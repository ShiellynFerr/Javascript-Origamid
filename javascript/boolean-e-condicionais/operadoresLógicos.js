//Operadores Lógicos &&
//Compara se uma expressão e outra é verdadeira
// se ele encontrar o valor falso é ele  que ele  vai retornar

true && true //true
true && false //false
false && true // false
(5 - 5) && (5 + 5) // 0
(5 >= 5) && (3 < 6) //true

if((5-5) && (5 + 5)) {
  console.log('Verdadeiro')
} else{
  console.log('Falso')
}


//Operador Lógico ||
//Compara se uma expressão ou outra é verdadeira

true || true // true
false || true // true
true  || false // true
(5-5) || (5+5) // true
false || false //false

//SWITCH
//Com o switch  verificamos se uma variavel  é igual á diferentes
//valores utilizando o CASE. Caso ela seja igual você pode fazer algo
// e utlizar a palavra chave BREAK; para cancelar a continuação
//

var corFavorita = 'verde';
switch (corFavorita) {
//caso seja isso
 case 'azul':
   console.log("Olhe para o céu")
   break;
   case 'amarelo':
   console.log("Olhe para o sol")
   break;
   case 'vermelho':
   console.log("Olhe para as rosas")
   break;
   case 'verde':
   console.log("Olhe para as árvores")
   break;
}