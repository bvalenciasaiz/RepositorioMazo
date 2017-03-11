
function nif(dni) 
{
	var numero, letr, letra, expresion_regular_dni;
 
	expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
	if(expresion_regular_dni.test (dni) == true)
	{
		numero = dni.substr(0,dni.length-1);
		letr = dni.substr(dni.length-1,1);
		numero = numero % 23;
		letra='TRWAGMYFPDXBNJZSQVHLCKET';
		letra=letra.substring(numero,numero+1);
		if (letra!=letr.toUpperCase()) 
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	else
	{
		return false;
	}
}