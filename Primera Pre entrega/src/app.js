import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import { __dirname } from './utils.js';

const app = express();

//Parametros de config
app.use(express.json());


// app.use((req, res, next) => {
//     console.log('Time: ', Date.now());
//     next();
// });

function middleware1(req, res, next) {
    console.log('Time: ', Date.now());
    next();
}

//Configuracion para agregar funcionalidad de archivos estáticos
app.use(express.static(`${__dirname}/public`));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('/test', middleware1, (req, res) => {
    res.send('Hola mundo');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Error no contralado');
});

app.listen(8080, () => console.log('Server running on port 8080'));