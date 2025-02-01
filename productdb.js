// step 1

// require("dotenv").config();
// let connectDB = require("./db/connect");
// let Product = require("./Models/product");
// let ProductJson = require("./products.json");

// let start = async () => {
//     try {
//         await connectDB(process.env.MONGODB_URL);
//         await Product.create(ProductJson);
//         console.log("Data Imported Successfully");
//     } catch (error) {
//         console.log(error + " in the productDB problems");
//     }
// }

// start();



// step 2

require("dotenv").config();
let connectDB = require("./db/connect");
let Product = require("./Models/product");
let ProductJson = require("./products.json");

let start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Data Imported Successfully");
    } catch (error) {
        console.log(error + " in the productDB problems");
    }
}

start();
