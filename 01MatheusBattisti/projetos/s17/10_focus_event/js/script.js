let input = document.querySelector('#input1');

input.addEventListener('focus', function() {
  console.log('Entered the input'); // Entrou no input
});

input.addEventListener('blur', function() {
  console.log('Left the input'); // Saiu do input
});
