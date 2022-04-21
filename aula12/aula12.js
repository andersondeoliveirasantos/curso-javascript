let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
/*
const varATemp = varA
varA = varB
varB = varC
varC = varATemp
*/
;[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)

console.log(varC, varB, varA)

console.log('Acabei de subir esse arquivo !!!')
