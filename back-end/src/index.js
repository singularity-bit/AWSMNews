const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Article = require("./models/article");
const multer = require("multer");
const { uuid } = require("uuidv4");
const path = require("path");
const imageDir = "src/images/";
const app = express();
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());
const port = 3001;

//db connection
const uri =
	"mongodb+srv://admin:priwet12@cluster0.jnzfb.mongodb.net/article-db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
	console.log("Connected successfully");
});

//image storage
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, imageDir);
	},
	filename: (req, file, callback) => {
		const fileName = file.originalname.toLowerCase().split(" ").join("-");
		callback(null, uuid() + "-" + fileName);
	},
});

//upload file to storage
var upload = multer({
	storage: storage,
	fileFilter: (req, file, callback) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			callback(null, true);
		} else {
			callback(null, false);
			return callback(
				new Error("only .png , .jpg and .jpeg format allowed!")
			);
		}
	},
});
app.get("/images/:imageName", (req, res) => {
	const url = req.protocol + "://" + req.get("host");
	//http://localhost:3001/images/abcc9a93-c0a6-4108-9b90-ed9b2aca0120-4veehr.jpg
	console.log("url", url + "/images/" + req.params.imageName);
	Article.findOne({ image: url + "/images/" + req.params.imageName })
		.then((result) => {
			console.log("image path", result);
			res.sendFile(
				path.join(__dirname, "/images/", result.image.split("/images/")[1])
			);
		})
		.catch((err) => res.send(err));
});

app.post("/post-article", upload.single("image"), (req, res) => {
	const { title, content, authors, tag, type, category } = req.body;
	const url = req.protocol + "://" + req.get("host");
	console.log("what received", req.body);
	const article = new Article({
		title: title,
		image: url + "/images/" + req.file.filename,
		content: content,
		authors: authors,
		tag: tag,
		type: type,
		category: category,
	});
	article
		.save()
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
});

app.get("/get-articles/:category", (req, res) => {
	let category = req.params.category;
	Article.find({
		category: { $regex: new RegExp(category, "i") },
	})
		.sort({ createdAt: "desc" })
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
});
app.get("/news/:category/:tag", (req, res) => {
	let tag = req.params.tag;
	let category = req.params.category;
	Article.find({
		tag: { $regex: new RegExp(tag, "i") },
		category: { $regex: new RegExp(category, "i") },
	})
		.then((result) => {
			console.log("tag news", result);
			res.send(result);
		})
		.catch((err) => res.send(err));
});
app.get("/article/:tag/:article", (req, res) => {
	let articleTitle = req.params.article;
	let tag = req.params.tag;
	Article.find({
		tag: { $regex: new RegExp(tag, "i") },
		title: articleTitle,
	})
		.then((result) => {
			res.send(result);
		})
		.catch((err) => res.send(err));
});
app.get("/breaking", (req, res) => {
	Article.where("type", "BREAKING")
		.sort({ createdAt: "desc" })
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
});

app.get("/recommended", (req, res) => {
	Article.where("type", "RECOMMENDED")
		.sort({ createdAt: "desc" })
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
});
app.get("/latest", (req, res) => {
	Article.find()
		.sort({ createdAt: "desc" })
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
});

app.get("/find-article/:title", (req, res) => {
	let { title } = req.params;
	Article.find({
		title: { $regex: new RegExp(title, "i") },
	})
		.then((result) =>
			result.length
				? res.send(result)
				: res.status(404).send("Article not found")
		)
		.catch((err) => res.send(err));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
