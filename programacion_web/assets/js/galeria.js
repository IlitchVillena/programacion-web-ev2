/* FUNCIÓN JQUERY QUE SE EJECUTA CUANDO SE CARGA LA PÁGINA*/
$( document ).ready(function() {
    /* GALERÍA DEFINIDA MEDIANTE INTERPOLACIÓN Y CARGA DE JSON*/    
    cargarImagenes();
});

async function cargarImagenes(){
    let url = 'http://localhost:8900/portal-web/assets/json/galeria.json';
    let method = 'GET';
    /* LLAMADO A galeria.json*/
    console.log('CALL SERVICE: ', url);
    const resp = await fetch(url, {
        method: method,
    }).then((response) => {
        console.log(`response: ${response.status}`)
        /* SECCIÓN PARA VERIFICAR LA RESPUESTA */
        if (response.status == 200) {
            console.log('RESPUESTA CORRECTA.');
            /* RETORNANDO RESPUESTA EN FORMATO JSON*/
            return response.json();
        } else {
            console.log('ERROR EN LA RESPUESTA DE LA API DPA');
            /* EN CASO DE ERROR SE PROPAGA Y ES CAPTURADO POR EL BLOQUE CATCH*/
            //throw new Exception('ERROR EN LA RESPUESTA DE LA API DPA');
        }
    }).then((data) => {
        let cards = '';
        let imagenes = data.imagenes;
        console.log(`imagenes: ${imagenes}`)
        for (i = 0; i < imagenes.length; i++){
            
            let imagen = imagenes[i];
            console.log(`imagen: ${imagen}`)

            /* 1 */
            if(imagen.nombre == "2x2x2QidiSStickerless"){
                cards = `   ${cards}
                          <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">2x2x2 Qidi S Stickerless</h5>
                                <h5 class="card-title text-center">$3.990</h5>
                                <p class="card-text text-center">Buena relación calidad-precio, ideal para comenzar una nueva variedad!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;}
            /* 2 */
            if(imagen.nombre == "3x3x3QiyiMPro"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">3x3x3 Qiyi M Pro</h5>
                                <h5 class="card-title text-center">$11.990</h5>
                                <p class="card-text text-center">Cubo de alta calidad y bajo costo, ideal para comenzar en el speedrunnig!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }
            /* 3 */
            if(imagen.nombre == "2x2x2KilominxQiyi"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">2x2x2 Kilominx Qiyi</h5>
                                <h5 class="card-title text-center">$8.990</h5>
                                <p class="card-text text-center">¿Te aburrieron los cubos convencionales? Este cubo es perfecto para comenzar a variar!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }
            /* 4 */
            if(imagen.nombre == "3x3x3MegaminxQiheng"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">3x3x3 Megaminx Qiheng</h5>
                                <h5 class="card-title text-center">$9.990</h5>
                                <p class="card-text text-center">El cubo que necesitas para continuar con los cubos Minx!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }
            /* 5 */
            if(imagen.nombre == "2x2x2MirrorQiyi"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">2x2x2 Mirror Qiyi</h5>
                                <h5 class="card-title text-center">$4.990</h5>
                                <p class="card-text text-center">¿Demasiado fáciles los cubos comunes? Este es el reto que necesitas!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }
            /*6 */
            if(imagen.nombre == "3x3x3MirrorQiyi"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">3x3x3 Mirror Qiyi</h5>
                                <h5 class="card-title text-center">$6.990</h5>
                                <p class="card-text text-center">¿Demasiado fáciles los cubos comunes? Este es el reto que necesitas!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }
            /* 7 */
            if(imagen.nombre == "SkewbMeilongStickerless"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">Skewb Meilong Stickerless</h5>
                                <h5 class="card-title text-center">$6.990</h5>
                                <p class="card-text text-center">Similar al 3X3X3 común pero ¿Podrás encontrar la diferencia?</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }
            /* 8 */
            if(imagen.nombre == "Square-1ShengShou"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">Square-1 ShengShou</h5>
                                <h5 class="card-title text-center">$14.990</h5>
                                <p class="card-text text-center">Si quieres sufrir esto es lo que buscas!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }
            /*9 */
            if(imagen.nombre == "PyraminxQiming"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">Pyraminx Qiming</h5>
                                <h5 class="card-title text-center">$8.990</h5>
                                <p class="card-text text-center">No todo en la vida son cubos, comienza con tu primer Pyraminx!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;
            }

            /*10 */
            if(imagen.nombre == "9x9x9MoyuMeilong"){
                cards = `   ${cards}
                            <div class="col-4 m-5">
                            <div class="card" style="width: 350px;">
                                <img src="${imagen.url}" class="card-img-top" alt="${imagen.nombre}">
                                <div class="card-body">
                                <h5 class="card-title text-center">9x9x9 Moyu Meilong</h5>
                                <h5 class="card-title text-center">$39.990</h5>
                                <p class="card-text text-center">¿Aburrido del 3x3x3? Aquí tienes la solución, un cubo al cubo!</p>
                                <a href="formulario.html" class="btn btn-primary">Comprar</a>
                                </div></div></div>`;}
                                
        }
        $("#imagenes").html(cards);
    }).catch((err) => {
        /* SECCIÓN PARA CAPTURAR ERRORES */
        console.log(`ERROR:  ${err.message}`);
    });
}