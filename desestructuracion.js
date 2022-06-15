const persona = {
    nombre: 'Maria',
    apellido: 'Gutierrez',
    edad: 4,

    getPersona () {
        return `${this.nombre} ${this.apellido} ${this.edad}`;
    }
}

/*const nombre = persona.nombre;
const apellido = persona.apellido;
const edad = persona.edad;*/

const {nombre,apellido,edad }=persona;

console.log(nombre,apellido,'tengo ',edad,' años');
//console.log(persona.getPerson());

const nombres=['Karla','Diana','Clara','Mariana'];
const [a1,a2,a3,a4]=nombres;

console.log(a1,a2,a3,a4);

