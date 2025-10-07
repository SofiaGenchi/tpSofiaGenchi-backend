import express from 'express';
import connectDB from './src/config/db.js';
import morgan from 'morgan';
import ProductRoutes from './src/routes/Product.routes.js'

// base de datos
connectDB()

const app = express();

//crear middl
app.use(express.json()); //permite procesar cuerpos de solicitudes
app.use(morgan("dev")); //muestra peticiones en el servidor

// configuracion del puerto
const PORT = process.env.PORT || 5000;

//rutas
app.use('/api/products', ProductRoutes)

// ponemos en escucha el servidor
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});