var formulario = document.getElementById("formulario");
var nombreInput = document.getElementById("nombre");
var horasInput = document.getElementById("horas");
var sueldoInput = document.getElementById("sueldo");
var resultadoDiv = document.getElementById("resultado");

const horas1 = document.getElementById("horas");
const nombre1 = document.getElementById("nombre");
const sueldo1 = document.getElementById("sueldo");


function sumar(){
event.preventDefault();

var sueldo12 = sueldo1.value;
var nombre12 = nombre1.value;
const horasSumas = horasInput.value.split(",");
let suma = 0;
for (const numero of horasSumas) {
    suma += parseFloat(numero);
}



var horas12 = suma.value;

var pago = suma*sueldo12;
console.log(pago);
console.log(horas12);
console.log(sueldo12);
console.log(nombre12);

document.getElementById("resultado").innerHTML = `
<p>El empleado ${nombre12} debe cobrar $${pago}</p>
`
}
