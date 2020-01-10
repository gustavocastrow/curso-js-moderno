/*
Tipos de dados primitivos (imutaveis): string, number, boolean, undefined, null
(bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - valores passados por 
referência

*/

let a = [1,2,3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a,b);

console.log(c);


