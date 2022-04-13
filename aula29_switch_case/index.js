function getDiaSemanaTexto (diaSemana ) {
  let diaSemanaTexto

  switch (diaSemana) {
    case 0
      diaSemanaTexto = 'Sunday'
      return diaSemanaTexto
    case 1
      diaSemanaTexto = 'Monday'
    case 2
      diaSemanaTexto = 'Tuesday'
    case 3
      diaSemanaTexto = 'Wednesday'
    case 4 
      diaSemanaTexto = 'Thursday'
    case 5 
      diaSemanaTexto = 'Friday'
    case 6 
      diaSemanaTexto = 'Saturday'
  }
}

const data = new Date('1987-04-26 00:00:00')
let diaSemana = data.getDay()

console.log(diaSemana, diaSemanaTexto)



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
