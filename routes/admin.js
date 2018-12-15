/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : admin.js
*/

/* Requires */
const router = require("express").Router();
const Custom = require("../models/custom");

/* Admin */
router.get("/", function(req, res) {
	var reply = {
		name: "",
		weather: {},
		news: {},
		quote: {}
	}

	Custom.findOne({name: "custom"}, function(err, custom) {
		if (err) {
			console.log("$> Error while getting.");
		}
		reply.name = custom.name;
		reply.weather = {
			city: custom.weather_city
		};
		reply.news = {
			country: custom.news_country,
			category: custom.news_category,
			nb: custom.news_nb
		};
		reply.quote = {
			theme: custom.quote_theme
		}
		res.render("admin", reply=reply);
	});
});


/* Exports */
module.exports = router;
