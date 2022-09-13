export const nome = 'Anderson'
export const sobrenome = 'de Oliveira Santos'
export const idade = 40

export function soma(x, y) {
  return x + y
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}
