const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const crearArchivo = (base = 2, listar = false) => {
    return new Promise((resolve, reject) => {
        if (isNaN(base)) return reject('La base debe de ser un numero')

       if (listar) {

            console.log('*************************'.cyan);
            console.log('   tabla del:'.red, base);
            console.log('*************************'.cyan );

        }


        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${(base).toString().green} ${'*'.yellow} ${(i).toString().green} ${'='.yellow} ${(base * i).toString().cyan}\n`;
        }
        if (listar) {
           console.log(salida);
        }

       fs.writeFileSync(`tabla${base}.txt`, salida);

       console.log(`tabla ${base}.txt creado`);
        resolve(`tabla${base}.txt`)


    })

}

module.exports = {crearArchivo}