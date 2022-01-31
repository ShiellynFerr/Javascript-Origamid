// function areaQuadrado(){
//   return lado * lado;
// }

// areaQuadrado(4)//16
// areaQuadrado(5)//25
// areaQuadrado(2)//4

function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7


//Parametros e Argumentos
//ao criar uma função você pode definir parâmetros
//ao executar uma função, você pode passar argumentos

//peso e altura são os parâmetros
function imc (peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(47, 1.57))

// imc(80, 1.80) // 80 e 1.80 são os argumentos
// imc(60, 1.70)// 60 e 1.70 são os argumentos

//Argumentos podem ser funções
//Chamados de Calback geralmente são funções que ocorrem após
//algum evento

addEventListener('click', function(){ console.log('Olá')})