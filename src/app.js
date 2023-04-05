import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

//Creamos la instancia de la clase
const productManager = new ProductManager('./productos.json');

app.use(express.urlencoded({extended: true}));


//Ruta /products tipo get app.get llamar al método getAll de la clase ProductManager para esto hay que instanciar la clase

app.get('/products', async (req, res) => {
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
    }
  });

//Ruta /products/:pid tipo app.get donde debemos llamar al metodo getById de la clae ProductManager usar la instancia de la clase ya creada

app.get('/products/:pid', async (req, res) => {
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

//Ejmplo de async await llamado a la clase ProductMnager
app.get('/', async (req,res)=> {
    const products = await productManager.getAll();
    res.send({products});
})

app.listen(8080,()=>console.log("Listening on 8080")) 