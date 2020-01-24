function soma (x,y){
  if (
    typeof x !== 'number' || 
    typeof y !== 'number'
    ){
    throw('x e y precisam ser número');

  }
  return x + y;
}

console.log(soma())