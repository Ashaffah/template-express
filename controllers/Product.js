import Product from "../models/productModel.js";

// getAllData
export const getAllProduct = async (req, res) => {
  // this is for native pagination default currentPage is 1, and perPage 5
  // const currentPage = req.query.page || 1;
  // const perPage = req.query.perPage || 5;

  let query = {};
  // pagination
  // query.offset = (parseInt(currentPage) - 1) * parseInt(perPage);
  // query.limit = parseInt(perPage);

  Product.findAndCountAll(query)
    .then((result) => {
      res.status(200).json({
        message: "Success get Data Gudang",
        data: result.rows,
        total_data: result.count,
        // per_page: parseInt(perPage),         // Pagination
        // current_page: parseInt(currentPage), // Pagination
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// getDataById
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// deleteData by id
export const deleteProduct = async (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Product Deleted",
      });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

// updateData by id
export const updateProduct = async (req, res) => {
  const payload = {
    name: req.body.name,
  };
  // console.log(")))))))))))))))))))))))))))", req.body);
  Product.update(payload, {
    where: {
      id: req.params.id,
    },
  })

    .then((result) => {
      res.status(200).json({
        message: "Product Updated",
      });
    })
    .catch((error) => {
      res.json({ code: 400, message: error.message });
    });
};

// createData
export const createProduct = async (req, res) => {
  const payload = {
    name: req.body.name,
  };

  Product.create(payload)
    .then((result) => {
      res.status(200).json({
        data: result.dataValues,
        message: "Product Created",
      });
    })
    .catch((error) => {
      res.json({ code: 400, message: error.message });
    });
};
