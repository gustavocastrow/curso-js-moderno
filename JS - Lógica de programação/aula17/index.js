function saudacao(nome){
  return `Boa tarde ${nome}`

}

const variavel = saudacao('Gustavo');
console.log(variavel);


function soma(x, y) {
  const resultado = x + y;
  return resultado 
}

console.log(soma(4,2));
console.log(soma(4,4));
console.log(soma(5,4));

const raiz = function(n){ //arrow function = "const raiz = (n) => n ** 0.5;"
  return n ** 0.5;

};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));