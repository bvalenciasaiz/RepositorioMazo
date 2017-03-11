// JavaScript Document
$(document).ready(inicia);//cuando ha cargado el documento, arranca la función indicada, inicia

function inicia()
{
	$(".usuario").click(pintaModal);
	$(".cerrarCookie").click(cierraCookies);
	$(".botonVerde").click(cierraCookies);
	
	muestraCookies();
}

function pintaModal()
{
	
	$("body").append('<div class="velo"></div><div class="modal"></div>');
	$(".modal").append('<button class="cerrarFormulario">X</button>'); 
	$(".modal").append('<div class="logo"><a href="index.html"><img src="imagenes/logos/mazo.png" height="100%" width="100%"/></a></div>');

	
	$(".modal").append('<div id=formularioUsuario><label id="NombreUsuario">Nombre de Usuario</label> <input id="nombreUser" type="text" name="nombre" size="30"><div id=mensajeError1 class="errores"> Por favor introduzca su usuario</div> </div>');
    $(".modal").append('<div id=formularioUsuario><label id="PasswordUsuario">Password</label><input id="passwordUser" type="Password" name="password" maxlength="30" size="30"><div id="mensajeError2" class="errores"> Por favor introduzca su password</div></div>');

	$(".modal").append('<input type="submit" value="acceso" class="acceder"></input>');
	$(".modal").append('<input type="submit" value="crear usuario" class="nuevoUsuiario"></input>');
	
// hago la llamada al metodo donde compruebo datos una vez pulsen el botón de acceso. para eso uno la funcion de jquery on
// la cual me sirve para detectar un evento, en este caso el evento detectado es CLICK. 
// dependiendo de que boton pulsen acudo a un comprobante u otro.  	
	$(".cerrarFormulario").click(borrarModal);
	$(".modal .nuevoUsuiario").click(MostrarForm);
	$(".modal .acceder").on("click", comprobarDatos);

	
	$(".modal, .velo").hide();
	$(".velo").fadeTo(800, 1);
	$(".modal").delay(800).fadeTo(800, 1);

}

// muestra el nuevo modal
function MostrarForm()
{
// removemos lo anterior
	$(".acceder").remove();
	$(".nuevoUsuiario").remove();
	$("#NombreUsuario").remove();
    $("#formularioUsuario").remove();
	$("#PasswordUsuario").remove();
	$("#formularioUsuario").remove();

// mostramos nuevo form

    // $(".modal").resize("width":"560px","height":"660px");
	$(".modal").append('<div id=formulario><label id="usuario">Usuario</label> <input id="user" type="text" name="user" size="30"><div id=mensajeError1 class="errores"> Por favor introduzca su nick</div></div>');
	$(".modal").append('<div id=formulario><label id="Password">Contraseña</label><input id="pass" type="Password" name="password" maxlength="30" size="30"><div id=mensajeError2 class="errores"> Por favor introduzca su password</div></div>');
	$(".modal").append('<div id=formulario><label id="Nombre">Nombre</label> <input id="nombrePropio" type="text" name="nombre" size="30"><div id=mensajeError3 class="errores"> Por favor introduzca su nombre</div></div>');
	$(".modal").append('<div id=formulario><label id="Apellidos">Apellidos</label><input id="surnames" type="text" name="apellidos" size="30"><div id=mensajeError4 class="errores"> Por favor introduzca sus apellidos</div></div>');
	$(".modal").append('<div id=formulario><label id="Direccion">Dirección</label><input id="addresss" type="text" name="direccion" size="30"><div id=mensajeError5 class="errores"> Por favor introduzca su dirección</div></div>');
	$(".modal").append('<div id=formulario><label id="Poblacion">Población</label><input id="citys" type="text" name="poblacion" size="30"><div id=mensajeError6 class="errores"> Por favor introduzca su población</div></div>');
    $(".modal").append('<div id=formulario><label id="CP">Código Postal</label><input id="code" type="text" name="cp" maxlength="5" size="30"><div id=mensajeError7 class="errores"> Por favor introduzca su CP</div></div>');
    $(".modal").append('<div id=formulario><label id="Fecha_nacimiento">Fecha de nacimiento</label><input id="was_born" type="date" name="fecha_nacimiento" size="30"><div id=mensajeError8 class="errores"> Por favor introduzca su fecha nacimiento</div></div>');
    $(".modal").append('<div id=formulario><label id="sexo">Sexo</label><br><input type="radio" name="sexo" value="m"> Masculino<br><input type="radio" name="sexo" value="f"> Femenino<br><div id=mensajeError9 class="errores"> Por favor introduzca su sexo</div></div>');
    

	$(".modal").append('<button type="submit" value="Submit"class="registro"">NUEVO USUARIO</button>');
	$(".modal").append('<button type="reset" value="Reset" class="cerrar">CERRAR</button>');


	//ambos cierrar el modal
	$(".modal .registro").click(comprobarRegistro);
	$(".modal .cerrar").click(borrarModal);

}

function borrarModal(){
	$(".modal, .velo").remove();
}

// funcion que llamo cuando el usuario intenta acceder a su perfil. 
// unicamente compruebo que ha introducido datos. 
// en un futuro, con BBDD se comprobará si son correctos. 
function comprobarDatos (){

	var user = $("#nombreUser").val();
	var pass = $("#passwordUser").val();

		if(user == ""){
			// muestro mensaje de error. 
			$("#mensajeError1").fadeIn();
			// con el fin de que salga de los if anidados
			return false;
		}else {
			// quito mensaje de error
		 	$("#mensajeError1").fadeOut();
			if(pass== ""){
				$("#mensajeError2").fadeIn();
				return false;
			} else {
				$("#mensajeError2").fadeOut();
				// llamo directamente a la funcion borrar modal. No hace falta comprobar evento 
				// se comprueba que los datos introducidos son correctos. 
				borrarModal();
			} // cierro el else de dos sentencias validas
		} // cierro else de user

} // cierro la función.


// funcion que llamo cuando el usuario intenta acceder a su perfil. 
// unicamente compruebo que ha introducido datos. 
// en un futuro, con BBDD se comprobará si son correctos. 
function comprobarRegistro (){

	var user = $("#user").val();
	var pass = $("#pass").val();
	var names = $("#nombrePropio").val();
	var surnames = $("#surnames").val();
	var address = $("#addresss").val();
	var city = $("#citys").val();
	var code = $("#code").val();
	var was_born = $("#was_born").val();
	var sex = $("input[type ='radio']:checked");

					
		if(user == ""){
			// muestro mensaje de error. 
			$("#mensajeError1").fadeIn();
			// con el fin de que salga de los if anidados
			return false;
		}else {
			// quito mensaje de error
		 	$("#mensajeError1").fadeOut();
			if(pass== ""){
				$("#mensajeError2").fadeIn();
				return false;
			} else {
				$("#mensajeError2").fadeOut();
				if (names== ""){
					$("#mensajeError3").fadeIn();
					return false;
				}else {
					$("#mensajeError3").fadeOut();
					if (surnames==""){
						
						$("#mensajeError4").fadeIn();
						return false;
					}else {
						$("#mensajeError4").fadeOut();
						
						if (address==""){
							$("#mensajeError5").fadeIn();
							return false;
						}else {
							$("#mensajeError5").fadeOut();
							if (city==""){
								$("#mensajeError6").fadeIn();
								return false;
							} else {
								$("#mensajeError6").fadeOut();
								if(code==""){
									$("#mensajeError7").fadeIn();
									return false
								}else {
									$("#mensajeError7").fadeOut();
									if(was_born == ""){
										$("#mensajeError8").fadeIn();
										return false;
									}else{
										$("#mensajeError8").fadeOut();
										if(sex.length == 0){
											$("#mensajeError9").fadeIn();
											return false;
										}else {
											$("#mensajeError9").fadeOut();
									// llamo directamente a la funcion borrar modal. No hace falta comprobar evento 
									// se comprueba que los datos introducidos son correctos. 
											borrarModal();
										}
									}
								}
							}
						}
						
					}
				}
			} // cierro el else de dos sentencias validas
		} // cierro else de user
} // cierro la función.

function muestraCookies(){

	$("#cookies").css("display", "in-line").fadeIn(2000);
}

function cierraCookies(){
	$("#cookies").remove();
}
