// step 3

// let mongoose = require('mongoose');

// let uri = "mongodb+srv://tripathisumit2912: tripathisumit2912@cluster0.eogz7.mongodb.net/NewRestApi?retryWrites=true&w=majority&appName=Cluster0";

// let connectDB = () => {
//    console.log(" Connecting to database");
//    return mongoose.connect(uri
//    )
// }

// module.exports = connectDB;


// step 3

// let mongoose = require('mongoose');

// let uri = "mongodb+srv://tripathisumit2912:tripathisumit2912@cluster0.eogz7.mongodb.net/NewRestApi?retryWrites=true&w=majority&appName=Cluster0";

// let connectDB = async () => {
//    console.log("Connecting to database");
//    try {
//        await mongoose.connect(uri);
//        console.log("Database connected successfully");
//    } catch (error) {
//        console.error("Database connection failed", error);
//    }
// }

// module.exports = connectDB;



// step 4 secure password with dotenv

// let mongoose = require('mongoose');

// // let uri = "mongodb+srv://tripathisumit2912:tripathisumit2912@cluster0.eogz7.mongodb.net/NewRestApi?retryWrites=true&w=majority&appName=Cluster0";

// let connectDB = async (uri) => {
//    console.log("Connecting to database");
//    try {
//        await mongoose.connect(uri);
//        console.log("Database connected successfully");
//    } catch (error) {
//        console.error("Database connection failed", error);
//    }
// }

// module.exports = connectDB;



let mongoose = require('mongoose');

// let uri = "mongodb+srv://tripathisumit2912:tripathisumit2912@cluster0.eogz7.mongodb.net/NewRestApi?retryWrites=true&w=majority&appName=Cluster0";

let connectDB = async (uri) => {
//    console.log("Connecting to database");
   try {
       await mongoose.connect(uri);
       console.log("Database connected successfully");
   } catch (error) {
       console.error("Database connection failed", error);
   }
}

module.exports = connectDB;