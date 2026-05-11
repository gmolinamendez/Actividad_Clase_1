const http = requiere('http');

http.createServer((req, res) => {
    console.log("Here we are")
    res.write("Hello from JS");
    res.end;
}).listen(4000, () => console.log('Servidor escuchando en el puerto 4000, http://localhost:4000'));

// Que hace require('http')?: Permite importar el modulo HTTP con el fin de crear un servidor web.
// Que representan req y res?: Req representa Request ques una solicitud que el cliente hace al servidor, y res representa Response que es la respuesta que el servidor envía al cliente.
// Cual es el proposito de listen(3000)?: El método listen hace que el servidor escuche en el puerto 3000 para recibir solicitudes entrantes.
// Que hace res.write? se utiliza para enviar datos al cliente como parte de la respuesta HTTP.