import Product from "./product.model"; 

export const getAllProducts = async() => {
    return await Product.find();
};

export const getProductByid = async(id) => {
    return await Product.findById(id);
};

export const createProduct = async(productData) => {
    const newProduct = new Product(productData);
    return await newProduct.save();
};

export const updateProduct = async(id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
};

export const deleteProduct = async(id) => {
    return await Product.findByIdAndDelete(id);
};