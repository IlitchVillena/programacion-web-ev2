/* FUNCIÓN JQUERY QUE SE EJECUTA CUANDO SE CARGA LA PÁGINA*/
$( document ).ready(function() {
    /*FOOTER DEFINIDO CON INTERPOLACIÓN*/
    let navbar = ` <footer>
                        <h1 class="text-bg-warning text-white text-center mt-2">
                            <span><i><img src="./assets/img/icon/limon.png" alt="" width="70"></i></span>
                            LimonCube <a href="http://localhost:8900/portal-web" target="_blank"> <!-- <a href="https://www.amazon.com/.... es para refenciar algo o un link-->
                                <i><img src="./assets/img/icon/rubik.png" alt="" width="70"></i>
                            </a><!--text-danger   text-white  text-warning etc va cambiando el color-->
                        </h1>
                        <h1 class="text-center mt-2">
                            <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a> 
                            <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
                            <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter"></i></a> 
                        </h1> <!--para colocar un fondo de color al titulo --><!--text center para centra-->
                    </footer>`;
    /*CON JQUERY SE BUSCA EL ID pie-pagina Y SE INJECTA CÓDIGO HTML MEDIANTE LA 
    LA VARIABLE navbar */                    
    $("#pie-pagina").html(navbar);
});