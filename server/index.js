import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

const app = express();

app.use(bodyParser.json({
	limit: '50mb', extended: true
}));
app.use(bodyParser.json({
	limit: '50mb', extended: true
}));

app.get("/", (req, res) => { res.send("Hello World!") })

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});