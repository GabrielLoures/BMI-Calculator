// IMPORTS

import { Modal } from './modal.js';
import { AlertError } from './alert-error.js'
import { calcIMC, notNumber } from './utils.js';

// VARIÁVEIS

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

//FUNÇÕES

function formSubmit(e) {
  e.preventDefault(); // função para evitar que o form recarregue a página quando clicamos no botão, já que esse ato é um padrão do formulário

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(height) || notNumber(weight) // criamos essa variável que terá valor true ou false

  if (weightOrHeightIsNotANumber === true) { // se a const da condicional for true não precisamos colocar o sinal de ===, basta colocar direto ela no argumento do if (eu coloquei para ficar mais claro)
    AlertError.open()
    return; // usamos esse return puro dentro do if para ele parar a aplicação se o if for validado
  }

  const result = calcIMC(weight, height)
  displayResultMessage(result)
  
}

function displayResultMessage(result) { // função para abria a janela com a mensagem do resultado total do IMC
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message // funcionalidade para mudarmos o texto presente no HTML para o texto criado na const message
  Modal.open()
}

function closeAlertMessage() {
  AlertError.close()
}

//EVENTOS

form.onsubmit = formSubmit;

inputHeight.oninput = () => AlertError.close() // o evento "oninput" é acionado quando começamos a digitar no input selecionado
inputWeight.oninput = () => AlertError.close()





