//ESCOPO DE FUNÇÃO
//Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

//Declarar variáveis sem a palavra chave var, const ou let, 
//cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

//ESCOPO DE FUNÇÃO (PAI)
//Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca


//ESCOPO DE BLOCO
//Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma 
//de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

//{} CRIA UM BLOCO
//Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

//CONST
//Mantém o escopo no bloco, impede a redeclaração e impede a
// modificação do valor da variável, evitando bugs no código.

const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

//LET
//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

