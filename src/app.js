import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();

app.use(express.urlencoded({extended:true}))

const manager = new ProductManager

app.get("/products", async(req, res)=>{
    let products = await manager.getProducts()
    const limit = req.query.limit;
    if(limit){
        res.json(products.slice(0, limit));
    }else{
        res.json(products);
    }
    res.send(limit)
})

app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    let products = await manager.getProducts()
    const product = products.find(p => p.id == id);
    console.log(products)
    res.send(products)
  });

const server = app.listen(8080, () => console.log('Server running on port: 8080'))