
const fs = require('fs');

fs.writeFileSync('./archivo1.txt','bruh')

const Contenedor = require ("./contenedor");

const contenedor = new Contenedor();

let producto = {
    tittle : "buzo azul" ,
    price : "4500" ,
    thumbnail : "https://xd.com"
}

/* contenedor.save(producto).then((response) => {
    console.log(response)
})  
 */

/* contenedor.getAll().then((response) => {
    console.log(response);
}) */

/* contenedor.getById(3).then((response) => {
    console.log(response)
}) */

/* contenedor.deleteById(3).then((response) => {
    console.log(response);
}) */

contenedor.deleteAll().then((response) =>{
    console.log(response);
})