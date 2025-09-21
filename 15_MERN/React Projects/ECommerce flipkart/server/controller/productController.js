import product from "../model/productSchema.js";



export const getProducts = async (req, res) =>{


    try{

        const result = await product.find({});
        return res.status(200).json(result);

    }catch(err){
        console.log("Error productsContrller.js " + err );
    }

}

export const getProductById = async (req, res) =>{
    try{

        const result = await product.find({"id" : req.params.id});
        return res.status(200).json(result);

    }catch(err){
        console.log("Error productsContrller.js " + err );
    }

}