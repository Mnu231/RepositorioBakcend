import fs from 'fs';
import __dirname from '../utils.js';

const pathToProducts = __dirname+'/files/products.json'
export default class ProductsManager{

    add = async(product)=>{
        if(fs.existsSync(pathToProducts)){
            let data = await fs.promises.readFile(pathToProducts,'utf-8');
            let products = JSON.parse(data);
            if(products.length===0){
                //Is the first pet.
                product.id=1;
                products.push(product);
                await fs.promises.writeFile(pathToProducts,JSON.stringify(products,null,2));
                return {status:"success",message:"Added 1 product"}
            }
            products.push(product);
            await fs.promises.writeFile(pathToProducts,JSON.stringify(products,null,2));
            return {status:"success",message:"Added 1 product"}
        }else{
            product.id=1;
            await fs.promises.writeFile(pathToProducts,JSON.stringify([product],null,2));
            return {status:"success",message: "Added 1 product"}
        }
    }
    get = async()=>{
        if(fs.existsSync(pathToProducts)){
            try{
                let data = await fs.promises.readFile(pathToProducts,'utf-8');
                let products = JSON.parse(data);
                return {status:"success",payload:products}
            }catch(error){
                return {status:"error",error:error}
            }
        }else{
            return {status:"success",payload:[]}
        }
    }

    getById = async(id) => {
        if (!id){
            return{
                status: "error" ,
                message: "ID is required",
            }
        }
        if(fs.existsSync(pathToProducts)){
            let data =  await fs.promises.readFile(pathToProducts, "utf-8");
            let productos = JSON.parse(data);
            let producto = productos.find((producto) => producto.id == id)
            if (producto){
                return{
                    status: "success" ,
                    message: producto,
                }
            } else {
                return{
                    status: "error" ,
                    message: "product not found",
                }
            }
             
        } else {
            return{
                status: "error" ,
                message: "No products found",
            }
        }
    }

    upDateById = async( id , titulo, precio , thumbnail ) =>{
        if(fs.existsSync(pathToProducts)){
            try{
                let data = await fs.promises.readFile(pathToProducts,'utf-8');
                let products = JSON.parse(data);
                let producto = products.find((producto) => producto.id == id)
                producto.tittle = titulo;
                producto.price = precio;
                producto.thumbnail = thumbnail;
                await fs.promises.writeFile(pathToProducts,JSON.stringify([producto],null,2));
                return {status:"success",message: "Added 1 product"}
                
            }catch(error){
                return {status:"error",error:error}
            }
        }else{
            return {status:"success",payload:[]}
        }
    }

    deleteById = async (id) => {
        if (!id){
            return{
                status: "error" ,
                message: "ID is required",
            }
        }
        if(fs.existsSync(pathToProducts)){
            let data =  await fs.promises.readFile(pathToProducts, "utf-8");
            let productos = JSON.parse(data);
            let newProductos = productos.filter((producto) => producto.id != id)
            await fs.promises.writeFile(
                pathToProducts,
                JSON.stringify(newProductos , null , 2)
            );
            return{
                status: "success" ,
                message: "product deleted",
            }
        } else {
            return{
                status: "error" ,
                message: "No products found",
            }
        }
    }
    
}