/* FUNCIÓN JQUERY QUE SE EJECUTA CUANDO SE CARGA LA PÁGINA*/
$( document ).ready(function() {
    /*MENÚ DEFINIDO CON INTERPOLACIÓN*/
    let navbar = `  <nav class="navbar navbar-expand-lg navbar-warnign bg-warning">
                        <div class="container-fluid">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="index.html"><img src="./assets/img/icon/home.png" width="35px" alt=""></a></li>
                                <li class="nav-item"><a class="nav-link" href="galeria.html">GALERÍA</a></li>
                                <li class="nav-item"><a class="nav-link" href="formulario.html">PEDIDOS</a></li>
                                <li class="nav-item"><a class="nav-link" href="contacto.html">CONTACTO</a></li>
                                <li class="nav-item"><a class="nav-link" href="seguimiento.html">SEGUIR MI PEDIDO</a></li>
                            </ul>
                            
                        </div>
                    </nav>`;
    /*CON JQUERY SE BUSCA EL ID menu-principal Y SE INJECTA CÓDIGO HTML MEDIANTE LA 
    LA VARIABLE navbar */                    
    $("#menu-principal").html(navbar);
});