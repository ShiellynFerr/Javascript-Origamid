//FOREACH
//Constantemente vamos selecionar uma lista de itens do dom. 
//A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});


//PARÂMETROS DO FOREACH
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item.
// Essa função pode receber três parâmetros: valorAtual, index e array;

const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});
