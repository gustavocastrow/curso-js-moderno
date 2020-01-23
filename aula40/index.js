//Escreva uma função chamada ePaisagem que recebe dois argumentos:
//largura e algura de uma imagem(number)
//retorne true se a imagem estiver no modo paisagem.( width > height)


function ePaisagem(width, height){
  if (width > height) {
    console.log(`A imagem está no modo paisagem`)
  } else {
    console.log(`A imagem NÃO está no modo paisagem`)
  }

}

ePaisagem(400,600);

//Arrow function.

const ePaisagemArrow = (w, h) => w > h;
console.log(ePaisagemArrow(1080,460))

