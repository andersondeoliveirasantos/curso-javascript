let person = {
  "name": "Anderson",
  "age": 41,
  "position": "Developer",
  "hobbies": ["Video-game", "Reading", "Run"],
}

let personText = JSON.stringify(person)

console.log(personText)

console.log('break')

/* *************************************** */

let personJSON = JSON.parse(personText)

console.log(personJSON)

console.log('break')

console.log(personJSON.hobbies[0])