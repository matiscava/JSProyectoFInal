//FUNCIONES
//Funcion para cargar el array en el LocalStorage
function cargarLS(array,variableLS){
    let variable;
        variable=JSON.parse(localStorage.getItem(variableLS));
        console.log(variable);
    if(variable===null){
        console.log('no esta cargado');
        localStorage.setItem(variableLS,JSON.stringify(array));
        console.log('ahora si esta cargado');
        variable=JSON.parse(localStorage.getItem(variableLS));
        console.log(variable);
    }else{
        console.log('ya estaba cargado');
    }
    return variable;
}

function vanAComerAsado(clasePregunta,array,variable){

    let pregunta = $("."+clasePregunta);
    //document.getElementsByClassName(clasePregunta);
    for(i=0; i<pregunta.length;i++){
        if(pregunta[i].checked){
            variable.push(array[i]);
        };
    };
    return variable;
}
function completarComensales (){
    let nombre = document.getElementById("pregunta1");
    let p=document.getElementsByClassName("textoError");
    
        if (nombre.value=="") {
            p[0].innerHTML=`* Campo Obligatorio`;
            p[0].style.display="block";
        }else if(nombre.value<1){
            p[0].innerHTML=`* Carácter incorrecto`;
            p[0].style.display="block";
        }else{
            p[0].style.display="none";
        }   
}

function valorUnidad(array,comensales){
    let calculo=document.getElementsByClassName("calculo");
    lista=document.createElement("ul");
    lista.className="calculo__lista";
    calculo[0].innerHTML= `<h2 class="calculo__subtitulo">LISTA DEL ASADO</h2>`;
    hijo=document.createElement("p");
    hijo.className='calculo__texto';
    hijo.innerHTML=`Seran ${comensales} comensales`;
    calculo[0].appendChild(hijo);
    calculo[0].appendChild(lista);


    for (const item of array) {
        let li =document.createElement("li");
        li.className="calculo__item";
        li.innerHTML=`${item.corte}: ${(item.porcion*comensales).toFixed(3)}${item.unidad} kg x $${(item.valor*comensales).toFixed(2)}`;
        lista.appendChild(li);

        console.log(`${item.corte}: ${(item.porcion*comensales).toFixed(3)}${item.unidad} kg x $${(item.valor*comensales).toFixed(2)}`);
    };

}

function CalcCumbustible (combustible, kilos,precioCombustible){
    for(const item of combustible){
        if(item.id!="otro"){

            let cantidad= parseInt((kilos*item.proporcion)/item.porcion);
            if((kilos*item.proporcion)%item.porcion){
                cantidad=cantidad+1;
            }
            precioCombustible= cantidad*item.valor;
            let calculo=document.getElementsByClassName("calculo");
            let p = document.createElement('p');
            p.className='calculo__texto';
            p.innerHTML=`van a usar ${item.material} para el fuego, tienen que comprar ${cantidad} ${item.unidad} son $${precioCombustible}`;
            calculo[0].appendChild(p);
            
            console.log(`van a usar ${item.material} para el fuego, tienen que comprar ${cantidad} ${item.unidad} son $${precioCombustible}`);
        }else{
            precioCombustible=0;
        }
    };
    return precioCombustible;
}

function CalcExtra (extra, comensales,precioExtra){
    precioExtra=0;
    for(const item of extra){
        let cantidad = parseInt((comensales*item.proporcion)/item.porcion);
        if((comensales*item.proporcion)%item.porcion){
            cantidad=cantidad+1;
        }
        let precioItem = cantidad*item.valor;
        let calculo=document.getElementsByClassName("calculo");
        let p = document.createElement('p');
        p.className='calculo__texto';
        if (item.unidad=="g"){
            p.innerHTML=`Tienen que comprar ${(cantidad*item.porcion).toFixed(3)} ${item.unidad} de ${item.corte} a un valor de $${precioItem.toFixed(2)}`;
        }else{
            p.innerHTML=`Tienen que comprar ${cantidad*item.porcion} ${item.unidad} de ${item.corte} a un valor de $${precioItem.toFixed(2)}`;
        }
        calculo[0].appendChild(p);
        
        precioExtra=precioExtra+precioItem;
        // console.log(`van a usar ${item.material} para el fuego, tienen que comprar ${cantidad} ${item.unidad} son $${precioCombustible}`);
        
    };
    return precioExtra;
}
//verifica que este completo el InputText
function completarInputText (id,numPregunta){
    let nombre = document.getElementById(id);
    let p=document.getElementsByClassName("itemNuevo__p");
    
        if (nombre.value=="") {
            p[numPregunta].innerHTML=`* Campo Obligatorio`;
            p[numPregunta].style.display="block";
        }else{
            p[numPregunta].style.display="none";
        }   
}
//verifica que este completo el InputNumber
function completarInputNumber (id,numPregunta){
    let nombre = document.getElementById(id);
    let p=document.getElementsByClassName("itemNuevo__p");
    
        if (nombre.value=="") {
            p[numPregunta].innerHTML=`* Campo Obligatorio`;
            p[numPregunta].style.display="block";
        }else if(nombre.value<1){
            p[numPregunta].innerHTML=`* Carácter incorrecto`;
            p[numPregunta].style.display="block";
        }else{
            p[numPregunta].style.display="none";
        }   
}
//overlay//
function abrirOverlay(){
    let overlay = document.getElementsByClassName("addItem");
    overlay[0].style.display="flex";
    let body = document.getElementsByTagName("body");
    body[0].style.overflow="hidden";
}
//FUNCION AGREGAR ITEM ACHURA//
function agregarAchura(listado){
    let corte=document.getElementById("itemAchura").value;
    let precio=parseFloat(document.getElementById("itemPrecio").value);
    let id=corte.replace(/ /g, "");
    let p=document.getElementsByClassName("itemNuevo__p");
    p[2].style.display="none";
    if ((precio!=""&&precio>1)&&corte!=""){
        let corteNuevo= new CorteCarne (corte,0.2,"g",precio,id);
        asadoAchuras.push(corteNuevo);
        document.getElementById("itemAchura").value="";
        document.getElementById("itemPrecio").value="";
        localStorage.setItem('asadoAchura',JSON.stringify(asadoAchuras));
        listado=JSON.parse(localStorage.getItem('asadoAchura'));
        listaChecbox("encuesta__achuras",listado,"achuras");
        return true;
    }else{
        p[2].innerHTML=`* Completar todos los campos correctamente`;
        p[2].style.display="block";
        return false;
    }
}
//Funciones Overlay//
function cerrarOverlay(){
    //let overlay = $(".addItem");
    $(".addItem").hide();
    $("body").css('overflow','auto');
}
function borrar() {
    $("input").val("");
    $(".textoError").hide();
}
//funcion de cargar item y cerrar//
function cargarYCerrrar(funcion){
   let cargado=funcion;
   if (cargado===true){
    cerrarOverlay()
   }
}
// FUNCION PARA CREAR FORMULARIO DE AGREGAR ITEM ACHURAS//
function formularioAchuraNuevo(){
    let cuadro = document.getElementById("itemNuevo");
    cuadro.innerHTML=
    `<p>Ingrese la achura nueva</p>
    <input type="text" class="encuesta__inputText" onfocusout="completarInputText('itemAchura',0)" name="itemAchura" id="itemAchura" placeholder="Nombre de la achura">
    <p class="textoError itemNuevo__p"></p>
    <p>Ingrese su valor estimado</p>
    <input type="number" onfocusout="completarInputNumber('itemPrecio',1)" name="itemPrecio" id="itemPrecio" placeholder="278">
    <p class="textoError itemNuevo__p"></p>
    <div class="encuesta__contenedorBtn">
    <a href="#" class="encuesta__btnAddItem" onclick="agregarAchura(listadoAchuras),listaChecbox('encuesta__achuras',asadoAchuras,'achuras')">Guardar y cargar otra achura</a>
    <a href="#" class="encuesta__btnAddItem" onclick="cargarYCerrrar(agregarAchura(listadoAchuras)),listaChecbox('encuesta__achuras',asadoAchuras,'achuras')">Guardar y cerrar</a>
    <a href="#" class="encuesta__btnAddItem" onclick="cerrarOverlay()">Cerrar</a>
    </div>
    <p class="textoError itemNuevo__p"></p>
    `;
}

//FUNCION AGREGAR ITEM ASADO//
function agregarCorte(listado){
    let corte=document.getElementById("itemCorte").value;
    let hueso=document.getElementsByClassName("itemNuevo__radio");
    if(hueso[0].checked){
        hueso=0.4;
    }else{
        hueso=0.5;
    };
    let precio=(parseFloat(document.getElementById("itemPrecio").value))*hueso;
    let id=corte.replace(/ /g, "");
    let p=document.getElementsByClassName("itemNuevo__p");
    p[2].style.display="none";
    if ((precio!=""&&precio>1)&&corte!=""){
        let corteNuevo= new CorteCarne (corte,hueso,"g",precio,id);
        asadoCortes.push(corteNuevo);
        document.getElementById("itemCorte").value="";
        document.getElementById("itemPrecio").value="";
        localStorage.setItem('asadoCarne',JSON.stringify(asadoCortes));
        listado=JSON.parse(localStorage.getItem('asadoCarne'));
        listaChecbox("encuesta__cortes",listado,"asado");
        return true;
    }else{
        p[2].innerHTML=`* Completar todos los campos correctamente`;
        p[2].style.display="block";
        return false;
    }
}
// FUNCION PARA CREAR FORMULARIO DE AGREGAR ITEM CORTE DE ASADO//
function formularioCorteNuevo(){
    let cuadro = document.getElementById("itemNuevo");
    cuadro.innerHTML=
    `<p>Ingrese el nuevo corte</p>
    <input type="text" class="encuesta__inputText" onfocusout="completarInputText('itemCorte',0)" name="itemCorte" id="itemCorte" placeholder="Nombre del corte nuevo">
    <p class="textoError itemNuevo__p"></p>
    <p>¿Es un corte con hueso?</p>
    <input class="encuesta__radio itemNuevo__radio" type="radio" name="itemHueso" id="sinHueso" checked>
    <label for="sinHueso">No tiene hueso</label>
    <input class="encuesta__radio itemNuevo__radio" type="radio" name="itemHueso" id="conHueso">
    <label for="conHueso">Si tiene hueso</label>
    <p>Ingrese su valor estimado x kilo</p>
    <input type="number" onfocusout="completarInputNumber('itemPrecio',1)" name="itemPrecio" id="itemPrecio" placeholder="278">
    <p class="textoError itemNuevo__p"></p>
    <div class="encuesta__contenedorBtn">
    <a href="#" class="encuesta__btnAddItem" onclick="agregarCorte(listadoCarnes),listaChecbox('encuesta__cortes',asadoCortes,'asado')">Guardar y cargar otro corte</a>
    <a href="#" class="encuesta__btnAddItem" onclick="cargarYCerrrar(agregarCorte(listadoCarnes)),listaChecbox('encuesta__cortes',asadoCortes,'asado')">Guardar y cerrar</a>
    <a href="#" class="encuesta__btnAddItem" onclick="cerrarOverlay()">Cerrar</a>
    </div>
    <p class="textoError itemNuevo__p"></p>
    `;
}

//FUNCION AGREGAR ITEM EXTRA//
function agregarExtra(listado){
    let corte=document.getElementById("itemExtra").value;
    let proporcion=1/parseInt(document.getElementById("itemProporcion").value);
    let precio=parseFloat(document.getElementById("itemPrecio").value);
    let porcion;
    let unidad=document.getElementsByClassName("itemNuevo__radio");
    let p=document.getElementsByClassName("itemNuevo__p");
    p[3].style.display="none";
    if(unidad[0].checked){
        unidad="g";
        porcion=0.250;
    }else{
        unidad="u.";
        porcion=1;
    };
    let id=corte.replace(/ /g, "");
    if ((precio!=""&&precio>1)&&corte!=""&&(proporcion!=""&&proporcion>=0)){
        let corteNuevo= new ExtraContruct (corte,porcion,unidad,precio,proporcion,id);
        extraCortes.push(corteNuevo);
        document.getElementById("itemExtra").value="";
        document.getElementById("itemProporcion").value="";
        document.getElementById("itemPrecio").value="";
        localStorage.setItem('asadoExtra',JSON.stringify(extraCortes));
        listado=JSON.parse(localStorage.getItem('asadoExtra'));
        listaChecbox("encuesta__extra",listado,"extra");
        return true;
    }else{
        p[3].innerHTML=`* Completar todos los campos correctamente`;
        p[3].style.display="block";
        return false;
    }
}
// FUNCION PARA CREAR FORMULARIO DE AGREGAR ITEM EXTRA//
function formularioExtraNuevo(){
    let cuadro = document.getElementById("itemNuevo");
    cuadro.innerHTML=
    `<p>Ingrese el extra nueva</p>
    <input type="text" class="encuesta__inputText" name="itemExtra" onfocusout="completarInputText('itemExtra',0)" id="itemExtra" placeholder="Nombre del ingrdiente extra">
    <p class="textoError itemNuevo__p"></p>
    <p>Para cuantas personas rinde aproximadamente</p>
    <input type="number" onfocusout="completarInputNumber('itemProporcion',1)" name="itemProporcion" id="itemProporcion" placeholder="4">
    <p class="textoError itemNuevo__p"></p>
    <p>Unidad del ingrediente</p>
    <input class="encuesta__radio itemNuevo__radio" type="radio" name="itemUnidad" id="gramo" checked>
    <label for="gramo">gramo</label>
    <input class="encuesta__radio itemNuevo__radio" type="radio" name="itemUnidad" id="unidad">
    <label for="unidad">por unidad</label>
    <p>Ingrese su valor estimado</p>
    <input type="number" onfocusout="completarInputNumber('itemPrecio',2)" name="itemPrecio" id="itemPrecio" placeholder="278">
    <p class="textoError itemNuevo__p"></p>
    <div class="encuesta__contenedorBtn">
    <a href="#" class="encuesta__btnAddItem" onclick="agregarExtra(listadoExtra),listaChecbox('encuesta__extra',extraCortes,'extra')">Guardar y cargar otra achura</a>
    <a href="#" class="encuesta__btnAddItem" onclick="cargarYCerrrar(agregarExtra(listadoExtra)),listaChecbox('encuesta__extra',extraCortes,'extra')">Guardar y cerrar</a>
    <a href="#" class="encuesta__btnAddItem" onclick="cerrarOverlay()">Cerrar</a>
    </div>
    <p class="textoError itemNuevo__p"></p>`;
}
//funcion crear lista de checkbox

function listaChecbox(idDiv,array,tipo) {
    encuesta=document.getElementById(idDiv);
    let contenido="";
    for (i=0;i<array.length;i++) {
        contenido=contenido.concat(`<div class="encuesta__contenedorCheckbox">
        <input class="encuesta__checkbox ${tipo}__checkbox" type="checkbox" name="${array[i].id}" id="${array[i].id}">
        <label for="${array[i].id}">${array[i].corte}</label>   
    </div>`);
    encuesta.innerHTML=contenido;    
    };
}

//funcion del boton

function chequeo(){
    let limpiar=document.getElementsByClassName("calculo");
    limpiar[0].innerHTML="";
    let p=document.getElementsByClassName("textoError");
    p[1].style.display="none";
    let comensales = parseInt(document.getElementById("pregunta1").value);
    let calculo=document.getElementsByClassName("calculo");
    calculo[0].style.display="none";
    if (comensales >= 1){
        calculo[0].className="calculo";
        console.log(`seran ${comensales} comensales`);
        calculo[0].style.display="block";

        //variables del pedido
        let asado = [],achuras =[], extra=[], combustible = [], pesoFinal=0, precioFinal=0, precioCombustible,precioExtra;
  
        //completar los array con lo que se va a consumir en el asado
        asado=vanAComerAsado("achuras__checkbox",asadoAchuras,achuras);
        asado=vanAComerAsado("asado__checkbox",asadoCortes,asado);
        extra=vanAComerAsado("extra__checkbox",extraCortes,extra);
        combustible=vanAComerAsado("combustible__radio",combustibleAsado,combustible);

        //calcular valor por unidad//
        valorUnidad(asado,comensales);
        precioExtra=CalcExtra(extra,comensales,precioExtra);

        ///calcular kilos//

        for (const kilos of asado) {
            pesoFinal= pesoFinal+(kilos.porcion*comensales); 
            precioFinal=precioFinal+(kilos.valor*comensales);           
        }
        //se toma el valor del combustible para sumarlo al precio final
        precioCombustible=CalcCumbustible(combustible,pesoFinal,precioCombustible);
        precioFinal=precioFinal+precioCombustible+precioExtra;

        let textoUno=document.createElement("p"), textoDos=document.createElement("p");
        textoUno.className="calculo__texto";
        textoDos.className="calculo__texto";
        textoUno.innerHTML=`en total se van a comer ${pesoFinal.toFixed(3)} kg un total de $${precioFinal.toFixed(2)}`;
        textoDos.innerHTML=`por cabeza van a ser $${(precioFinal/comensales).toFixed(2)}`;
        calculo[0].appendChild(textoUno);
        calculo[0].appendChild(textoDos);

        console.log(`en total se van a comer ${pesoFinal.toFixed(3)} kg un total de $${precioFinal.toFixed(2)}`);
        console.log(`por cabeza van a ser $${(precioFinal/comensales).toFixed(2)}`)

    }else{
        p[1].innerHTML=`* Completar número de comensales correctamente`;
        p[1].style.display="block";
        
        

    }
}
//Creamos los array que seran utilizados para generar los checkbox
const listadoAchuras=cargarLS(asadoAchuras,'asadoAchura');
const listadoCarnes=cargarLS(asadoCortes,'asadoCarne');
const listadoExtra=cargarLS(extraCortes,'asadoExtra');

listaChecbox("encuesta__achuras",listadoAchuras,"achuras");
listaChecbox("encuesta__cortes",listadoCarnes,"asado");
listaChecbox("encuesta__extra",listadoExtra,"extra");
