import * as productService from './product.service';

export const getProducts = async(req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 

export const getProduct = async(req, res) => {
    try {
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }
}