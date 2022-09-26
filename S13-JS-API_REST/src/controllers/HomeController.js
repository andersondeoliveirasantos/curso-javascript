import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Daniela",
      sobrenome: "Cristina da Silva de Oliveira",
      email: "danicris@outlook.com",
      idade: 35,
      peso: 72,
      altura: 1.74,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
