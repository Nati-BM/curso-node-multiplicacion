//const fs = require('fs');
const color =require('colors');
//const {crearArchivo} = require('./multiplicar');
//const argv = require('./configuracion/yargs');

const {crearArch} =require('./tabla20');
const argv = require('./configuracion/yarg2');

console.clear();

//crearArchivo(argv.b, argv.l)
crearArch(argv.n, argv.l,argv.h)
    .then(doc => { console.log(doc) })
    .catch(err => console.log(err));
