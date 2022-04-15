const h1 = document.querySelector('.container h1')
const data = new Date()

function getDayWeekTest(diaSemana) {
  let diaSemanaTexto

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Sunday'
      return diaSemanaTexto
    case 1:
      diaSemanaTexto = 'Monday'
      return diaSemanaTexto
    case 2:
      diaSemanaTexto = 'Tuesday'
      return diaSemanaTexto
    case 3:
      diaSemanaTexto = 'Wednesday'
      return diaSemanaTexto
    case 4:
      diaSemanaTexto = 'Thursday'
      return diaSemanaTexto
    case 5:
      diaSemanaTexto = 'Friday'
      return diaSemanaTexto
    case 6:
      diaSemanaTexto = 'Saturday'
      return diaSemanaTexto
    default:
      diaSemanaTexto = ''
      return diaSemanaTexto
  }
}

function getNameMonth(numberMonth) {
  let nameMonth

  switch (numberMonth) {
    case 0:
      nameMonth = 'January'
      return nameMonth
    case 1:
      nameMonth = 'February'
      return nameMonth
    case 2:
      nameMonth = 'March'
      return nameMonth
    case 3:
      nameMonth = 'April'
      return nameMonth
    case 4:
      nameMonth = 'May'
      return nameMonth
    case 5:
      nameMonth = 'June'
      return nameMonth
    case 6:
      nameMonth = 'July'
      return nameMonth
    case 7:
      nameMonth = 'August'
      return nameMonth
    case 8:
      nameMonth = 'Setember'
      return nameMonth
    case 9:
      nameMonth = 'October'
      return nameMonth
    case 10:
      nameMonth = 'November'
      return nameMonth
    case 11:
      nameMonth = 'December'
      return nameMonth
  }
}

function createDate(date) {
  const dayWeek = data.getDay()
  const numberMonth = data.getMonth
}

h1.innerHTML = getDayWeekTest(data.getDay())
