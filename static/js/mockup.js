
/*FUNCION PARA LA VALIDACION DE CONTACTO */

function validarContacto(form) {

    //Variables
    var nombre = form.nombre.value;
    var email = form.email.value;
    var telefono = form.telefono.value;

    //Expresion Regular Solo Letras
    var exprRegTexto = /^[a-zA-ZÑ]+$/;

    //Expresión Regular Email
    var expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    //Expresion Regular Solo Números
    var exprRegNumeros = /^[0-9]+$/;

    if (exprRegTexto.test(nombre) == false) {
        alert("El nombre no se ingreso o es incorrecto");
        return false;
    } else {
        if (nombre.length < 3 || nombre.length > 50) {
            alert("La longitud del nombre no puede tener menos que 3 y mas de 50 caracteres");
            return false;
        }
    }

    if (expRegEmail.test(email) == false) {
        alert("No se ingreso el email o es un email invalido");
        return false;
    }

    if (exprRegNumeros.test(telefono) == false) {
        alert("El numero de telefono no se ingreso o es incorrecto");
        return false;
    } else {
        if (telefono.length > 13) {
            alert("La longitud del telefono no debe superar los 13 digitos");
            return false;
        }
    }

    alert("Todo Ok");
}

/*FUNCION PARA LA VALIDACION DE REGISTRO */
function validarRegistro(form) {

    //Variables
    var nombre = form.nombre.value;
    var importe = form.importe.value;
    var horarioI = form.horarioI.value;

    //Expresion Regular Solo Letras
    var exprRegTexto = /^[a-zA-ZÑ]+$/;

    //Expresión Regular Horario 24 hrs.
    var ExpRegHora24Hrs = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    //Expresion Regular Solo Números
    var exprRegNumeros = /^[0-9]+$/;

    if (exprRegTexto.test(nombre) == false) {
        alert("El nombre no se ingreso o es incorrecto");
        return false;
    } else {
        if (nombre.length < 3 || nombre.length > 50) {
            alert("La longitud del nombre no puede tener menos que 3 y mas de 50 caracteres");
            return false;
        }
    }

    if (ExpRegHora24Hrs.test(horarioI) == false){
        alert("La hora de ingreso de incorrecta");
        return false;
    }
    

    if (exprRegNumeros.test(importe) == false) {
        alert("El importe no se ingreso");
        return false;
    }

    alert("Todo Ok");
}