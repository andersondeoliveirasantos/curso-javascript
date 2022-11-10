let name = 'Anderson'

for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    name = 'João'
  }
  if (i == 5 && name == 'João' ) {
    console.log ('The name is João, can stop')
    break
  }
  console.log(i)
}