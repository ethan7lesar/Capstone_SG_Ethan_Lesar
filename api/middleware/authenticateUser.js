import pkg from 'jsonwebtoken';
const {sign, verify} = pkg;
import { config } from "dotenv";
config();

export function createToken (user){
  return sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass,
    },
     process.env.secret_key,
    {
      expiresIn: "1h",
    }
  );
}

export function verifyAToken(res, req, next) {
  // grab the token 
  const token = req.headers["legitUser"];
  // 
  if(verify(token,  {secret: process.env.secret_key})){
    next()
  }else {
    res.json({
      msg: "not authorized",
      status: res.statusCode
    })
  } 
}