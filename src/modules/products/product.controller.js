import * as productService from './product.service';

export const getProducts = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 