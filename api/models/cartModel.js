import db from "../config/index.js";

export const getCart = (id, result) => {
  db.query(
    `SELECT cartID, prodName,prodDesc ,price ,prodUrl
     FROM Users
     INNER JOIN Cart ON Users.userID = Cart.userCode
    INNER JOIN Products ON Cart.productID = Products.prodID
    WHERE Cart.userCode = ? `,
    [id],
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

export const insertCart = (data, result) => {
  db.query("INSERT INTO Cart SET ?;", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const updateCartbyId = (data, id, result) => {
  db.query(
    `UPDATE Cart SET ? WHERE cartID = ? `,
    [data, id],
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

export const removeCart = (id, result) => {
  db.query(`DELETE FROM Cart WHERE cartID = ?`, id, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const removeAllcartItems = (id, result) => {
    db.query(`DELETE FROM Cart WHERE userID = ?`, id, (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
