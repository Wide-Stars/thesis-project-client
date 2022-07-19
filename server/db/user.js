import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	isSupervisor: {
		type: Boolean,
		required: true,

	}
})

export const userModel = mongoose.model("User", userSchema)