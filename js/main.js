$(document).ready(desplegar);


 
var contador = 1;
 
function desplegar ()
{
	$('.menu').click(function(){
		if (contador == 1) {
			$('#menu').animate({
				left: '0'
			});
			contador = 0;
				
		} else {
			contador = 1;
			$('#menu').animate({
				left: '-100%'
			});
		}
	});	

}



