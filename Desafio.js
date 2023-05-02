import fs from 'fs';

class ProductManager {
    constructor() {
        this.path = 'products.json'
    }

    async generateId(){
        let products = await this.getProducts()
        return products.length + 1
    }

    async getProducts(){
        let data = await fs.promises.readFile(this.path)
        let products = JSON.parse(data)
        return products
    }

    async addProduct(product){
        let products = await this.getProducts()
        products.push(product)
        console.log("Agregaste un producto");
        await fs.promises.writeFile(this.path, JSON.stringify(products))
    }

    
    async getProductByid(id){
        let products = await this.getProducts()
        let idProduct = products.find(product => product.id === id);
        if (!idProduct) {
            console.log("Product not Found");
        } else{
            return console.log(idProduct)
        }
    }

    async updateProduct(id, product){
        let products = await this.getProducts()
        let indice = products.findIndex(product => product.id === id)
        if (indice !== -1) {
            products[indice].title = product.title
            products[indice].description = product.description
            products[indice].price = product.price
            products[indice].code = product.code
            products[indice].stock = product.stock
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products))
        return console.log(`Producto actualizado`);
    }

    async deleteProduct(id){
        let products = await this.getProducts()
        let indice = products.findIndex(product => product.id === id)
        if (indice !== -1) {
            products.splice(indice, 1)
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products))
        return console.log(`Eliminaste un producto`);
    }
};

const manager = new ProductManager();

let product1 = {
    id: await manager.generateId(),
    title :"Coffee Minas Gerais classic Natural",
    description : "Citrus coffee with notes of nuts and chocolate",
    price: '6 U$D',
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/139/353/products/brasil-minas-gerais-natural-125-9d565470ec5a61a63616630457183584-1024-1024.webp',
    code: 12,
    stock: 58
}

let product2 = {
    id: await manager.generateId(),
    title :"Coffee Guatemala Ayarza",
    description : "Honey and chocolate coffee with almonds.",
    price:  '4.85 U$S',
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/139/353/products/guatemala-2501-be672b647f69821a7916632557369450-1024-1024.webp',
    code: 05,
    stock: 22
}

// Agregar
manager.addProduct(product2)
// Borrar
manager.deleteProduct(1)