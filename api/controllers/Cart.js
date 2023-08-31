import { getCart, insertCart, removeAllcartItems, removeCart, updateCartbyId } from "../models/cartModel.js";

export const showCart = (req, res) => {
  getCart(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createCart = (req, res) => {
  const data = [req.body];
  insertCart(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateCart = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCartbyId(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const deleteCart = (req, res) => {
    const id = req.params.id;
    removeCart(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const deleteAllCartItems = (req, res) => {
    const id = req.params.id;
    removeAllcartItems(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
