const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)
  walk(files, rootDir)
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    if (/\.git/g.test(fileFullPath)) continue // Retirar um arquivo específico
    if (/node_modules/g.test(fileFullPath)) continue // Retirar um arquivo específico

    if (stats.isDirectory()) {
      readdir(fileFullPath)
      continue
    }

    //    if (!/\.css$/g.test(fileFullPath)) continue // Encontar um tipo de arquivo apenas
    if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath))
      continue // Encontar dois tipos de arquivo apenas
    console.log(fileFullPath)
  }
}

readdir('C:/Users/Anderson/workspace/javascript/javascript/javascript/')

/*
fs.readdir(path.resolve(__dirname))
  .then(files => console.log(files))
  .catch(e => console.log(e))
*/
