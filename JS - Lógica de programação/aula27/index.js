// Operação ternária

const pontuacaoUsuario = 9199;
if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP')
} else {
  console.log('Usuário normal')
}
//(condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

//                   {... condição           }   {valor true}    {valor false}
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario)

// 