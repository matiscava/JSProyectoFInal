contenedorSlider=$('.encuesta__slider');
btnDerecha=$('.encuesta__span#der');
btnIzquierda=$('.encuesta__span#izq');
margen=0;

// if(btnDerecha.hasCLass('inactivo')){
// }else{
//     btnDerecha.on('click',()=>{
//         margen-=50;
//         contenedorSlider.css('marginLeft',`${margen}%`);
//     })
// }

btnIzquierda.on('click',()=>{
    margen+=100;
    contenedorSlider.css('marginLeft',`${margen}%`);
})

$('#pregunta1').on('change',()=>{
    if($('#pregunta1').val()<0){
        btnDerecha.removeClass('inactivo');
    }
})
