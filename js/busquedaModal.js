$(document).ready(inicia);//cuando ha cargado el documento, arranca la función X


function inicia()
{
	$(".lupa").click(pintaVentana);
}


function pintaVentana()
{
	$("body").append('<div class="capa"></div><div class="ventana"></div>');
	$(".ventana").append('<form id=buscar><input name="Busqueda" class="icono" type="text" id="Nombre" size="48"  placeholder="Realice su búsqueda..." maxlength="20"></input></form>');
	$(".ventana").append('<a href="#" class="botonCerrar">CERRAR</a>');

	//para cerrar el modal
	$(".ventana .botonCerrar").click(borrarVentana);

	function borrarVentana(){
	$(".ventana, .capa").remove();
	}

	//asigno un evento al boton
	
	$(".ventana, .capa").hide();
	$(".capa").fadeTo(800, 1);
	$(".ventana").delay(800).fadeTo(800, 1);
}