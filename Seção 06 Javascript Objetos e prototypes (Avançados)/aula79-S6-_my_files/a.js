const pessoas = [
  { id: 3, nome: 'Anderson' },
  { id: 2, nome: 'Daniela' },
  { id: 1, nome: 'Alice' }
]

/*
const novasPessoas = {}
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas[id] = { ...pessoa }
}
*/

const novasPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}

console.log(novasPessoas)
