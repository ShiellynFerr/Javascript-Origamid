console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

window.alert('HELLO WORD');

 const h1selecionado = document.querySelector('h1')

 //Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

 const titulo = document.querySelector('h1');

 titulo.innerText; // retorna o texto;
 titulo.classList; // retorna as classes;
 titulo.id; // retorna o id;
 titulo.offsetHeight; // retorna a altura do elemento;
 
//  titulo.addEventListener('click', callback);
 // ativa a função callback ao click no titulo

 h1selecionado.addEventListener('click', function(){
   console.log('clicou em',  h1selecionado)
 })

//EXERCICIOS

 // Retorne o url da página atual utilizando o objeto window

 const enderecoPagina = window.location.href;
 console.log(enderecoPagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo = document.querySelector('.ativo')
// Retorne a linguagem do navegador
 const idiomaNavegador = window.navigator.language;
 console.log(idiomaNavegador)


// Retorne a largura da janela 

const Janela = window.innerWidth;
console.log(Janela);