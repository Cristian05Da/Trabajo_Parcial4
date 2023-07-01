/* Cristian Daniel Maldonado Chalco */

/* Al estar listo el documento */

$("document").ready(function () {
    /* Capturar evento de envio Submit */
    $("#CrearCuenta").submit(function () {

        /* Confirma si se envia el formulario */
        return validarDatos();

    })

})


/* validar datos */
function validarDatos() {
    /* preguntar si se envia formulario */
    let pregunta = confirm("¿Seguro que deseas enviar sus respuestas?");
    if (pregunta) {
        /* validar  */
        /* obtener valores de los campos */
        let inputName = $("#txtName")[0].value;
        let inputLastName = $("#txtLastName")[0].value;
        let inputEmail = $("#txtemail")[0].value;
        let inputDni = $("#intDNI")[0].value;
        let inputUsuario = $("#txtUser")[0].value;
        let inputContraseña = $("#txtPassword")[0].value;
        let inputFone = $("#txtFone")[0].value;
        let inputDireccion = $("#txtAddress1")[0].value;

        /* validar nuestro formulario */


        /* validar nombre */
        if (inputName.length > 20 || inputName.length < 2) {
            alert("Nombre no es aceptado");
            return fasle;
        }

        /* validar apellidos */
        if (inputLastName.length > 50 || inputLastName.length < 2 ){
            alert("Apellido no aceptado");
            return false;
        }
        /* validar DNI */
        if(inputDni.length != 8){
            alert("DNI no aceptado");
            return false;
        }

        /* validar fecha de nacimiento */


        /* validar email */
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail) == false) {
            alert("Su correo no es aceptado");
            return false;
        }
        /* validar Usuario */
        if(inputUsuario.length > 15 || inputUsuario.length < 4){
            alert("Usuario no aceptado");
            return false;
        }
        /* validar contraseña */
        if (inputContraseña.length > 9 || !/[0-9]/.test(inputContraseña)){
            alert("Contraseña no aceptada");
            return false; 
        }
        /* validar numero de celular */
        if(inputFone.length != 9 ){
            alert("Nro. celular  no aceptado");
            return false;
        }
        /* validar direccion */
        if(inputDireccion.length > 40 ||inputDireccion.length <  10 ){
            alert("Direccion no aceptada");
            return false; 
        }


        /* niguno salio false, enviar formulario */
        return true;


    } else {
        return false;
    }
}