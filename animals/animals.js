const divAnimals = document.getElementById('animals');
const divCategories = document.getElementById('categories');

data.forEach(animal => {
  const span = document.createElement('span');
  span.innerHTML = '&#' + animal.code + ';';
  span.id = 'animal_' + animal.code;
  span.title = animal.name;
  span.draggable = true;
  span.dataset.category = animal.category;
  divAnimals.append(span);
});

const categories = new Set(data.map(a => a.category));
categories.forEach(category => {
  const div = document.createElement('div');
  div.classList.add('category');
  div.innerHTML = `<h2>${category}</h2>`;
  const panel = document.createElement('div');
  panel.classList.add('panel');
  panel.dataset.category = category;
  panel.addEventListener('drop', drop);
  div.append(panel);
  divCategories.append(div);
  });

  divAnimals.addEventListener('dragstart', (e) => {
    
    if (e.target.tagName === 'SPAN') {
      e.dataTransfer.setData('text/plain', e.target.id);
      console.log(e.dataTransfer.getData('text/plain'));
      document.querySelectorAll('.panel').forEach(p => {
      if (p.dataset.category == e.target.dataset.category) {
        p.addEventListener('dragover', dragOver);
      } else {
        p.removeEventListener('dragover', dragOver);
      }
      })
    }
  });

function dragOver(e) {
      e.preventDefault();
}

function drop(e) {
  const animal = document.getElementById(e.dataTransfer.getData('text/plain'));
  e.currentTarget.append(animal);
}