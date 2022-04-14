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
