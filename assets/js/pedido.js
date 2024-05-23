console.log('LOAD LIB PEDIDO');

/*  FUNCIÓN QUE PERMITE ALMACENAR LA INFORMACIÓN DEL FORMULARIO
    DE CONTACTO. */
function save(){
    try{
        let messageError = "";
        let rut = document.getElementById('rut').value;
        console.log('RUT: ' + rut);
        
        let boleta = document.getElementById('boleta').value;
        console.log('BOLETA: ' + boleta);

        if(rut == ""){
            console.log('rut vació');
            messageError = `${messageError} Debe ingresar su <b>Rut</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(boleta == ""){
            console.log('boleta vació');
            messageError = `${messageError} Debe ingresar su numero de <b>boleta</b>.<br>`;
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
