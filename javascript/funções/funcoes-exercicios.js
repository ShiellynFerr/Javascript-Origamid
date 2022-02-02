// Crie uma função para verificar se um valor é Truthy

function verdadeiro(valor) {
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  const nomeInteiro = nome + sobrenome;
  return nomeInteiro;
}

console.log(nomeCompleto(" Shiellyn ", " Ferreira "));

// Crie uma função que verifica se um número é par

function par(numero) {
  var modulo = numero % 2;
  if (modulo !== 0) {
    return `O numero ${numero} não é par`;
  } else {
    return `O numero ${numero}  é  par`;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
//funções nativas são funções que já existem no javascript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Shiellyn Bruna Ferreira");
});

//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);


// function DashInsert(str) { 

//   var idx = 0;
//    while (idx < str.length-1) {
//        if (Number(str[idx]) % 2 === 1 && Number(str[idx+1]) % 2 === 1) {
//          str = str.slice(0,idx+1) + "-" + str.slice(idx+1);
//          idx = idx + 2;
//        }
//        else {  
//            idx++;
//        }
//  }
//  return str;  
        
// }


function DashInsert(str) { 

  let bil = 0;
   while (bil < str.length-1) {
       if (Number(str[bil]) % 2 === 1 && Number(str[bil+1]) % 2 === 1) {
         str = str.slice(0,bil+1) + "-" + str.slice(bil+1);
         bil = bil + 2;
       }
       else {  
           bil++;
       }
 }
 return str;  
        
}

console.log(DashInsert("454793"));


function MathChallenge(num) { 
 
  var divisao
  var novoNumero
 
  divisao = num % 2
  novoNumero = num / 2
  
  while(divisao === 0 && novoNumero !== 2){
   divisao = num % 2
   novoNumero = num / 2
  } if(novoNumero == 2){
    return true
  } else{
    return false
  }
   // code goes here  
   return num; 
 
 }