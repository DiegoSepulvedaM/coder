import { Router } from 'express';
import { uploader } from '../utils.js';
import fs from 'fs';
import ProductManager from './ProductManager.js';


const router = Router();

const carts =  [];
const cartFilePath = './cart.json';


const productManager = new ProductManager('./cart.json');

router.post('/', (req, res) => {
    // Generar un nuevo id para el carrito
    const cartId = Math.floor(Math.random() * 1000000) + 1;
  
    // Crear el objeto carrito con los datos recibidos en el body
    const newCart = {
      id: cartId,
      products: req.body.products || []
    };
  
    // Leer los carritos existentes en el archivo
    let carts = [];
    try {
      const cartsData = fs.readFileSync('./cart.json');
      carts = JSON.parse(cartsData);
    } catch (error) {
      console.error(error);
    }
  
    // Agregar el nuevo carrito al arreglo de carritos
    carts.push(newCart);
  
    // Guardar el arreglo actualizado en el archivo cart.json
    try {
      fs.writeFileSync('./cart.json', JSON.stringify(carts));
      res.status(201).json(newCart);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el carrito');
    }
  });

  

  router.get('/:cid', async (req, res) => {
    try {
      const cartId = Number(req.params.cid);
      const cart = await productManager.getcartById(cartId);
      if (cart) {
        res.json(cart);
      } else {
        res.status(404).json({ message: `cart with ID ${cartId} not found` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
 



// Ruta para agregar un producto a un carrito
router.post('/:cid/product/:pid',  (req, res) => {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const quantity = req.body.quantity;

  // Cargar información del archivo "carrito.json"
  let cartData = fs.readFileSync('cart.json');
  let cart = JSON.parse(cartData);

  // Buscar el carrito correspondiente
  let selectedCart = cart.find((c) => c.id == cartId);

  if (!selectedCart) {
    // Si no existe el carrito, crear uno nuevo
    selectedCart = {
      id: cartId,
      products: [],
    };
    cart.push(selectedCart);
  }

  // Buscar el producto correspondiente
  let selectedProduct = selectedCart.products.find((p) => p.product == productId);

  if (!selectedProduct) {
    // Si no existe el producto, agregar uno nuevo
    selectedProduct = {
      product: productId,
      quantity: quantity,
    };
    selectedCart.products.push(selectedProduct);
  } else {
    // Si ya existe el producto, incrementar la cantidad
    selectedProduct.quantity += quantity;
  }

  // Guardar la información actualizada en el archivo "carrito.json"
  fs.writeFileSync('cart.json', JSON.stringify(cart, null, 2));

  res.json(selectedCart);
});

export default router;