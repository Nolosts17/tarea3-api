import { Router } from 'express';
import { productoMethods } from '../controllers/product.controller'; // Asegúrate de que la ruta sea correcta

const router = Router();

router.get("/", productoMethods.getProductos);
router.get("/:id", productoMethods.getProduct);
router.post("/", productoMethods.addProducto);
router.put("/:id", productoMethods.updateProducto);
router.delete("/:id", productoMethods.deleteProducto);

export default router;
