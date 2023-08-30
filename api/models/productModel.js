import db from "../config/index.js";

// Get All Products
export const getProducts = (result) => {
  db.query(
    "SELECT prodID, prodName, prodDesc, price, creator, prodYear, prodUrl, featuredProd FROM Products",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Get Single Product
export const getProductById = (id, result) => {
  db.query(
    "SELECT prodID, prodName, prodDesc, price, creator, prodYear, prodUrl, featuredProd FROM Products WHERE prodID = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Insert Product to Database
export const insertProduct = (data, result) => {
  db.query("INSERT INTO Products SET ?;", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Product to Database
export const updateProductById = (data, id, result) => {
  db.query(
    "UPDATE Products SET  prodName = ?, prodDesc = ?, price = ?, creator = ?, prodYear = ?, prodUrl= ?, featuredProd = ?  WHERE prodID = ?",
    [
      data.prodName,
      data.prodDesc,
      data.price,
      data.creator,
      data.prodYear,
      data.prodUrl,
      data.featuredProd,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete Product to Database
export const deleteProductById = (id, result) => {
  db.query("DELETE FROM Products WHERE prodID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
