import { getConnection } from "../database/database";

// Obtener todos los productos
const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, descripcion, precio, categoria_id, stock FROM productos");
        res.json(result);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

// Obtener un producto por ID
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, descripcion, precio, categoria_id, stock FROM productos WHERE id = ?", [id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// Añadir un nuevo producto
const addProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, categoria_id, stock } = req.body;

        if (nombre === undefined || descripcion === undefined || precio === undefined || categoria_id === undefined || stock === undefined) {
            return res.status(400).json({ message: "Bad Request. Please fill all fields." });
        }

        const producto = { nombre, descripcion, precio, categoria_id, stock };
        const connection = await getConnection();
        await connection.query("INSERT INTO productos SET ?", producto);
        res.json({ message: "Producto añadido exitosamente" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Actualizar un producto
const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, categoria_id, stock } = req.body;

        if (id === undefined || nombre === undefined || descripcion === undefined || precio === undefined || categoria_id === undefined || stock === undefined) {
            return res.status(400).json({ message: "Bad Request. Please fill all fields." });
        }

        const producto = { nombre, descripcion, precio, categoria_id, stock };
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE id = ?", [producto, id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar un producto
const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE id = ?", [id]);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const productoMethods = {
    getProductos,
    getProduct,
    addProducto,
    updateProducto,
    deleteProducto
};