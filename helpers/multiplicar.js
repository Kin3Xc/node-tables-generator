const fs = require("fs");
const colors = require('colors');

const crearArchivo = async ({base, listar, hasta}) => {
  try {
    let salida = "";

    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }

    if (listar) {
      console.log(colors.green("============================"));
      console.log(colors.red("        Tabla del: ", base));
      console.log(colors.green("============================"));

      console.log(colors.blue(salida));
    }

    fs.writeFileSync(`./tables/table-${base}.txt`, salida);

    return `archivo ${colors.green(`tabla-${base}.txt`)} creado correctamente!`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
