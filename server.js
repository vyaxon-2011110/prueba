var http = require('http');
//callback
http.createServer(function(peticion,respuesta){
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Hola Mundo!!! xD");
	respuesta.end();
}).listen(9000); //puerto usado
