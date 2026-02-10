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
        const { id } = req.params;
        const product = await productService.getProductByid(id);
        if (!product) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }
};

export const create = async(req, res) => {
    try {
        const { name, price, quantity, category } = req.body;
        if (!name || !price || !quantity || !category ) return res.status(404).json({message: 'Required fields'}) 
        const newProduct = await productService.createProduct({name, price, quantity, category});
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update = async(req, res) => {
    try {
        const {id} = req.params; 
        const updatedProduct = await productService.updateProduct( id, req.body );
        if(!updatedProduct) return res.status(404).json({ message: 'Not found product' }); 
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
