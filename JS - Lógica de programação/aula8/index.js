/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.92
Luiz Otávio nasceu em 1980
*/

const nome = 'Gustavo';
const sobreNome = 'Castro';
const idade = 24;
const peso =  88;
const altura = 1.80;
let imc;
let anoNascimento;

//Calcular IMC (peso / altura * altura )
//Calcular ano de nascimento

imc = peso / (altura * altura);
anoNascimento = 2020 - idade;


console.log(`${nome} tem ${idade}, pesa ${peso}, tem ${altura}, 
e seu IMC é de ${imc}, e nasceu em ${anoNascimento}`)