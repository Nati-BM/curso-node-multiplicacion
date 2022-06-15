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
   
    const id = 4;

    const getUsuarioAs = async (id)=>{
       const empleado= await getEmpleado(id);
       const salario=await getSalario(id);
       return `el empleado es ${empleado} y su sueldo es de ${salario}`

    }
    
    getUsuarioAs(id)
    .then(mjs=>console.log(mjs))
    .catch(err=>console.log(err));

     
