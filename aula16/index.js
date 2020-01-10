const alunos = ['Luiz', 'Maria', 'Joao'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);
console.log(alunos.length);

alunos.push('Gustavo'); //adiciona no fim
alunos.push('Rafael');
console.log(alunos);

alunos.unshift('Marcelos'); //adiciona no inicio;
console.log(alunos);

alunos.pop(); //remove o ultimo elemento do array.

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

const removido2 = alunos.shift(); //remove o primeiro elemento do array.
console.log(removido2);
console.log(alunos);

console.log(alunos.slice(0,2));