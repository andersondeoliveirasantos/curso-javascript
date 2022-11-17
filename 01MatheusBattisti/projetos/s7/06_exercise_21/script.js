function checkDataType(givenAway) {

  if(typeof givenAway === 'string') {
    console.log(`This data is a string`)

  } else if(typeof givenAway === 'number') {
    console.log(`this data is a number`)

  } else if(typeof givenAway === 'boolean') {
    console.log(`This data is a boolean`)
  }
}

checkDataType(true)
checkDataType(23)
checkDataType('Test')