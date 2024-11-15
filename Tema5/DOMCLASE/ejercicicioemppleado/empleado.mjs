export { Empleado };

class Empleado{
    constructor(codigo, nombre, telefono){
        this.codigo= codigo;
        this.nombre= nombre;
        this.telefono=telefono;
    }
    muestraEmpleado(){
        console.log("empleado:" + this.codigo+ "- " + this.nombre+ this.telefono);

    }  
}
