

window.onload = function() 
{
 
	$(".carousel").on("touchstart", function(event){
	        var xClick = event.originalEvent.touches[0].pageX;
	    $(this).one("touchmove", function(event){
	        var xMove = event.originalEvent.touches[0].pageX;
	        if( Math.floor(xClick - xMove) > 5 ){
	            $(this).carousel('next');
	        }
	        else if( Math.floor(xClick - xMove) < -5 ){
	            $(this).carousel('prev');
	        }
	    });
	    $(".carousel").on("touchend", function(){
	            $(this).off("touchmove");
	    });
	});



};


/**
 * Enviar formulario de contacto y mostrar respuesta
 */
function enviarForm()
{

   
        var telefono = $("input[name=Telefono").val();
            email = $("input[name=Correo").val(),
            nombre = $("input[name=Nombre").val();

            if (!email) //la función se llama sola al cargar la página con campos vacios
                return;

        $.ajax({
            type: "POST",
            url: 'https://vy2gnunmh9.execute-api.us-east-1.amazonaws.com/prod',
            contentType: 'application/json',
            data: JSON.stringify({
                'nombre': nombre,
                'telefono': telefono,
                'email': email,
            }),
            success: function(res)
            {
                alert("Sus datos han sido enviados correctamente");
            },
            error: function(res)
            {
                alert("Lo lamentamos mucho. Ha ocurrido un error");
                console.log(res);
            }
        });
        return false;

}
		


