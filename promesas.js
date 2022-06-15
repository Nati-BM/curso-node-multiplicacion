const empleados = [
{
    id: 1,
    nombre: "Maria"
},
{
    id: 2,
    nombre: "Josue"

},
{
    id: 3,
    nombre: "Diego"
}
];

const salarios =[
{
    id: 1,
    salario: 2000
},
{
    id: 2,
    salario: 1500
},
{
    id: 3,
    salario: 3000

}
];

const getEmpleado = (id) =>{
    return new Promise((resolve,reject)=>{
        const empleado = empleados.find(a=> a.id===id)?.nombre;
        (empleado)
        ? resolve(empleado)
        :reject(`no existe el empleado con id ${id}`);
    });
}
const getSalario= ()=>{
    return new Promise((resolve, reject)=>{
        const salario=salarios.find(s=> s.id===id)?.salario;
        (salario)
        ? resolve(salario)
        :reject(`No existe una persona con el sueldo mencionado ${id}`);

    });
}

const id = 3;

/* getEmpleado(id)
    .then(empleado=>console.log(empleado))
    .catch(err=>console.log(err));

getSalario(id)
    .then(salario=>console.log(salario))
    .catch(err=>console.log(err));*/

    //Promises Help otro ejemplo

   /* getEmpleado(id)
        .then(empleado=> {

        getSalario(id)
        .then(salario=>{
            console.log('el empleado: ', empleado, 'tiene un salario de: ',salario);
        })

        .catch(err=>console.log(err));

        })

       .catch(err=>console.log(err));
       */
        let nomb;
       getEmpleado(id)
        .then(empleado=> {
            nomb=empleado;
            return getSalario(id)
        })

        .then(salario=>console.log('El empleado: ', nomb, 'tiene un salario de :', salario))
        .catch(err=>console.log(err));

        