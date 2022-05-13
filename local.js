window.onload = iniciar;
function iniciar(){//la funcion la accion que realiza el btn de la pagina del html y realiza la funcion correspondiente al evento click
    var boton = document.getElementById("boton");
    boton.addEventListener("click", agregar);
    var btn = document.getElementById("btn");
    btn.addEventListener("click", eliminar);
    mostrarNotas()
}
function eliminar(){
   localStorage.clear()//para borrar todos los datos guardados en el localstorage 
    mostrarNotas()//para que cuando se borren los datos se muestren de una vez 
}
function agregar(){
    var txt = document.getElementById("txt")//value.//******esto era para simplificar las linea de codigo en hacer solo una de codigo */
    var notas=[];
    if(localStorage.notas){/// es si hay una nota que la cargue pero sino hay no la carga
        notas =JSON.parse(localStorage.notas);//json.parse cambia de string a int 

    }
    notas.push(txt.value);
    localStorage.notas= JSON.stringify(notas); //esto realiza un guardado de la variable txt y al recargar la pagina no se borran // el json hace que se pueda guardar un arreglo para tener mas de una nota 
    // localStorage.notas = txt.value es de la forma basica y de mostrar solo un valor de la funcion y sin tener que meter el arreglo y los ifs 
    mostrarNotas();
}
function mostrarNotas(){
    var Divnotas= document.getElementById("notas");
    var notas=[];
    if(localStorage.notas){/// es si hay una nota que la cargue pero sino hay no la carga
        notas =JSON.parse(localStorage.notas);//json.parse cambia de string a int 

    }
    var html ="";
    for(var nota of notas){
        html += nota + "<br>";
    }
    Divnotas.innerHTML = html; //muestra la informacion en el campo correspondiente del html y lo que aqui se muestra es en contenido del texto solo que con el localstorage y no se borra
    // para la forma basica es quitar todo desde el arreglo hast el divnotas y se pone Divnotas.innerHtmnle = localStorage.notas 

}