
import { products } from "./constant/products.js";
import product from './model/productSchema.js';

const DefaultData = async () => {
    try{
        await product.deleteMany({}); // remove old data
        await product.insertMany(products); // insert new data
        console.log("data inserted into db default.js")
    }catch(err){
        console.log("Error default.js " + err);
    }
}

export default DefaultData;