const { describe } = require('yargs');

const argv = require('yargs')
    .option('n', {
        alias: 'indice',
        type: 'number',
        demandOption: true,
        describe:'es el indice de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        defaulT:'20',
        describe:'hasta aqui es el de la tabla de multiplicar'
    })
    
    .check((argv, options) => {
        if (isNaN(argv.n)) {
            throw 'el indice debe ser un número'
        }
        return true;

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe:'muestra la tabla en consola'
    })
    .argv;

module.exports = argv;