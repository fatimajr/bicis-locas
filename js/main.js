function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var lista = document.getElementsByTagName('select')[0].selectedIndex;

	if( nombre == null || nombre.length == 0 || /^[A-Z]\s+$/.test(nombre)) {
		alert('Ingresa tu Nombre');	
	} else if (apellido == null || apellido.length == 0 || /^[A-Z]\s+$/.test(apellido)){
    	alert('Ingresa tu Apellido');
  	} else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo))) {
        alert("Ingresa tu email");
  	} else if (contraseña == null || contraseña.length <=6 || contraseña == "password" || contraseña == 123456 || contraseña == 098754 || /^\s+$/.test(contraseña)){
    	alert('Ingresa una contraseña válida');
   	} else if ( lista == 'blank' ){
    	alert('Selecciona una opción!');
   	}
}