alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 20;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


//enqunto não for ingual a regra do jogo ele ficara rodando

while (chute != numeroSecreto){
  chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);

  // se chute for igual ap numero secreto
  if (numeroSecreto == chute) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que o ${chute}`);
    } else {
      alert(`O número secreto é maior que o ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
  }
}
// forma mais resumida de representar, sem utilizar varios if

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


// if(tentativas > 1){
// alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//   alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);

// }



// alert('Boas vidas ao nosso site!!!');

// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// alert('Erro! Preencha todos os campos.');
// let mensagemDeErro = 'Erro! Prencha todos os campos';
// alert(mensagemDeErro)

// nome = prompt('Qual o nome do seu USUARIO');



// idade = prompt('Qual a sua idade')

// if(idade >= 18 ) {
//     alert('Você Pode tirar sua habilitação!!');
// }
// else(idade < 18) 
//     alert('você aidan não pode tirar a habilitação!!');

//     if(nome == 'lua'){
//         alerta('usaraio correto')
//     }
    




// let fimDaSemana = 'Sabado';
// let resposta = prompt('Qual o dia da semana')

// if(fimDaSemana == resposta){
//     alert('Bom final de semana')
// }
// else{
//     alert('Boa semana');
// }


// diaDaSemana = prompt('Qual o dia da semana');
// if (diaDaSemana == 'Sabado'){
//     alert('Bom fim de semana');
// } else if(diaDaSemana == 'Domingo'){
//     alert('Bom fim de semana');
// } else{
//     alert('Boa semana')
// }


// numeroPositivo = prompt('Digite seu numero')

// if(numeroPositivo > 0){
//     alert('Esse numero é POSITIVO')
// }else {
//     alert('Esse numero é NEGATIVO')
// }



// seusPontos = prompt('Digite seus pontos')

// if(seusPontos >= 100){
//     alert('Parabéns, você venceu')
// }else{
//     alert('Tente novamente para ganhar')
// }


// nomeDeUsuario = prompt('Qual é o seu usuario');


// if(nomeDeUsuario == 'David'){
//     alert('Boas vindas Senhor David')
// }else{
//     alert('AVISO um intruso tentou logar')
// }


// numero = prompt('Digite seu NUMERO');

// if(numero %2 === 0){
//     alert('Esse numero é PAR')
// }else{
//     alert('Esse numero é IMPAR')
// }


// contar de 10 ate 0 
// let contador = 10;

// while(contador >= 1){
//   console.log(contador);
//   contador--;
// }

// contagem regraciva 
// let contagem = prompt("digite o numero para contagem regreciva");


// while(contagem >= 0 ){
//   console.log(contagem);
//   contagem--;
// }

//contagem progressiva
// let contagem = prompt("digite o numero para contagem regreciva");

// let contador1 = 0;


// while(contador1 <= contagem ){
//   console.log(contagem);
//   contagem++;
// }



// let valor1 = 6;
// let valor2 = 4;

// let resultado = valor1 + valor2;
// console.log(resultado);