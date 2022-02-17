

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

//SELETOR GERAL ÚNICO
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const linksInternos = document.querySelector('[href^="#"]')

// Busca dentro do Ul apenas
// const navItem = primeiroUl.querySelector('li');

//SELETOR GERAL LISTA
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

//HTMLCOLLECTION VS NODELIST
//A diferença está nos métodos e propriedades de ambas.
// Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

//CLASSLIST
//Retorna uma lista com as classes do elemento. 
//Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');
menu.classList.add('ativo')
menu.classList.toggle('azul')

//ATTRIBUTES
//Retorna uma array-like com os atributos do elemento.

const animais = document.getElementById('animais')
console.log(animais.attributes)


//GETATTRIBUTE E SETATTRIBUTE
//Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

console.log(img.getAttribute('src'))

img.setAttribute('alt', 'é uma raposa')