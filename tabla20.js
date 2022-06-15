const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const crearArch = (indice = 2, listar = false,hasta=20) => {
    return new Promise((resolve, reject) => {
        if (isNaN(indice)) return reject('El indice debe de ser un numero')

        if (listar) {

            console.log('*************************'.cyan);
            console.log('   tabla del:'.red, indice);
            console.log('*************************'.cyan );

        }


        let resultado = '';
        let consola='';

        for (let i = 1; i <=hasta; i++) {
            resultado += `${indice} * ${i} = ${indice * i} \n`;
            consola += `${(indice).toString().green} ${'*'.yellow} ${(i).toString().green} ${'='.yellow} ${(indice * i).toString().cyan}\n`;
        }
        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./Resultados/tabla${indice}.txt`, resultado);

        console.log(`tabla ${indice}.txt creado`);
        resolve(`tabla${indice}.txt`)


    })

}

module.exports = {crearArch}