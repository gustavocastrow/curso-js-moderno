const pessoa = {
  nome: 'Gustavo',
  sobrenome: 'Castro',
  endereco: {
    rua: 'Paulina Leite',
    numero: 320
  }
};

//Atribuição via desestruração 
const {nome, sobrenome } = pessoa;
console.log(nome, sobrenome)