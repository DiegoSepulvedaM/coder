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
  

  async getAll() {
    try {
      const products = await promises.readFile(this.ruta, 'utf-8');
      return JSON.parse(products);
      
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async deleteById(id) {
    
  }

  async deleteAll() {
    
  }
}