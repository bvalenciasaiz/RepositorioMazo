$(function() {
    //cuando carga el documento bajamos la opacidad de las descripciones a 0 (invisible)
    //$('#divMenuInferior a em').css('opacity', 0);

    //evento que se produce al colocar el puntero del raton sobre los iconos
    $('#divMenuInferior a').hover(
        function() {
            //obtenemos el icono que vamos a animar, y la descripcion
			// find() es como un selector descendente. En este caso busca   img   dentro de  this
			//Esto se emplea para recorrer elementos del DOM
            var $objImagen = $(this).find('img'),
                 $objTexto = $(this).find('em');

            //aumentamos el tamano de la imagen progresivamente
            //.stop( [clearQueue], [jumpToEnd] )
            $objImagen.stop(true, true).animate({
                height: 500,
                width: 350
            });
            //cambiamos la fuente y la opacidad de la descripcion (para mostrarla)
            $objTexto.css("background","rgba(0,0,0,1)"),
            $objTexto.css("color", "rgba(255,255,255,1)");
        }, //este evento se produce al retirar el puntero del raton de los iconos
        function() {
            //obtenemos el icono y la descripcion
            var $objImagen = $(this).find('img'),
                $objTexto = $(this).find('em');

            //disminuimos el tamano de la imagen a sus dimensiones normales
            $objImagen.animate({
                height: 450,
                width: 300,
            });
            //bajamos la fuente y opacidad de la descripcion (para ocultarla)
            $objTexto.css("background","rgba(0,0,0,0)"),
            $objTexto.css("color", "rgba(255,255,255,0)");
        }); //
}); // cierra la function 1era, carga de elemto, READY
