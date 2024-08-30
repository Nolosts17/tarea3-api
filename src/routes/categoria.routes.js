import { Router } from "express";
import { categoriaMethods } from "../controllers/categoria.controller";

const router = Router();

router.get("/", categoriaMethods.getCategorias);
router.get("/:id", categoriaMethods.getCategoria);
router.post("/", categoriaMethods.addCategoria);
router.put("/:id", categoriaMethods.updateCategoria);
router.delete("/:id", categoriaMethods.deleteCategoria);

export default router;
