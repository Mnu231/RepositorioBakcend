 import http from 'http';

const server = http.createServer((peticion , respuesta)=>{
    respuesta.end('Hola backend')
})

const connectedServer = server.listen(8080,()=>{
    console.log("Primer servidor escuchando")
})
 