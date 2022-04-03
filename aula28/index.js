// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// const tresHoras = 60 * 60 * 3 8 1000 // Equivale a três horas

// const umDia = 60 * 60 * 24 * 1000

// const data = new Date(0 + umDia) // 01/01/1970 Timestamp unix ou época unix

// const data = new Date(2022, 3, 20, 15, 14, 27, 500) // Ano, Mês, Dia, Hora, Minuto, Segundo, Milésimo de Segundo

const data = new Date('2019-04-20 20:20:59')
console.log('Dia', data.getDate())
console.log('Mês', data.getDate())
console.log('Ano', data.getDate())
console.log('Hora', data.getDate())
console.log('Minuto', data.getDate())
console.log('Segundo', data.getDate())
console.log('Dia da semana', data.getDate())
console.log('Milésimo de Segundo', data.getDate())

console.log(data.toISOString())
