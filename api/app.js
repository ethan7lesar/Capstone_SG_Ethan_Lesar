import express from "express";
import path from "path"
import { config } from "dotenv";
config();
// import { errorHandling } from "./middleware/errorHandling.js"
// import cors
import cors from "cors";
 
import bodyParser from "body-parser";

// import routes
import Router from "../api/routes/route.js";

import cookieParser from "cookie-parser";

const app = express();

app.use((req, res, next) =>{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Request-Method", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Expose-Headers", "Authorization");
	next();
}) 
// use express json
app.use(express.json());
app.use(cookieParser());
// use cors
app.use(cors());



// app.use(express.static("./static"));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  
// use router
app.use(Router);
// app.use(errorHandling);

app.get('/', (req, res)=>{
    res.status(200);
    // res.sendFile(path.resolve("./static/html/index.html"));
});
app.listen(5000, () => console.log('Server running at http://localhost:5000'));