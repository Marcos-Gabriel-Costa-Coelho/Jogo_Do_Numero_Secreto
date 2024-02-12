let listaDeNumeroSortiados = [];
let limiteDeNuneros = 10;

let numeroSecreto =  geraNumeroAleatorio(); 
let tentativas = 1; 

function exibirTextoNaTela(tag,  texto ) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInical(){
     exibirTextoNaTela('h1', 'jogo do numero secreto');
     exibirTextoNaTela('p',  'escolha um numero entre 1 a 10');
}

exibirMensagemInical();

   function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
         exibirTextoNaTela('h1',  'acertou');
            let palavraTentariva = tentativas > 1 ? 'tentativas' : 'tentativa';

               let mensagemTentativas = `Parabens voce acertou o numero secreto com ${tentativas} ${palavraTentariva}!`;

           exibirTextoNaTela('p',  mensagemTentativas);
           document.getElementById('reiniciar').removeAttribute('disabled');

           } else {
              if (chute > numeroSecreto) {
               exibirTextoNaTela('p',  'o numero secreto é menor');
            } else {
                  exibirTextoNaTela('p', 'o numero secreto é maior');
             }
             tentativas++;
             limparCampo();
        }
   }

    function geraNumeroAleatorio() {
     let numeroEscolido = parseInt( Math.random() * limiteDeNuneros + 1 ); 
     let quantidadeDeElementosNaLista = listaDeNumeroSortiados.length;
     
     if(quantidadeDeElementosNaLista == limiteDeNuneros){
          listaDeNumeroSortiados = [];
     }

     if(listaDeNumeroSortiados.includes(numeroEscolido)) {
          return geraNumeroAleatorio();
      } else {
          listaDeNumeroSortiados.push (numeroEscolido);
        console.log(listaDeNumeroSortiados)
          return numeroEscolido;
      }
    }

    function limparCampo(){
     chute = document.querySelector('input');
     chute.value = '';
    }
    function reiniciarJogo(){
     numeroSecreto = geraNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInical();
    }