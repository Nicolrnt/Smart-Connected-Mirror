/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : app.js
*/

/* Requires */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

/* Database */
const mongoose = require('mongoose');

/* Require routes */
const weather = require("./routes/weather");
const news = require("./routes/news");
const quote = require("./routes/quote");
const admin = require("./routes/admin");
const update = require("./routes/update");

/* Create app */
const app = express();
const port = 8080;

/* Setup Database */
mongoose.connect("mongodb://localhost:27017/Smart-Connected-Mirror", { useNewUrlParser: true });

/* Set up post request handler */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Set up view engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

/* Use routes */
app.use("/api/weather", weather);
app.use("/api/news", news);
app.use("/api/quote", quote);
app.use("/admin", admin);
app.use("/admin/update", update);

/* Home */
app.get("/", function(req, res) {
	res.render("home");
});

/* Listen */
app.listen(port, function() {
	console.log("$> app listen on port " + port);
});

/* Exports */
module.exports = app