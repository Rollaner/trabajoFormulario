let form:any=document.getElementById("form");
let nombres:any=document.getElementById("Nombres");
let apellidos:any=document.getElementById("Apellidos");
let rut:any=document.getElementById("rut");
let mail:any=document.getElementById("mail");
let mobile:any=document.getElementById("mobile");
let checkbox:any=document.getElementById("list");
let range:any=document.getElementById("Nivel");
let message:any=document.getElementById("message");
function validate(rut:string){
    let Rutvalidate = new RegExp("/[0-9]{8}-(\d|k)/");
    console.log(rut)
    console.log(Rutvalidate.test(rut));
}
/*function Regextest(input) {
    let regexp = new RegExp("/^[a-zA-Z]+@[a-zA-Z]+\.com$/");
    regexp.test(input);
}*/
form.addEventListener("submit",function(event:any){
        //rut.toString;
        //validate(rut);
        form.style.display="none";
        message.style.display="block";
        message.innerHTML="Hemos  recibido  sus  datos,  pronto  nos estaremos comunicando con usted";
        message.style.color="black";
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

form.addEventListener("limpiar",function(event:any){
    
});

