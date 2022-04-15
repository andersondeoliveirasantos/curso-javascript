const h1 = document.querySelector('.container h1')
const data = new Date()

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
/*
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
*/
h1.innerHTML = getDayWeekTest(data.getDay())
