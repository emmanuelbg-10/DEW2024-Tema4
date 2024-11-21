const divAnimals = document.getElementById('animals');

data.forEach(animal => {
  const span = document.createElement('span');
  span.innerHTML = '&#' + animal.code + ';';
  span.id = 'animal_' + animal.code;
  span.title = animal.name;

  divAnimals.append(span);
});

const categories = new Set(...data.map(a => a.category));
console.log(categories);