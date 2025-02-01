require("dotenv").config();
let express = require('express');
const app = express();
let my_routes = require('./Router/myroutes');
let PORT = process.env.PORT || 3001;
let connectDB = require('./db/connect');

app.use("/api/products", my_routes);

let start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();