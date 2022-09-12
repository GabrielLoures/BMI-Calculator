// IMPORTS

import { Modal } from './modal.js';

// VARIÁVEIS

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

//FUNÇÕES

function formSubmit(e) {
  e.preventDefault(); // função para evitar que o form recarregue a página quando clicamos no botão, já que esse ato é um padrão do formulário

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calcIMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message // funcionalidade para mudarmos o texto presente no HTML para o texto criado na const message
  Modal.open()
}

function calcIMC(weight, height) {
  return imc = (weight / ((height / 100) ** 2)).toFixed(2);
}

//EVENTOS

form.onsubmit = formSubmit;



