import express from 'express';
import ProductManager from './ProductManager.js';
import { Router } from 'express';
import fs from 'fs';

const products = []

const router = Router();

//Creamos la instancia de la clase
const productManager = new ProductManager('./productos.json');

router.use(express.urlencoded({extended: true}));


//Ruta /products tipo get app.get llamar al método getAll de la clase ProductManager para esto hay que instanciar la clase

router.get('/', async (req, res) => {
    try {
      const limit = req.query.limit;
      const products = await productManager.getAll();
      if (limit) {
        res.json(products.slice(0, limit));
      } else {
        res.json(products);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
      res.send({products})
    }
  });


  router.get('/:pid', async (req, res) => {
    try {
      const productId = Number(req.params.pid);
      const product = await productManager.getById(productId);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: `Product with ID ${productId} not found` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


     
      
  let lastProductId = 0;

router.post('/', async (req, res) => {

  const { title, description, price, stock, category,estado } = req.body;
  
  // validar que todos los campos obligatorios estén presentes
  if (!title || !description  || !price || !stock || !category ||!estado) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  // generar un id único para el producto

  lastProductId++;
  const id = lastProductId;

  

  // crear un objeto con los datos del producto
  const product = { id, title, description, price, stock, category, estado: true };


  // leer el archivo de productos
  fs.readFile('./productos.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de productos' });
    }

    // convertir los datos leídos a un array de objetos
    let products = [];
    if (data) {
      products = JSON.parse(data);
    }

    // agregar el nuevo producto al array de productos
    products.push(product);

    // escribir el nuevo array de productos en el archivo
    fs.writeFile('productos.json', JSON.stringify(products), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al escribir el archivo de productos' });
      }

      // devolver el nuevo producto creado como respuesta
      return res.status(201).json(product);
    });
  });
});

router.put('/:pid', async (req, res) => {
  const pid = req.params.pid; // Obtener el pid de la solicitud

  // Buscar el producto correspondiente en el archivo JSON
  const productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
  const index = productos.findIndex((producto) => producto.id === parseInt(pid));
  if (index === -1) {
    // Si no se encuentra el producto, enviar una respuesta de error
    return res.status(404).send({ error: 'Producto no encontrado' });
  }

  // Actualizar los campos del producto con los valores recibidos en el cuerpo de la solicitud
  const productoActualizado = {
    ...productos[index], // Conservar los valores originales que no se actualizaron
    title: req.body.title,
    description: req.body.description,
    code: req.body.code,
    price: req.body.price,
    status: req.body.status,
    stock: req.body.stock,
    category: req.body.category,
    thumbnails: req.body.thumbnails,
  };

  // Sobrescribir el archivo JSON con la información actualizada del producto
  productos[index] = productoActualizado;
  fs.writeFileSync('productos.json', JSON.stringify(productos));

  // Enviar una respuesta con el producto actualizado
  res.send(productoActualizado);
});
router.delete('/:pid', async (req, res) => {
   const pid = req.params.pid;
  
  // Leer el contenido del archivo JSON
  fs.readFile('productos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    // Convertir el contenido del archivo JSON en un array de productos
    const products = JSON.parse(data);

    // Buscar el producto con el pid indicado
    const index = products.findIndex(p => p.id === Number(pid));
    if (index === -1) {
      // El producto no se encontró
      res.status(404).send('El producto no se encontró');
      return;
    }

    // Eliminar el producto del array de productos
    products.splice(index, 1);

    // Escribir el nuevo contenido del archivo JSON
    fs.writeFile('productos.json', JSON.stringify(products), err => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
        return;
      }

      // Enviar una respuesta indicando que el producto se eliminó correctamente
      res.send('El producto se eliminó correctamente');
    });
  });
});

export default router;