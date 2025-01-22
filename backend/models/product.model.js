import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, price: {
        type: Number,
        required: true,
    }, image: {
        type: String,
        required: true,
    }
},{ timestamps: true }); // created at & updated at

const Product = mongoose.model('Product', productSchema);
//singular and capitalised first letter for the name convention in mongoose

export default Product;

