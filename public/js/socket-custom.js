var socket = io();
        // on = Es para escuchar informacion
        socket.on('connect', function(){
            console.log("conectado al servidor");
            
        });

        socket.on('disconnect', function(){
            console.log("Perdimos conexion con el servidor");
            
        });

        //enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Fernando',
            mensaje: 'Hola mundo'
        }, function( resp ){
            console.log("Respuesta server: ",resp);
            
        });

        //escuchar informacion

        socket.on('enviarMensaje', function(mensaje){
            console.log('servidor:', mensaje);
            
        });