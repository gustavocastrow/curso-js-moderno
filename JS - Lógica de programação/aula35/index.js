const frutas = ['Pera', 'Maça', 'Uva'];


// for in lê os índices ou chaves do objeto
for (let i in frutas){
  console.log(frutas[i]);
}


const pessoa = {
  nome: 'Gustavo',
  sobrenome: 'Castro',
  idade: 30
};

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);

for (let i in pessoa){
  console.log(pessoa[i]);
}

for (let chave in pessoa){
  console.log(chave, pessoa[chave]);
}