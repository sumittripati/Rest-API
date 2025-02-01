// step 2

let express = require('express');
let routes = express.Router();

let {getAllProducts, getAllProductTesting} = require('../Controller/mycontroller');

routes.route("/").get(getAllProducts);
routes.route("/testing").get(getAllProductTesting)

module.exports = routes;