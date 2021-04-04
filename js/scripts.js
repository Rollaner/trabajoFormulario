var form = document.getElementById("form");
var nombres = document.getElementById("Nombres");
var apellidos = document.getElementById("Apellidos");
var rut = document.getElementById("rut");
var mail = document.getElementById("mail");
var mobile = document.getElementById("mobile");
var checkbox = document.getElementById("list");
var range = document.getElementById("Nivel");
var message = document.getElementById("message");
function validate(rut) {
    var Rutvalidate = new RegExp("/[0-9]{8}-(\d|k)/");
    console.log(rut);
    console.log(Rutvalidate.test(rut));
}
/*function Regextest(input) {
    let regexp = new RegExp("/^[a-zA-Z]+@[a-zA-Z]+\.com$/");
    regexp.test(input);
}*/
form.addEventListener("submit", function (event) {
    //rut.toString;
    //validate(rut);
    form.style.display = "none";
    message.style.display = "block";
    message.innerHTML = "Hemos  recibido  sus  datos,  pronto  nos estaremos comunicando con usted";
    message.style.color = "black";
    event.preventDefault();
    /*if(validate(rut)){
        form.style.display="none";
        message.style.display="block";
        message.innerHTML="Hemos  recibido  sus  datos,  pronto  nos estaremos comunicando con usted";
        message.style.color="black";
        event.preventDefault();
    }else{
        message.style.display="block";
        message.innerHTML="Ingrese un rut valido";
        message.style.color="black";
        event.preventDefault();
    }*/
});
form.addEventListener("limpiar", function (event) {
});
