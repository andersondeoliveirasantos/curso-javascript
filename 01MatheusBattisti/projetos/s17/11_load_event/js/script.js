/*
window.addEventListener('load', function() {
  this.alert('Sign our terms of use') // Assine nossos termos de uso
})
*/

window.addEventListener('beforeunload', function(e) {
  event.returnValue = null;
})