const reg = /\w+: (Anderson|Daniela|Alice)/ 

console.log(reg.test('Nome: Anderson'))
console.log(reg.test('Nome: José'))
console.log(reg.test('Nome: Daniela'))