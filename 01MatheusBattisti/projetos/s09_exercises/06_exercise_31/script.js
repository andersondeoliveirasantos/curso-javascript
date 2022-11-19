let numbers1 = [1, 2, 3, 4, 5, 6]

let numbers2 = [1, 2, 3]

function checkArrayElements(arr) {
  if(arr.length >= 5) {
    console.log('Many elements')
  } else {
    console.log('Few elements')
  }
}

checkArrayElements(numbers1)
checkArrayElements(numbers2)