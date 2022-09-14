const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)
  TreeWalker(files)
}

function walk(files) {
  for (let file of files) {
    console.log(file)
  }
}

readdir('C:/Users/Anderson/workspace/javascript/javascript/javascript/')

/*
fs.readdir(path.resolve(__dirname))
  .then(files => console.log(files))
  .catch(e => console.log(e))
*/
