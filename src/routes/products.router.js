import { Router } from 'express';
import ProductsManager from '../Manager/productsManager.js';
import uploader from '../services/upload.js';


const router = Router();


const productsService = new ProductsManager();
router.post('/',uploader.single('image'), async (req,res) =>{
    const image = req.protocol+"://"+req.hostname+':8080/images/'+req.file.filename;
    
    let product = req.body;
    product.image = image
    const result = await productsService.add(product);
    res.send({status:"success",message:product.id}) 
})

router.get('/',async (req,res)=>{
    let result = await productsService.get()
    res.send(result)
})

router.get('/:id',async (req,res)=>{
    const id = parseInt(req.params.id);
    let result = await productsService.getById(id)
    res.send(result)
})

router.put('/:id',async (req,res)=>{
    const id = parseInt(req.params.id);
    let titulo = req.body.tittle;
    let price = req.body.price;
    let thumbnail = req.body.thumbnail;
    let result = await productsService.upDateById( id, titulo, price , thumbnail)
    res.send(result)

})

router.delete('/:id',async (req,res)=>{
    const id = parseInt(req.params.id);
    let result = await productsService.deleteById(id)
    res.send(result)
})

export default router;