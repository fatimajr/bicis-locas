function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;

	if( nombre == null || nombre.length == 0 || /^[A-Z]\s+$/.test(nombre)) {
		return alert('Ingresa tu Nombre');	
	} else if (apellido == null || apellido.length == 0 || /^[A-Z]\s+$/.test(apellido)){
    	return alert('Ingresa tu Apellido');
  	} else if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo))){
  		return alert('Ingresa tu correo electrónico');
  	} else if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)){
    	return alert('Ingresa tu contraseña');
    }
}