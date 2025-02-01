// step 2


// let Product = require('../Models/product');

// let getAllProducts = async (req, res) => {
//     try {
//         let myData = await Product.find({});
//         res.status(200).json({ myData });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// let getAllProductTesting = async (req, res) => {
//     res.status(200).json({ msg: "get All Testing products" });
// };

// module.exports = { getAllProducts, getAllProductTesting };







// let Product = require('../Models/product');

// let getAllProducts = async (req, res) => {
//     try {
//         let myData = await Product.find({});
//         res.status(200).json({ myData });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// let getAllProductTesting = async (req, res) => {
//     try {
//         let myData1 = await Product.find({"name": "Product 3"});
//         res.status(200).json({ myData1 });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = { getAllProducts, getAllProductTesting };








// let Product = require('../Models/product');

// let getAllProducts = async (req, res) => {
//     try {
//         let myData = await Product.find({});
//         res.status(200).json({ myData });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// let getAllProductTesting = async (req, res) => {
//     try {
//         let myData1 = await Product.find(req.query);
//         res.status(200).json({ myData1 });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = { getAllProducts, getAllProductTesting };




// lec 12 search data or filter data 


// let Product = require('../Models/product');

// let getAllProducts = async (req, res) => {
//     try {
//         let myData = await Product.find({});
//         res.status(200).json({ myData });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// let getAllProductTesting = async (req, res) => {
//     try {
//         let { company, name } = req.query;
//         let queryObject = {};
//         if (company) {
//             //    queryObject.company = company;
//              queryObject.company = { $regex: company, $options: 'i' };
//         }
//         if (name) {
//             queryObject.name = { $regex: name, $options: 'i' };
//         }
//         console.log(queryObject);
//         let myData1 = await Product.find(queryObject);
//         res.status(200).json({ myData1 });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = { getAllProducts, getAllProductTesting };



// 13 add sort property in rest API


// lec 12 search data or filter data 


// let Product = require('../Models/product');

// let getAllProducts = async (req, res) => {
//     try {
//         let myData = await Product.find({});
//         res.status(200).json({ myData });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// let getAllProductTesting = async (req, res) => {
//     try {
//         let { company, name, sort } = req.query;
//         let queryObject = {};
//         if (company) {
//             //    queryObject.company = company;
//              queryObject.company = { $regex: company, $options: 'i' };
//         }
//         if (name) {
//             queryObject.name = { $regex: name, $options: 'i' };
//         }
//         let apiData = Product.find(queryObject);
//         if (sort) {
//             let sortFix = sort.replace(",", " ");
//             apiData = apiData.sort(sortFix);
//         }
//         console.log(queryObject);
//         let myData1 = await apiData;
//         res.status(200).json({ myData1 });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };



// module.exports = { getAllProducts, getAllProductTesting };







// lec 13  select in mongoose


let Product = require('../Models/product');

let getAllProducts = async (req, res) => {
    try {
        let myData = await Product.find({});
        res.status(200).json({ myData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

let getAllProductTesting = async (req, res) => {
    try {
        let { company, name, sort, select } = req.query;
        let queryObject = {};
        if (company) {
            //    queryObject.company = company;
             queryObject.company = { $regex: company, $options: 'i' };
        }
        if (name) {
            queryObject.name = { $regex: name, $options: 'i' };
        }
        let apiData = Product.find(queryObject);
        if (sort) {
            // let sortFix = sort.replace(",", " ");
            let sortFix = sort.split(",").join(" ");
            apiData = apiData.sort(sortFix);
        }
        if (select) {
            // let selectFix = select.replace(",", " ");
            let selectFix = select.split(",").join(" ");
            apiData = apiData.select(selectFix);
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;

        let skip = (page - 1) * limit;

        apiData = apiData.skip(skip).limit(limit);


        // console.log(queryObject);
        let myData1 = await apiData;
        res.status(200).json({ myData1, nbHits: myData1.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = { getAllProducts, getAllProductTesting };


