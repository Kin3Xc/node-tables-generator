const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

function main(){
  console.clear()

  console.log(argv)
  
  crearArchivo(argv)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

main();