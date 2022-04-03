// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// const tresHoras = 60 * 60 * 3 8 1000 // Equivale a três horas

// const umDia = 60 * 60 * 24 * 1000

// const data = new Date(0 + umDia) // 01/01/1970 Timestamp unix ou época unix

// const data = new Date(2022, 3, 20, 15, 14, 27, 500) // Ano, Mês, Dia, Hora, Minuto, Segundo, Milésimo de Segundo

const data = new Date('2019-04-20 20:15:59')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('Milésimo de Segundo', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) // 0 - Domingo e 6 - Sábado

console.log(data.toISOString())
