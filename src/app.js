import express from "express";
import morgan from "morgan";
// Routes
import categoriaRoutes from './routes/categoria.routes';
import productoRoutes from './routes/producto.routes';
import cors from 'cors';

const app = express();
app.use(cors());
// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/api/categorias', categoriaRoutes); // Rutas para categorías
app.use('/api/productos', productoRoutes); // Rutas para productos

export default app;
