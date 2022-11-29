let newElement = document.createElement('p')
let text = document.createTextNode('Some text')

newElement.appendChild(text)

let heading = document.querySelector('#main-title')
let fatherHeading = heading.parentNode

fatherHeading.replaceChild(newElement, heading)