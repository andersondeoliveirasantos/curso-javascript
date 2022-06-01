function getDayWeekTest(dayWeek) {
  let dayWeekTest

  switch (dayWeek) {
    case 0:
      dayWeekTest = 'Sunday'
      return dayWeekTest
    case 1:
      dayWeekTest = 'Monday'
      return dayWeekTest
    case 2:
      dayWeekTest = 'Tuesday'
      return dayWeekTest
    case 3:
      dayWeekTest = 'Wednesday'
      return dayWeekTest
    case 4:
      dayWeekTest = 'Thursday'
      return dayWeekTest
    case 5:
      dayWeekTest = 'Friday'
      return dayWeekTest
    case 6:
      dayWeekTest = 'Saturday'
      return dayWeekTest
  }
}

const data = new Date('1987-04-26 00:00:00')
let dayWeek = data.getDay()

const dayWeekTest = getDayWeekTest(dayWeek)

console.log(dayWeek, dayWeekTest)

/* *****************************************
 ************ SWITCH e CASE ********************
********************************************
switch (diaSemana) {
  case 0:
    diaSemanaTexto = 'Sunday'
    break
  case 1:
    diaSemanaTexto = 'Monday'
    break
  case 2:
    diaSemanaTexto = 'Tuesday'
    break
  case 3:
    diaSemanaTexto = 'Wednesday'
    break
  case 4:
    diaSemanaTexto = 'Thursday'
    break
  case 5:
    diaSemanaTexto = 'Friday'
    break
  case 6:
    diaSemanaTexto = 'Saturday'
    break
  default:
    diaSemanaTexto = 'Não encontrado valor'
    break
}

console.log(diaSemana, diaSemanaTexto)
 ********************************************* */

/* *****************************************
 ************ IF e ELSE ********************
********************************************
if (diaSemana === 0) {
  diaSemanaTexto = 'Sunday'
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Monday'
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Tuesday'
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Wednesday'
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Thursday'
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Friday'
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Saturday'
} else {
  diaSemanaTexto = ''
}

console.log(diaSemana, diaSemanaTexto)
*/
