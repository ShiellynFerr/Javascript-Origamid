//Verifique se a sua idade é maior do que a de algum parente
// depedendo do resultado coloque no console É Maior é igual

var minhaIdade = 20;
var idadeIrmao = 20;

if(minhaIdade < idadeIrmao){
  console.log("Você é mais nova que o seu irmão")
} else if(minhaIdade === idadeIrmao) {
  console.log("Você e seu irmão tem a mesma idade")
}
else{
  console.log("Você é mais velha que o seu irmão")
}

//qual valor é retornado na seguinte expressão
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

//verifique se as seguintes variaveis são truty ou falsy
var nome = 'André';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//compare o total de habitantes  do Brasil com os da china(Valor em milhões)
var brasil = 207;
var china  = 1340;

if(brasil > china) {
  console.log('O brasil possui mais habitantes que a china')
} else {
  console.log('O brasil possui menos habitantes que a china')
}

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro')
} else{
  console.log('Falso')
} // Falso