
const fs = require('fs');

console.clear();
console.log('*********************************');
console.log('* tablas de multiplicación del 9 *');
console.log('*********************************');

const num = 9;
let salida='';
for (let contad = 1; contad <= 10; contad++) {

    // console.log("El resultado de la multiplicación de " + contad + " x " + num + " = " + contad * num);
    salida += `${num} x ${contad} = ${contad * num}\n`;
   
}

console.log(salida);

fs.writeFileSync(`tabla del ${num}.txt`, salida);
console.log(`tabla del - ${salida}.txt creado`);
