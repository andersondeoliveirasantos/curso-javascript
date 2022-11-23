let arr = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4];

function interactArray(arr) { // Interar
  if(arr.length == 0) {
    throw new Error('Array must have at least one element.'); // O Array precisa ter pelo menos um elemento.
  } else {
    for(let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
}

function emptyArray(arr) {
  if(arr.length > 0) {
    throw Error('Array cannot have elements.'); // O Array não pode ter elementos.
  } else {
    console.log('Now it worked'); // Agora deu certo
  }
}

interactArray(arr);
interactArray(arr2);