import express from "express";
  
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/Products.js";
import { showUsers, showUserById, createUser, updateUser, deleteUser } from "../controllers/User.js";
import { userLogin } from "../models/usersModel.js";
const router = express.Router();
  
// Get All Product
router.get('/products', showProducts);
  
// Get Single Product
router.get('/products/:id', showProductById);
  
// Create New Product
router.post('/products', createProduct);
  
// Update Product
router.put('/products/:id', updateProduct);
  
// Delete Product
router.delete('/products/:id', deleteProduct);

// Get All Users
router.get('/users', showUsers);
  
// Get Single User
router.get('/users/:id', showUserById);
  
// Create New User
router.post('/register', createUser);
  
// Update User
router.put('/users/:id', updateUser);
  
// Delete User
router.delete('/users/:id', deleteUser);

router.post('/login', userLogin);

export default router;