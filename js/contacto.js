//ARRAY CONTACTO Y SU CONSTRUCTOR
const contacto = [];
class Contacto {
    constructor (nombre,mail,mensaje){
        this.nombre=nombre;
        this.mail=mail;
        this.mensaje=mensaje;
    }
}

//VERIFICA QUE EL MAIL TENGA @ Y . //
function verificar (){
    let mail =document.getElementById("mail").value;
    let p=document.getElementsByClassName("textoError");
    if(mail==""){
        p[1].innerHTML=`* Campo Obligatorio`;
        p[1].style.display="block";
    }else if(mail.indexOf("@")==-1 || mail.indexOf(".")==-1){
        p[1].innerHTML=`* Ingresar un mail existente`;
        p[1].style.display="block";
    }else{
        p[1].style.display="none";
    }
}
   

//EN CASO DE QUE SE LLENEN LOS INPUTS CORRECTAMENTE SE GUARDA EN EL LOCALSTORAGE//
function enviar() {
    let nombre = document.getElementById("nombre").value;
    let mail= document.getElementById("mail").value;
    let mensaje=document.getElementById("mensaje").value;  
    let p=document.getElementsByClassName("textoError");
    if((mail!="" && mail.indexOf("@")>-1 && mail.indexOf(".")>-1)&&nombre!=""&&mail!=""){
        console.log("mensaje enviado");
        p[3].style.display="none";
        let persona = new Contacto(nombre,mail,mensaje);
        contacto.push(persona);
        document.getElementById("nombre").value="";
        document.getElementById("mail").value="";
        document.getElementById("mensaje").value="";
        const contactoJSON = JSON.stringify(contacto);
        localStorage.setItem("Contacto",contactoJSON);
    }else{
        console.log("error");
        p[3].innerHTML=`* Completar todos los campos correctamente`;
        p[3].style.display="block";
    }
}

//BORRAR EL CONTENIDO DE LOS INPUTS//
// function borrar() {
//     document.getElementById("nombre").value="";
//     document.getElementById("mail").value="";
//     document.getElementById("mensaje").value="";
// }