import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
        trim: true
    },
    price: {
        type: "Number",
        required: true,
        default: 0,
        min: 0
    },
    quantity: {
        type: "Number",
        required: true,
        default: 0,
        min: 0
    },
    category: {
        type: "String",
        required: true,
        trim: true
    }
}, ({ timestamps: true }));

const Product = mongoose.model('Product', productSchema);

export default Product;
