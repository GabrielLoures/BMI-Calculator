// VARIÁVEIS

export const Modal = { // criamos essa estrutura de dados em forma de objeto com funcionalidades e as constantes referentes ao Modal para deixar o código mais limpo e organizado (Object Literal)

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('#modal-message'),
  btnClose: document.querySelector('.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

// FUNÇÕES

Modal.btnClose.onclick = function() {
  Modal.close()
}

function handleKeydown(e) { // função para ativar a função de Modal.close() quando clicarmos no ESC
  if (e.key === 'Escape') {
    Modal.close()
  }
}

window.addEventListener('keydown', handleKeydown) // window é uma variável global presente no javascript 