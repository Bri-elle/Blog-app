import express from "express";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/blog", (req, res) => {
	res.render("blog"); // This will look for "views/blog.ejs"
});

// Listening
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
