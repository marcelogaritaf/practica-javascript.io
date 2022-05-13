/*var nombre = prompt("Digite el nombre");//hacer las preguntas convicionales 
var edad = prompt("Digite la edad");;
var telefono = prompt("Digite el telefono");;
var mensaje = "Nombre: "+ nombre + " Edad: " + edad + " Telefono: "+ telefono; 
alert(mensaje);*/

/**parte de practica
window.onload = iniciar; //para que cuando se cargue en al navegador corra la funcion

function iniciar(){
     var btnCalcular = document.getElementById("btnCalcular");
     btnCalcular.addEventListener("click", clickCalcular);//despues del click hace lo de la funcion calcular
}
function clickCalcular(){//funcion donde tendra todo los que se haga despues del evento click
    var txtAltura = document.getElementById("txtaltura");
    var altura = txtAltura.value;
    alert("altura: "+altura);

    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;//adquiere lo del espacio de texto 
    alert("peso: "+peso);
    
    var operacion = peso /(altura *altura);
    alert("IMC: "+math.round(operacion));//para redondear el resultado para eso sirve el math.round
}*/

/**parte practica de vectores 
window.onload = iniciar;
//se crea el arreglo 
var tareas = [];
//inicia el programa iniciando y cargando todo lo del html 
function iniciar(){
    var btnagregar = document.getElementById("btnagregar");
    btnagregar.addEventListener("click", agregar);
}
//se crea la funcion de agregar los elementos al arreglo desde el campo del html txttarea
function agregar(){
    var txttarea = document.getElementById("txttarea");
    var tarea = txttarea.value;
    tareas.push(tarea);
    mostrarTareas();
}
//funcion del mostrar las tareas 
function mostrarTareas(){
    var listado = document.getElementById("listado");
    var html= "";
    debugger;
    for(var tarea of tareas){
        html += tarea + "<br/>";
    }
    listado.innerHTML = html;
    console.log();
}*/

/**objetos */


