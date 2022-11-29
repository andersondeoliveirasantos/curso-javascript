let newElement = document.createElement('p')
let text = document.createTextNode('Some text')

newElement.appendChild(text)

let targertElement = document.querySelector('#main-title')

let fatherElement = document.querySelector('#main-container')

fatherElement.insertBefore(newElement, targertElement)
