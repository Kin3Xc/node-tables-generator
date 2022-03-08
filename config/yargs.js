const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true, // requiered
    default: 5,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Indica hasta donde se debería generar la tabla'
  })
  .check((argv, options) => {
    console.log("yargs: ", argv);
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;


module.exports = argv;