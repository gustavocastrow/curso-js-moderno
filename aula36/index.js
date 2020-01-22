const nome = 'Gustavo Castro';


//for clássico: geralmente com iteráveis (array ou strings);
//for in: retorna o índice ou chave (string, array, ou objetos);
//for of: retorn o valor em si (literáveis, arrays, ou strings);

for (let i =0; i< nome.length; i++){
  console.log(nome[i]);

}

for (let i in nome){
  console.log(nome[i]);
}

for (let valor of nome){
  console.log(valor);
}