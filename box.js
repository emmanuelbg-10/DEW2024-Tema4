const container = document.querySelector('#container');
const btCreate = document.querySelector('#btCreate');

btCreate.addEventListener('click', createBox);

function createBox(event) {
  console.log('Creando caja');
  let box = document.createElement('div');
  box.classList.add('box');
  container.append(box);
  console.log(event);
  if (event.ctrlKey) {
    box.classList.add('azul');
  }
  if (event.altKey) {
    box.classList.add('amarillo');
  }
  box.addEventListener('click', deleteBox);
}

function deleteBox(event) {
  event.target.remove();
}
