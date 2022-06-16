const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base debe ser un número'
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