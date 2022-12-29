const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const pChild = document.createElement('p');
pChild.textContent = 'ME TOO!'

div.appendChild(h1);
div.appendChild(pChild);

container.appendChild(paragraph);
container.appendChild(h3);
container.appendChild(div);
