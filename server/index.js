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

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
	{
		id: 1,
		name: "jon doe",
		password: "jon1122",
		isSupervisor: true,
	},
	{


		id: 2,
		name: "Maruf Rien",
		password: "asdf",
		isSupervisor: false,
	}
]

app.post("/", (req, res) => {
	const { name, password } = req.body;

	const user = users.find(u => u.name === name && u.password === password);
	if (user) {
		//generate token
		const token = jwt.sign({ id: user.id, isSupervisor: user.isSupervisor }, process.env.JWT_SECRET);

		// send response
		res.json({ ...user, token })
	} else {
		res.status(400).json({ message: "Invalid username or password" })
	}


})
const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;

	// checking for token in Header
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		// verify token
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) { res.status(401).json({ message: "Invalid token" }) }

			req.user = decoded;
			next();
		})
	} else {
		res.status(401).json({ message: "Unauthorized" })
	}
}


app.delete("/api/user/:id", verifyToken, (req, res) => {
	console.log(req.user.id, req.params.id);
	if (req.user.id == req.params.id) {
		res.status(200).json({ message: "User deleted" })
	} else {
		res.status(403).json({ message: "Unauthorized" })
	}
})




app.listen(3000, () => {
	console.log("Server is running on port 3000");
});