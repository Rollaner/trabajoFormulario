let form:any=document.getElementById("form");
let nombres:any=document.getElementById("Nombres");
let apellidos:any=document.getElementById("Apellidos");
let rut:any=document.getElementById("rut");
let mail:any=document.getElementById("mail");
let mobile:any=document.getElementById("mobile");
let checkbox:any=document.getElementById("list");
let range:any=document.getElementById("Nivel");
let ch1:any=document.getElementById("ch1");
let ch2:any=document.getElementById("ch2");
let ch3:any=document.getElementById("ch3");
let ch4:any=document.getElementById("ch4");
let ch5:any=document.getElementById("ch5");
let ch6:any=document.getElementById("ch6");
let a1:any=document.getElementById("a1");
let a2:any=document.getElementById("a2");
let a3:any=document.getElementById("a3");
let a4:any=document.getElementById("a4");
let a5:any=document.getElementById("a5");
let textbox:any=document.getElementById("desc")

function validateNumber(mobile:number){
    if((mobile<900000000)||(mobile>999999999)){
        return false;
    }
    return true;
}

/**
 * @deprecated
 * valida rut, que tenga 8 digitos sin puntos y digito o bien k despues del guión,
 * no funciona como se esperaba debido a que no tiene acceso a FormData, y fue reemplazada con html5
 * @param rut 
 */
function validate(rut:string){
    let Rutvalidate = new RegExp("/[0-9]{8}-(\d|k)/");
    console.log(rut)
    console.log(Rutvalidate.test(rut));
}
/**
 * Funcion del boton "limpiar", limpia uno por uno cada campo del formulario. Podria ordenarse con un arreglo
 * pero por lo demas es funcional para el contexto de un formulario
 */
function limpiarDatos(){
    nombres.value ='';
    apellidos.value ='';
    rut.value='';
    mail.value='';
    mobile.value='';
    textbox.value='';
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
    //form.reset(); /* Comedy Gold, Seria recomendable decomentar esta linea para reducir el manteniemiento */
}
/**
 * verifica que se ha seleccionado al menos una checkbox con el nombre "ch", formdata contiene los datos del formulario
 * (Como nota personal, se pudo haber usado esto en vez de hmtl para verificar RUT)
 * @returns boolen
 */
function checkboxes(){
    let formdata = new FormData(form);
    if(formdata.has("ch")){
        return true;
    }else{
        return false;
    }
}
/** Funcion del boton enviar: Verifica que se seleccione al menos una checkbox (ch1,ch2,...ch6) con checkboxes
 *  si pasa la verificacion procede a ocultar el error (si es que es visible), oculta el formulario y presenta el 
 *  mensaje de verificacion "Hemos recibido sus datos, pronto nos estaremos comunicando con usted"
 */
form.addEventListener("submit",function(event:any){
        let err:any=document.getElementById("error");
        let errN:any=document.getElementById("errorN");
        if(!checkboxes()){
            err.style.display="block";
            err.innerHTML="Seleccione al menos una opción";
            err.style.color="red";
            event.preventDefault();
        }else{
            err.style.display="none";
        }
        if(!validateNumber(mobile.value)){
            errN.style.display="block";
            errN.innerHTML="Ingrese un numero valido";
            errN.style.color="red";
            event.preventDefault();
        }else{
            errN.style.display="none";
        }
        if((checkboxes())&&(validateNumber(mobile.value))){
            err.style.display="none";
            errN.style.display="none";
            let message:any=document.getElementById("message");
            form.style.display="none";
            message.style.display="block";
            message.innerHTML="Hemos  recibido  sus  datos,  pronto  nos estaremos comunicando con usted";
            message.style.color="black";
            event.preventDefault();
        }
});


