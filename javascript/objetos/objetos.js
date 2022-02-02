//Objetos são conjuntos de variaveis e funções, que são chamados de 
//propriedades e métodos

//exemplo

var pessoa = {
  nome: 'Shiellyn',
  idade: 20,
  profissao: 'Desenvolvedora Front-end',
  possuiFaculdade: false
}

console.log(pessoa.nome) //Shiellyn
console.log(pessoa.profissao)//false


//Métodos 
//É uma propriedade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//ORGANIZAR CÓDIGO
//Objetos servem para organizar o código em pequenas partes reutilizáveis

//DOT NOTATION GET
//Acesse as propriedades usando .

var menu = {
  width: 800,
  height:  50,
  backgroundColor: '#84e'
}

// DOT NOTATION SET
//Substitua o valor de uma propriedade utilizando . e = após o nome da mesma


menu.backgroundColor = "#fff"
console.log(menu.backgroundColor)
var bg = menu.backgroundColor


//Protótipo e Herança
//o objeto herda propriedades e métodos do objeto que foi utilizado para
//criar o mesmo
