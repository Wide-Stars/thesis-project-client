import express, { response } from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"

const app = express();


// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Successfully connected to MongoDB");
});

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRoutes)

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});