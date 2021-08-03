
const URLJSON = 'datos.json';

$('.resenas').before('<button id="btnReseña">Cargar Reseñas</button>');
$('#btnReseña').click(()=>{
    $.getJSON(URLJSON,(respuesta,estado)=>{
        if(estado==='success'){
            //limpiar
            const hijos=$('.resena');
            for (const hijo of hijos) {
                hijo.remove()
            }
            //rellenar
            for (const dato of respuesta) {
                $('.resenas').append(`
                <div class='resena'>
                    <div class="contenedorUsuario">
                        <div class="contenedorImg">
                            <img src="" alt="" class="usuarioImg" id="img--${dato.id}">
                        </div>
                        <div class="contenedorDatosUsuario">
                            <h2 id="usuario">Usuario: ${dato.nombre}</h2>
                            <p id="usuarioID">ID: ${dato.id}</p>
                        </div>
                    </div>
                    <div class="contenedorResena">
                        <p class="resenaTitulo">Reseña:</p>
                        <p class="resenaTexto">${dato.reseña}</p>
                        <div class="contenedorFechaValor">
                            <p class="resenaTitulo" id="textoFecha">Fecha: ${dato.fecha}</p>
                            <div class="contenedorEstrellas" id="estrellas--${dato.id}">
                            <p class="resenaTitulo">Valoración:</p>
                            </div>
                        </div>
                    </div>
                </div>
                `);
                let estrellaCompleta=parseInt(dato.estrellas);
                let estrellaMedia, estrellaVacia;
                for(i=1;i<=estrellaCompleta;i++){
                    $(`#estrellas--${dato.id}`).append(`<span class="armasecreta-star"></span>`);           
                }
                if((dato.estrellas%1)===0){
                    estrellaMedia=0;
                }else{
                    estrellaMedia=1;
                    $(`#estrellas--${dato.id}`).append(`<span class="armasecreta-star-half-empty"></span>`);           
                }
                estrellaVacia=5-estrellaMedia-estrellaCompleta;
                for(i=1;i<=estrellaVacia;i++){
                    $(`#estrellas--${dato.id}`).append(`<span class="armasecreta-star-o"></span>`);           
                }
                if(dato.nombre==="Francis Mallmann"){
                    $(`#img--${dato.id}`).attr("src","imagenes/Fmallmann.jfif")
                }else{
                    $(`#img--${dato.id}`).attr("src","imagenes/user.jpg")
                }
            };
        };
    });
    
    $('.resenas').css('background','transparent')
});

