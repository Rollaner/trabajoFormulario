var form = document.getElementById("form");
var nombres = document.getElementById("Nombres");
var apellidos = document.getElementById("Apellidos");
var rut = document.getElementById("rut");
var mail = document.getElementById("mail");
var mobile = document.getElementById("mobile");
var checkbox = document.getElementById("list");
var range = document.getElementById("Nivel");
var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");
var ch4 = document.getElementById("ch4");
var ch5 = document.getElementById("ch5");
var ch6 = document.getElementById("ch6");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");
var textbox = document.getElementById("desc");
/**
 * @deprecated
 * valida rut, que tenga 8 digitos sin puntos y digito o bien k despues del guión,
 * no funciona como se esperaba debido a que no tiene acceso a FormData, y fue reemplazada con html5
 * @param rut
 */
function validate(rut) {
    var Rutvalidate = new RegExp("/[0-9]{8}-(\d|k)/");
    console.log(rut);
    console.log(Rutvalidate.test(rut));
}
/**
 * Funcion del boton "limpiar", limpia uno por uno cada campo del formulario. Podria ordenarse con un arreglo
 * pero por lo demas es funcional
 */
function limpiarDatos() {
    nombres.value = '';
    apellidos.value = '';
    rut.value = '';
    mail.value = '';
    mobile.value = '';
    textbox.value = '';
    a1.checked = false;
    a2.checked = false;
    a3.checked = false;
    a4.checked = false;
    a5.checked = false;
    ch1.checked = false;
    ch2.checked = false;
    ch3.checked = false;
    ch4.checked = false;
    ch5.checked = false;
    ch6.checked = false;
}
/**
 * verifica que se ha seleccionado al menos una checkbox con el nombre "ch", formdata contiene los datos del formulario
 * (Como nota personal, se pudo haber usado esto en vez de hmtl para verificar RUT)
 * @returns boolen
 */
function checkboxes() {
    var formdata = new FormData(form);
    if (formdata.has("ch")) {
        return true;
    }
    else {
        return false;
    }
}
/** Funcion del boton enviar: Verifica que se seleccione al menos una checkbox (ch1,ch2,...ch6) con checkboxes
 *  si pasa la verificacion procede a ocultar el error (si es que es visible), oculta el formulario y presenta el
 *  mensaje de verificacion "Hemos recibido sus datos, pronto nos estaremos comunicando con usted"
 */
form.addEventListener("submit", function (event) {
    var err = document.getElementById("error");
    if (checkboxes()) {
        err.style.display = "none";
        var message = document.getElementById("message");
        form.style.display = "none";
        message.style.display = "block";
        message.innerHTML = "Hemos  recibido  sus  datos,  pronto  nos estaremos comunicando con usted";
        message.style.color = "black";
        event.preventDefault();
    }
    else {
        err.style.display = "block";
        err.innerHTML = "Seleccione al menos una opción";
        err.style.color = "red";
        event.preventDefault();
    }
});
