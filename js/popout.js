
//ARRAY USUARIO Y SU CONSTRUCTOR
const usuario = [];
class Usuario {
    constructor (nombre,apellido,mail){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail;
    }
}
function cerrarOverlay(){
    //let overlay = $(".addItem");
    $(".addItem").hide();
    $("body").css('overflow','auto');
}
function borrar() {
    $("input").val("");
    $(".textoError").hide();
}
//VERIFICA QUE LOS CAMPOS SE COMPLETEN//
function completar (id,numPregunta){
    let nombre = document.getElementById(id);
    let p=document.getElementsByClassName("textoError");
    
        if (nombre.value=="") {
            p[numPregunta].innerHTML=`* Campo Obligatorio`;
            p[numPregunta].style.display="block";
        }else{
            p[numPregunta].style.display="none";
        }   
}
//VERIFICA QUE EL MAIL TENGA @ Y . //
function verificarUsuario (){
    let mail =document.getElementById("mail").value;
    let p=document.getElementsByClassName("textoError");
    if(mail==""){
        p[2].innerHTML=`* Campo Obligatorio`;
        p[2].style.display="block";
    }else if(mail.indexOf("@")==-1 || mail.indexOf(".")==-1){
        p[2].innerHTML=`* Ingresar un mail existente`;
        p[2].style.display="block";
    }else{
        p[2].style.display="none";
    }
}

function guardarUsuario(){
    let nombre=$('#nombre').val();
    let apellido=$('#apellido').val();
    let mail=$('#mail').val();
    $('.textoError:last').empty();
    if((mail!="" && mail.indexOf("@")>-1 && mail.indexOf(".")>-1)&&nombre!=""&&mail!=""){
        console.log("usuario guardado");
        $('.textoError')[3].style.display="none";
        let persona = new Usuario(nombre,apellido,mail);
        usuario.push(persona);
        $("#nombre").val("");
        $("#apellido").val("");
        $("#mail").val("");
        $(".textoError").hide();
        const usuarioJSON = JSON.stringify(usuario);
        localStorage.setItem('usuarios',usuarioJSON);
        $('.encuesta__pregunta--addItem').empty();
        $('.encuesta__pregunta--addItem').append(`
        <a href="#" onclick="cerrarOverlay()" class="btnClose">X</a>
        <div class="contenedorFlex">
            <span class="icon icon-heart1"></span>
            <p>Su usuario se cargó correctamente</p>
        </div>`);
    }else{
        console.log("error");
        $('.textoError:last').append(`* Completar todos los campos correctamente`);
        $('.textoError:last').show();
    }
}

$(document).ready(function(){
    let usuario;
    usuario=JSON.parse(localStorage.getItem('usuarios'));
    console.log(usuario);
    if(usuario===null){
        $('main').append(
        `<div class="addItem addItem--usuario">
           <div class="encuesta__pregunta encuesta__pregunta--addItem">
                <h3 class="subtitulo">OFERTA</h3>
                <p>Registrate y recibí un 10% de descuento en tu primer presupuesto </p>
                <div class="encuesta__contenedorBtn">
                    <a href="#" class="encuesta__btnAddItem" onclick="registrarse()">REGISTRARME</a>    
                    <a href="#" class="encuesta__btnAddItem" onclick="cerrarOverlay()">CANCELAR</a>
                </div>
            </div> 
        </div>`);
        $('div.addItem.addItem--usuario').css('display','flex');
        $("body").css('overflow','hidden');

    }
});

function registrarse(){
    $('.encuesta__pregunta--addItem').empty();
    $('.encuesta__pregunta--addItem').append(
        `
        <div>
            <h2 class="subtitulo">Registrarse</h2>
            <div class="contacto__contenedor">
                <p class="contacto__pregunta">Nombre:</p>
                <input type="text" id="nombre" onfocusout="completar('nombre',0)" class="contacto__inputText" placeholder="Cosme">
                <p class="textoError"></p>
            </div>
            <div class="contacto__contenedor">
                <p class="contacto__pregunta">Apellido:</p>
                <input type="text" id="apellido" onfocusout="completar('apellido',1)" class="contacto__inputText" placeholder="Fulnito">
                <p class="textoError"></p>
            </div>
            <div class="contacto__contenedor">
                <p class="contacto__pregunta">Mail:</p>
                <input type="email" id="mail" onfocusout="verificarUsuario()" class="contacto__inputText" placeholder="cosmefulanito@icq.com">
                <p class="textoError"></p>
            </div>
            </div>
            <div class="encuesta__contenedorBtn">
            <a href="#" class="encuesta__btnAddItem" onclick="guardarUsuario()">GUARDAR</a>    
            <a href="#" class="encuesta__btnAddItem" onclick="borrar()">BORRAR TODO</a>
            <a href="#" class="encuesta__btnAddItem" onclick="cerrarOverlay()">CANCELAR</a>
            </div>
            <p class="textoError"></p> 
        `);
    }
