console.log('LOAD LIB FORMULARIO-CONTACTO');

/*  FUNCIÓN QUE PERMITE ALMACENAR LA INFORMACIÓN DEL FORMULARIO
    DE CONTACTO. */
function save(){
    try{
        let messageError = "";
        let nombres = document.getElementById('nombres').value;
        console.log('NOMBRES: ' + nombres);
        let rut = document.getElementById('rut').value;
        console.log('RUT: ' + rut);
        let apellidoPaterno = document.getElementById('apellido-paterno').value;
        console.log('APELLIDO PATERNO: ' + apellidoPaterno);
        let apellidoMaterno = document.getElementById('apellido-materno').value;
        console.log('APELLIDO MATERNO: ' + apellidoMaterno);
        let direccion = document.getElementById('direccion').value;
        console.log('DIRECCION: ' + direccion);
        let mail = document.getElementById('mail').value;
        console.log('E-MAIL: ' + mail);
        let pago = document.getElementById('pago').value;
        console.log('PAGO: ' + pago);
        let generos = document.getElementById('generos').value;
        console.log('GENERO: ' + generos);
        let tarjeta = document.getElementById('tarjeta').value;
        console.log('TARJETA: '+ tarjeta);
        
        
        if(nombres == ""){
            console.log('nombres vació');
            messageError = `${messageError} Debe ingresar su <b>nombre</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(apellidoPaterno == ""){
            console.log('apellidoPaterno vació');
            messageError = `${messageError} Debe ingresar su <b>apellido paterno</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(apellidoMaterno == ""){
            console.log('apellidoMaterno vació');
            messageError = `${messageError} Debe ingresar su <b>apellido materno</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }    
        if(rut == ""){
            console.log('rut vació');
            messageError = `${messageError} Debe ingresar su <b>Rut</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        } 
        if(direccion == ""){
            console.log('direccion vació');
            messageError = `${messageError} Debe ingresar su <b>dirección</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(mail == ""){
            console.log('mail vació');
            messageError = `${messageError} Debe ingresar su <b>e-mail</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(pago != "1" && pago != "2" && pago != "3"  ){
            console.log('pago vació');
            messageError = `${messageError} Debe ingresar su <b>pago</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(generos != "1" && generos != "2" && generos != "3" ){
            console.log('generos vació');
            messageError = `${messageError} Debe ingresar su <b>género</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(tarjeta == "" ){
            console.log('tarjeta vació');
            messageError = `${messageError} Debe ingresar su <b>N° de targeta</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        

        if(messageError == ""){
            document.getElementById('message-error').classList.add('show');
            document.getElementById('message-error').classList.remove('alert-danger');
            document.getElementById('message-error').classList.add('alert-success');
            document.getElementById('message').innerHTML = 'Datos almacenados.';
        }else{
            document.getElementById('message-error').classList.add('show');
            document.getElementById('message-error').classList.remove('alert-success');
            document.getElementById('message-error').classList.add('alert-danger');
            document.getElementById('message').innerHTML = messageError;
        }
        
        console.log('messageError: ' + messageError);
    }catch(e){
        console.log("Error", e.stack);
        console.log("Error", e.name);
        console.log("Error", e.message);
    }
}