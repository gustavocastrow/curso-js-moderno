//Escreva uma função que recebe um número e retorne o seguinte.
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 ou 5 = FizzBuzz
//Número NÃO é divisivel por 3 ou 5 = Número
//Use a função com números de 0 a 100
//Checar se o número é realmente um número.

function fizzBuzz(n){
  if (typeof n !== 'number') return NaN;
  if (n % 3 === 0 && n % 5 === 0) return '3 e 5 FizzBuzz';
  if (n % 3 === 0) return '3 Fizz';
  if (n % 5 === 0) return '5 Buzz';
  

  return n;


}

for (let i = 0; i<=100; i++){
  console.log(i, fizzBuzz(i));
}



