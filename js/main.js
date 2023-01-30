//Mensaje de ingrese su nombre

var mensaje;
var nombre = prompt("Ingrese Nombre o ID");
var nombreBold = nombre.bold();
var nombreSize = nombreBold.fontsize(4);
var nombreColor = nombreSize.fontcolor("A71C1E");

if (nombre == null || nombre == ""){
    mensaje = "Bienvenid@, <b> Kūhaku <b>.";

    } else {
        mensaje = "Bienvenid@, " + nombreColor + "."
    }

document.getElementById("bienvenido").innerHTML = mensaje;


/* 
condiciones
    e == enter
    i == imes
    a == ai
    o == ober
    u == ufat
*/

function encriptar() {
    var texto = document.getElementById("textarea1").value.toLowerCase();

    //i - afecta minusculas y mayusculas
    //g - agecta toda la linea u oración
    //n - afecta multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter")
    var txtCifrado = txtCifrado.replace(/i/igm,"imes")
    var txtCifrado = txtCifrado.replace(/a/igm,"ai")
    var txtCifrado = txtCifrado.replace(/o/igm,"ober")
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat")
    document.getElementById("instructionsID").style.display = "none";
    document.getElementById("textarea2").innerHTML = txtCifrado;
    document.getElementById("textareaID").style.display = "show";
    document.getElementById("textareaID").style.display = "inherit";

}

function desencriptar() {
    var texto = document.getElementById("textarea1").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm,"e")
    var txtCifrado = txtCifrado.replace(/imes/igm,"i")
    var txtCifrado = txtCifrado.replace(/ai/igm,"a")
    var txtCifrado = txtCifrado.replace(/ober/igm,"o")
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u")
    document.getElementById("instructionsID").style.display = "none";
    document.getElementById("textarea2").innerHTML = txtCifrado;
    document.getElementById("textareaID").style.display = "show";
    document.getElementById("textareaID").style.display = "inherit";
}


//funcion copiar

function copiar() {
    var contenido = document.getElementById("textarea2");
    contenido.select();
    navigator.clipboard.writeText(contenido.value);
}

function refreshPage(){
    window.location.reload();
} 