/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : update.js
*/

/* Requires */
const router = require("express").Router();
const Custom = require("../models/custom");

/* Weather */
router.post("/weather", function(req, res) {
	Custom.findOne({name: "custom"}, function(err, custom) {
		custom.weather_city = req.body.weather_city;
		custom.save((err, custom) => {
			if (err) {
				console.log(err);
			} else {
				console.log(custom);
			}
		});
		res.redirect("/");
	});
});

/* News */
router.post("/news", function(req, res) {
	Custom.findOne({name: "custom"}, function(err, custom) {
		custom.news_country = req.body.news_country;
		custom.news_category = req.body.news_category;
		custom.news_nb = req.body.news_nb;
		custom.save((err, custom) => {
			if (err) {
				console.log(err);
			} else {
				console.log(custom);
			}
		});
		res.redirect("/");
	});
});

/* Quote */
router.post("/quote", function(req, res) {
	Custom.findOne({name: "custom"}, function(err, custom) {
		custom.quote_theme = req.body.quote_theme;
		custom.save((err, custom) => {
			if (err) {
				console.log(err);
			} else {
				console.log(custom);
			}
		});
		res.redirect("/");
	});
});

/* Exports */
module.exports = router;
