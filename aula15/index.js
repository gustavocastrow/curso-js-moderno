let num1 = 9.49;
let num2 = Math.floor(num1); // arredonda pra baixo.
let num3 = Math.ceil(num1);  // arredonda pra cima.
let num4 = Math.round(num1); // arredonda pra o número mais pŕoximo.

console.log(num2, num3, num4);

console.log(Math.max(1,3,5,34,5,34,34,43,645,3,42)); //retorna o maior número
console.log(Math.min(1,3,5,34,5,34,34,43,645,3,42)); //retorna o menor número

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); 
console.log(aleatorio);
//número aleátorio entre 10 e 5