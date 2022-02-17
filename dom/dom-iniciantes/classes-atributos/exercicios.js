
//Exercicios

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove('ativo')
});

itensMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img')

imagens.forEach((img)=> {
  const possuiAlt = img.hasAttribute('alt')
  console.log(possuiAlt)
})

// Modifique o href do link externo no menu

const modificarHref =  document.querySelector('a[href^="http"]')
modificarHref.setAttribute('href', 'https://www.youtube.com/')
