import Product from '../models/Product.model.js';

//obtener todos los productos que hay en la bd
export const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        if(!products || products.length === 0){
            return res.status(404).json({ message: 'No hay productos cargados' })
        }
        return res.json(products)
    }catch(error){
        console.error('error al obtener los productos:', error)
        return res.status(500).json({ message: "Error interno del servidor" })
    }
}

//agregar productos
export const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        if (!newProduct){
            return res.status(404).json({ message: 'campos incompletos' })
        }
        await newProduct.save(); //guarda la info que tenemos en la constante en newProduct
        return res.status(201).json(newProduct);
    } catch(error) {
        console.error('Error al guardar el producto:', error);
        return res.status(500).json({ message: 'Error interno del servidor' })
    }
};