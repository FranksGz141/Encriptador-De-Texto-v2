<img src="https://raw.githubusercontent.com/FranksGz141/Encriptador-De-Texto-v2/main/img/logo_red1.png" style="max-width: 100%;" alt="logo">

<br>
<h1>Encriptador de texto v2</h1>

<p>BIenvenido al programa, <strong>Encriptador de Texto</strong>, en esta página encontrarás una herramienta que te ayudará a cifrar tus textos, mensajes y/o documentos, creando mensajes privados entre emisor y receptor, o guardar información privada.</p>
<P>También podrás <strong>Desencriptar</strong> los mensajes previamente cifrados con este mismo programa.</P>

<h5>Visita la pagina <a href="https://franksgz141.github.io/Encriptador-De-Texto-v2/" target="_blank">aquí</a>.</h5>

<br>
<h3>Caracteristicas.</h3>

<h4>Version 2.0.141.b</h4>
- Desarrollado en HTML, CSS y JS.<br>
- Diseño web adaptativa.		<sup>*en prueba</sup><br>
- Se agrego un espacio para las instrucciones.<br>
- Cuenta con un registro de ID.		<sup>*nuevo</sup><br>
- Se implementó un botón de <strong>Reset</strong> (refresca y/o actualiza la página).		<sup>*nuevo</sup>

<br>
<br>
<h3>ScreenShot.</h3>
<br>
<img src="https://raw.githubusercontent.com/FranksGz141/Encriptador-De-Texto-v2/main/screenshot/desktop_SS.png" style="max-width: 100%;" title="Desktop" alt="desktop">
<br>
<img src="https://raw.githubusercontent.com/FranksGz141/Encriptador-De-Texto-v2/main/screenshot/mobile_SS.png" style="max-width: 100%;" title="Mobile" alt="mobile">
<br>
<img src="https://raw.githubusercontent.com/FranksGz141/Encriptador-De-Texto-v2/main/screenshot/tablet_SS.png" style="max-width: 100%;" title="Tablet" alt="tablet">

<br>
<h3>Funciones.</h3>

<p>La funcion del programa se centra en una condición para el cifrado de los textos, la cual es:</p>

<p>La letra "e" es convertida para "enter"<br>
La letra "i" es convertida para "imes"<br>
La letra "a" es convertida para "ai"<br>
La letra "o" es convertida para "ober"<br>
La letra "u" es convertida para "ufat"</p>

<p>Y utilizando funciones en JavaScript se puede cifrar como descifrar el texto ingresado.</p>

<p>Ejemplo de función:</p>

`ENCRIPTAR` <br>
`var txtCifrado = texto.replace(/e/igm,"enter")` <br>
`var txtCifrado = txtCifrado.replace(/i/igm,"imes")` <br>
`var txtCifrado = txtCifrado.replace(/a/igm,"ai")` <br>
`var txtCifrado = txtCifrado.replace(/o/igm,"ober")` <br>
`var txtCifrado = txtCifrado.replace(/u/igm,"ufat")` <br>
<br>

`DESENCRIPTAR` <br>
`var txtCifrado = texto.replace(/enter/igm,"e")` <br>
`var txtCifrado = txtCifrado.replace(/imes/igm,"i")` <br>
`var txtCifrado = txtCifrado.replace(/ai/igm,"a")` <br>
`var txtCifrado = txtCifrado.replace(/ober/igm,"o")` <br>
`var txtCifrado = txtCifrado.replace(/ufat/igm,"u")` <br>

Cifrando la palabra y devolviéndolo a su contexto original.

Por ejemplo:

`"gato" => "gaitober"`
`gaitober" => "gato"`

<br>
<h3>Paginas de apoyo.</h3>
- <a href="https://fonts.google.com/" target="_blank">Google Fotns - fuente Titillium Web</a> <br>
- <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons - iconos SVG</a> <br>
- <a href="https://developer.mozilla.org/es/" target="_blank">MDN Web Docs - developer Mozilla</a> <br>
- <a href="https://www.aluracursos.com/" target="_blank">Alura Latam - cursos de Programación</a> <br>
- <a href="https://galernaestudio.com/tamano-pagina-web/" target="_blank">Galerna Estudio - Tamaño página web</a> <br>

<br>
<h3><u>Desarrollador.</u></h3>

<a href="https://github.com/FranksGz141" target="_blank">@FranksGz141/FranksGonzales</a> <br>
