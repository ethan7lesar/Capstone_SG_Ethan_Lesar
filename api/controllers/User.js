import {
  getUsers,
  getUserById,
  insertUser,
  updateUserById,
  deleteUserById,
} from "../models/usersModel.js";
import bcrypt from "bcrypt";
import { createToken } from "../middleware/authenticateUser.js";

// Get All Products
export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Product
export const showUserById = (req, res) => {
  getUserById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New User
export const createUser = (req, res) => {
  const data = req.body;
  data.userPass = bcrypt.hashSync(data.userPass, 10);
  const user = {
    emailAdd: data.emailAdd,
    userPass: data.userPass,
  };
  let token = createToken(user);
  insertUser(data, (err, results) => {
    if (err) throw err;
    // res.cookie("legitUser", token, { maxAge: 360000, httpOnly: true });
    res.json({ results, token });
  });
};

// Update Product
export const updateUser = (req, res) => {
  const data = req.body;
  data.userPass = bcrypt.hashSync(data.userPass, 10);
  const id = req.params.id;
  updateUserById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Product
export const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
