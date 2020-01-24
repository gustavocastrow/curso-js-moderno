const elementos = [
  {tag: 'p', texto: 'Qualquer coisa 01'},
  {tag: 'div', texto: 'Qualquer coisa 02'},
  {tag: 'section', texto: 'Qualquer coisa 03'},
  {tag: 'footer', texto: 'Qualquer coisa 04'},

];


const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textCriado = document.createTextNode(texto);
  tagCriada.appendChild(textCriado);
  div.appendChild(tagCriada);
  
}

container.appendChild(div);
