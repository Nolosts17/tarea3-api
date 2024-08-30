import { getConnection } from "../database/database";

// Obtener todas las categorías
const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, descripcion FROM categorias");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, descripcion FROM categorias WHERE id = ?",[id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        if (nombre === undefined || descripcion === undefined) {
            return res.status(400).json({ message: "Bad Request. Please fill all fields." });
        }

        const categoria = { nombre, descripcion };
        const connection = await getConnection();
        await connection.query("INSERT INTO categorias SET ?", categoria);
        res.json({ message: "Categoría añadida exitosamente" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// Actualizar una categoría
const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        if (id === undefined || nombre === undefined || descripcion === undefined) {
            return res.status(400).json({ message: "Bad Request. Please fill all fields." });
        }

        const categoria = { nombre, descripcion };
        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET ? WHERE id = ?", [categoria, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// Eliminar una categoría
const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE id = ?", [id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const categoriaMethods = {
    getCategorias,
    getCategoria,
    addCategoria,
    updateCategoria,
    deleteCategoria
};

