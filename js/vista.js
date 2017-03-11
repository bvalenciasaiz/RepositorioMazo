

var foto;

$('content #abrigo .listado a').on('click', ocultaFoto);

function ocultaFoto () {
	foto = $(this).attr('href');
	$('content .detalle img').fadeOut(200,cargaFoto);
	return false;
}

function cargaFoto () {
	$('content .detalle img').attr('src',foto).fadeIn(200);
}

function muestraFoto () {
	$('content .detalle img').fadeIn(200);
}
//Esla última función se puede obviar, por que en cargar foto ya le estas diciendo que te lo muestre (fadeIn)

