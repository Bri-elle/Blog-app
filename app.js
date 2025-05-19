import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// Blogg Posts
var posts = [
	{
		postId: 1,
		postTitle: "Blogging 101: How to Start Your First Blog Today",
		postDescription:
			"Lorem ipsum odor amet, consectetuer adipiscing accumsan taciti rhoncus elit. Curabitur nullam egestas nibh.",
		postBody:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur nullam egestas nibh senectus himenaeos mollis arcu. Nisi accumsan taciti rhoncus elementum per nisl sed. Egestas sollicitudin per pretium sagittis dapibus ultrices arcu taciti interdum. Ac lobortis montes ultricies interdum maecenas etiam sem. Facilisi cras lacinia mi erat torquent non. Consectetur mi urna nibh dolor elit. Etiam mus platea phasellus accumsan amet. Sociosqu tellus euismod condimentum porttitor justo volutpat. Efficitur libero duis, amet semper proin pharetra arcu nisi nec. Tristique lectus fusce habitant platea vulputate eu. Faucibus viverra netus aptent felis augue. Fringilla commodo nulla libero aptent finibus turpis nisl bibendum. Placerat inceptos convallis dui felis tortor felis potenti. Lobortis finibus convallis scelerisque viverra vulputate ipsum hac. Porttitor imperdiet porta nunc rhoncus risus sed a urna. Primis suscipit ligula ligula orci cursus, felis habitasse. Odio porta vel tincidunt curae fames. Gravida per et accumsan, pharetra elementum adipiscing varius etiam. Hendrerit mollis dapibus amet luctus ipsum ante. Quam sociosqu himenaeos pharetra eleifend duis penatibus tellus. Aenean taciti lectus congue mus facilisi hendrerit! Etiam leo dignissim maximus felis eget porttitor cras. Euismod massa nisl blandit; fusce maximus dis.",
	},
	{
		postId: 2,
		postTitle: "Writing That Engages: How to Keep Readers Hooked",
		postDescription:
			"Lorem ipsum odor amet, consectetuer adipiscing accumsan taciti rhoncus elit. Curabitur nullam egestas nibh seh.",

		postBody:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur nullam egestas nibh senectus himenaeos mollis arcu. Nisi accumsan taciti rhoncus elementum per nisl sed. Egestas sollicitudin per pretium sagittis dapibus ultrices arcu taciti interdum. Ac lobortis montes ultricies interdum maecenas etiam sem. Facilisi cras lacinia mi erat torquent non. Consectetur mi urna nibh dolor elit. Etiam mus platea phasellus accumsan amet. Sociosqu tellus euismod condimentum porttitor justo volutpat. Efficitur libero duis, amet semper proin pharetra arcu nisi nec. Tristique lectus fusce habitant platea vulputate eu. Faucibus viverra netus aptent felis augue. Fringilla commodo nulla libero aptent finibus turpis nisl bibendum. Placerat inceptos convallis dui felis tortor felis potenti. Lobortis finibus convallis scelerisque viverra vulputate ipsum hac. Porttitor imperdiet porta nunc rhoncus risus sed a urna. Primis suscipit ligula ligula orci cursus, felis habitasse. Odio porta vel tincidunt curae fames. Gravida per et accumsan, pharetra elementum adipiscing varius etiam. Hendrerit mollis dapibus amet luctus ipsum ante. Quam sociosqu himenaeos pharetra eleifend duis penatibus tellus. Aenean taciti lectus congue mus facilisi hendrerit! Etiam leo dignissim maximus felis eget porttitor cras. Euismod massa nisl blandit; fusce maximus dis.",
	},
	{
		postId: 3,
		postTitle: "SEO for Bloggers: How to Get Your Posts Seen",
		postDescription:
			"Lorem ipsum odor amet, consectetuer adipiscing accumsan taciti rhoncus elit. Curabitur nullam egestas nibh.",
		postBody:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur nullam egestas nibh senectus himenaeos mollis arcu. Nisi accumsan taciti rhoncus elementum per nisl sed. Egestas sollicitudin per pretium sagittis dapibus ultrices arcu taciti interdum. Ac lobortis montes ultricies interdum maecenas etiam sem. Facilisi cras lacinia mi erat torquent non. Consectetur mi urna nibh dolor elit. Etiam mus platea phasellus accumsan amet. Sociosqu tellus euismod condimentum porttitor justo volutpat. Efficitur libero duis, amet semper proin pharetra arcu nisi nec. Tristique lectus fusce habitant platea vulputate eu. Faucibus viverra netus aptent felis augue. Fringilla commodo nulla libero aptent finibus turpis nisl bibendum. Placerat inceptos convallis dui felis tortor felis potenti. Lobortis finibus convallis scelerisque viverra vulputate ipsum hac. Porttitor imperdiet porta nunc rhoncus risus sed a urna. Primis suscipit ligula ligula orci cursus, felis habitasse. Odio porta vel tincidunt curae fames. Gravida per et accumsan, pharetra elementum adipiscing varius etiam. Hendrerit mollis dapibus amet luctus ipsum ante. Quam sociosqu himenaeos pharetra eleifend duis penatibus tellus. Aenean taciti lectus congue mus facilisi hendrerit! Etiam leo dignissim maximus felis eget porttitor cras. Euismod massa nisl blandit; fusce maximus dis.",
	},
	{
		postId: 4,
		postTitle: "Monetizing Your Blog: Turning Passion Into Profit",
		postDescription:
			"Lorem ipsum odor amet, consectetuer adipiscing accumsan taciti rhoncus elit. Curabitur nullam egestas nibh seh.",

		postBody:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur nullam egestas nibh senectus himenaeos mollis arcu. Nisi accumsan taciti rhoncus elementum per nisl sed. Egestas sollicitudin per pretium sagittis dapibus ultrices arcu taciti interdum. Ac lobortis montes ultricies interdum maecenas etiam sem. Facilisi cras lacinia mi erat torquent non. Consectetur mi urna nibh dolor elit. Etiam mus platea phasellus accumsan amet. Sociosqu tellus euismod condimentum porttitor justo volutpat. Efficitur libero duis, amet semper proin pharetra arcu nisi nec. Tristique lectus fusce habitant platea vulputate eu. Faucibus viverra netus aptent felis augue. Fringilla commodo nulla libero aptent finibus turpis nisl bibendum. Placerat inceptos convallis dui felis tortor felis potenti. Lobortis finibus convallis scelerisque viverra vulputate ipsum hac. Porttitor imperdiet porta nunc rhoncus risus sed a urna. Primis suscipit ligula ligula orci cursus, felis habitasse. Odio porta vel tincidunt curae fames. Gravida per et accumsan, pharetra elementum adipiscing varius etiam. Hendrerit mollis dapibus amet luctus ipsum ante. Quam sociosqu himenaeos pharetra eleifend duis penatibus tellus. Aenean taciti lectus congue mus facilisi hendrerit! Etiam leo dignissim maximus felis eget porttitor cras. Euismod massa nisl blandit; fusce maximus dis.",
	},
];

// console.log(posts);
// Set EJS as the view engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/blog", (req, res) => {
	res.render("blog", { posts: posts });
});

//answer create page request
app.get("/create", (req, res) => {
	res.render("create");
});

app.get("/update", (req, res) => {
	let id = req.query.id;
	id = parseFloat(id);
	console.log(id);

	let post = posts.find((post) => post.postId == id);
	console.log("All posts:", posts);

	console.log(`Post: ${JSON.stringify(post)}`);
	res.render("update", {
		id: id,
		title: posts[id - 1].postTitle,
		description: posts[id - 1].postDescription,
		content: posts[id - 1].postBody,
	});
});

// create and display post
app.post("/submit", (req, res) => {
	let title = req.body.postTitle;
	let description = req.body.postDescription;
	let content = req.body.postContent;
	let id = posts.length + 1;
	posts.push({
		postId: id,
		postTitle: title,
		postDescription: description,
		postBody: content,
	});
	// console.log(title, description, content);
	res.render("post", {
		id:id,
		title: title,
		description: description,
		content: content,
	});
	//route them to the view page
});
app.post("/submit2", (req, res) => {
	let title = req.body.postTitle;
	let description = req.body.postDescription;
	let content = req.body.postContent;
	let id = req.body.id;

	// find the original post
	let post = posts.find((post) => post.postId == id);

	//include the update

	(post.postId = id),
		(post.postTitle = title),
		(post.postDescription = description),
		(post.postBody = content),
		// console.log(title, description, content);
		res.render("blog", { posts: posts });
	//route them to the view page
});

//display blog post
app.post("/post", (req, res) => {
	let id = req.body.id;
	id = +id;
	id += 1;
	console.log(id);
	res.render("post", {
		id: id,
		title: posts[id - 1].postTitle,
		description: posts[id - 1].postDescription,
		content: posts[id - 1].postBody,
	});
});

// delete post
app.post("/delete", (req, res) => {
	let id = req.body.id;
	id = +id;
	// console.log(id);
	posts = posts.filter((post) => post.postId !== id);

	// console.log(posts);
	res.redirect("blog");
});
// Listening
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
