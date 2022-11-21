function checkTestSize(test) {
  if(test.length > 10) {
    console.log(`Test too long`)
  } else {
    console.log(`Test within the boundary`)
  }
  console.log(test.length) // Count the characters
}

checkTestSize(`Test`)
checkTestSize(`Let's test if it works`)
checkTestSize(`10-`)
checkTestSize(`Less than 10`)