class ProductManager{
    constructor() {
        this.products = []
        this.index = 0
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{
        this.index++
        const id = this.index
        const product = { id, title, description, price, thumbnail, code, stock}
        if ( !title || !description || !price || !thumbnail || !code || !stock){
            return console.log('Revisar datos completados')
        }

        if (this.products.some(product => product.code === code)) {
            return console.log(`Error de repetición en el código N° ${code} `);
        }

        this.products.push(product)
    }

    getProducts = () => {
        return this.products;
    }

    getProductById = (id) => {
        const product = this.products.find(product => product.code === id);
        if (!product) {
            console.log("Product not found");
        }
        return product;
    }
};

const productM = new ProductManager();

productM.addProduct('Coffee Minas Gerais classic Natural',
'Citrus coffee with notes of nuts and chocolate, low acidity and creamy body.', '6 U$D',
'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/139/353/products/brasil-minas-gerais-natural-125-9d565470ec5a61a63616630457183584-1024-1024.webp',
'12', '58');
productM.addProduct('Coffee Guatemala Ayarza', 
'Honey and chocolate coffee with almonds. Medium acidity and smooth body.', '4.85 U$S',
'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/139/353/products/guatemala-2501-be672b647f69821a7916632557369450-1024-1024.webp',
'05', '22');

productM.getProducts();

productM.getProductById();

console.log(productM.products);