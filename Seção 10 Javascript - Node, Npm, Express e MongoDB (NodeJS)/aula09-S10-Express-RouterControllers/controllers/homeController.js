exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo"><br>
  <button>Hello world</button>
  </form>
  `)
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou a sua nova rota de POST')
}
