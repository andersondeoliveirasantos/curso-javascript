let element = document.querySelector('#main-title')

console.log('Width: ' + element.offsetWidth) // consider edges ( considera boras )
console.log('Height: ' + element.offsetHeight)

console.log('Width: ' + element.clientWidth) // does not consider edges ( não considera boras )
console.log('Height: ' + element.clientHeight)