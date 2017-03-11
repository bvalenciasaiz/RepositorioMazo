$('.menuDesplegable ul').hide();

$('.menuDesplegable h3').on('click', desplegar);

function desplegar()
{
	$(this).next().slideToggle(700);
}