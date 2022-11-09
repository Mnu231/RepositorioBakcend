import express from 'express';
import productsRouter from './routes/products.router.js';
import __dirname from './utils.js';

const app = express();

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/products',productsRouter);

app.listen(8080,()=>console.log("Listening :)"))
//ENDPOINTS




const pathToFile = "./productos.json"