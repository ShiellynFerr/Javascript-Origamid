//Boolean e condicionais
//existem dois valores true ou falso

//Verificação condicional no Javascript

//Verifica se uma expressão é verdadeira com if, caso contrário o else será ativado
// var possuiGraduação = true;

// if(possuiGraduação) {
//   console.log('possui Graduação')
// } else{
//   console.log('Não possui graduação')
// }

//Condicionais Else if
// Se o If não for verdadeiro ele testa o Else If

var possuiGraduação = false;
var possuiDoutorado = false;
var possuiGraduaçãoeDoutorado = false;

if(possuiGraduação) {
  console.log('possui Graduação')
} else if (possuiDoutorado){
  console.log('Possui Graduação mas não possui Doutorado')
} else if (possuiGraduaçãoeDoutorado){
  console.log('Possui graduação e doutorado')
} else{
  console.log('Não possui graduação nem doutorado')
}


//Truthy e Falsy

//Existem Valores que retornam true e outros que retornam 
//false quando verificamos em uma expressão booleana

var nome = ''
if(nome){
  console.log(nome)
} else {
  console.log('nome não existe')
}

//Operador Lógico de negação
//O operador !, nega uma operação booleana
//ou seja !true é igual a = false

// if(!true) false
// if(!1) false
//if (!'') false
//if(!undefined) false
//if(!' ') true
//if(!'') false

//OPERADORES DE COMPARAÇÃO
//sempre irão retornar um valor booleano

10 > 5 //true
5 < 10 //true
5 > 10 //false
20 < 10 // false
10 <= 10 // true
10 >= 11  //false

10 == '10' // true
10 == 10 // true
10 === '10' // false
10 != 15 // true
10 != '10' //false
10 !== '10' //true