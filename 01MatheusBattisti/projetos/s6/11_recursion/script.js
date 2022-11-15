function recursion(n) {
  if(n - 1 < 2) {
    console.log(`Recursion stopped`)
  } else if(n % 2 != 0) {
    console.log(`Odd number ${n}`)
    recursion(n - 1)
    } else {
      console.log(`Even number ${n}`)
      recursion(n - 2)
  }
}

recursion(39)
recursion(10)
recursion(55)