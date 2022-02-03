var videoGames = ['Switch', 'Ps4', 'Xbox', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
}

//O loop irá parar caso encontro e palavra break

//forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});

var frutas = ['Maçã', 'Laranja', 'Abacaxi', 'Morango', 'Melancia']
frutas.forEach(function(fruta, index){
  console.log(fruta, index);
})
// O argumento item será atribuído dinamicamente

//EXERCICIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaBrasil = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < copaBrasil.length; i++) {
  console.log('Os anos que o Brasil ganhou a copa do mundo foi:' + copaBrasil[i] )
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta])
  if(frutas[fruta] === 'Pera'){
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

// var ultimaFruta = frutas[4];
var ultimaFruta = frutas[frutas.length - 1]; //uma forma melhor de puxar o ultimo valor da array
