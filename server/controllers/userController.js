import jwt from "jsonwebtoken"
import { userModel } from "../db/user.js";

//helper function
export const verifyToken = (req, res, next) => {
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


export const createUser = async (req, res) => {
	// get user from req.body
	const { name, password, isSupervisor, email } = req.body;

	const newUser = new userModel({ name: name, password: password, isSupervisor: isSupervisor, email: email });

	await newUser.save()
	res.json({ message: "User created successfully", user: req.body })

}
export const modifyUser = (req, res) => res.send("User modified")

export const removeUser = (req, res) => {
	if (+req.user.id == +req.params.id) {
		res.status(200).json({ message: "User deleted" })
	} else {
		res.status(403).json({ message: "Unauthorized" })
	}
}

export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	console.log(email, password);

	const user = await userModel.findOne({ email: email, password: password })

	if (user) {
		const _id = user._id.toString()
		const isSupervisor = user.isSupervisor
		//generate token
		const token = jwt.sign({ _id: _id, isSupervisor: isSupervisor }, process.env.JWT_SECRET);

		// send response
		res.json({ user, token })
	} else {
		res.status(400).json({ message: "Invalid username or password" })
	}


}
