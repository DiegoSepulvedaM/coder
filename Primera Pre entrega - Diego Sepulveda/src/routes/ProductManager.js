import { promises } from 'fs';

export default class ProductManager {

  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {
    
  }

  async getById(id) {

    
    try {
      const data = await promises.readFile(this.ruta, 'utf-8');
      const products = JSON.parse(data);
      const producto = products.find((p) => p.id === id);
      if (producto) {
        return producto;
      } else {
        console.log('Product with ID', id, 'not found');
        return;
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  
  async getcartById(id) {

    
    try {
      const data = await promises.readFile(this.ruta, 'utf-8');
      const carts = JSON.parse(data);
      const cart = carts.find((c) => c.id === id);
      if (cart) {
        return cart;
      } else {
        console.log('Product with ID', id, 'not found');
        return;
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  async getAll() {
    try {
      const products = await promises.readFile(this.ruta, 'utf-8');
      return JSON.parse(products);
      
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  createProduct = async (producto) => {
    try {
        const products = await this.getProducts();

        if (products.length === 0) {
            producto.id = 1;
        } else {
            producto.id = products[products.length - 1].id + 1;
        }

        products.push(producto);

    await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

        return producto;
    } catch (error) {
      console.log(error);
 }
}

updateProduct = (id, updatedProduct) => {
  try {

    const productos = JSON.parse(fs.readFileSync('./files/Productos.json', 'utf8'));
    const producto = productos.findIndex((product) => product.id === id);

    if (producto === -1) {
      console.log(`Product with id ${id} not found.`);
      return;
    }

    productos[producto] = { ...productos[producto], ...updatedProduct };

    fs.writeFileSync(this.path, JSON.stringify(productos, null, 2));

    console.log(`Product with id ${id} updated successfully.`);
  } catch (error) {
    console.error('Error updating product:', error);
  };
};


  async deleteById(id) {
    
  }

  async deleteAll() {
    
  }
}