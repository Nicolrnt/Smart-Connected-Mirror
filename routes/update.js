/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : update.js
*/

/* Requires */
const router = require("express").Router();
const Custom = require("../models/custom");

/* Weather */
router.get("/", function(req, res) {
	Custom.findOne({name: "custom"}, function(err, custom) {
		res.json(custom);
	});
});


/* Exports */
module.exports = router;

/*
var custom = new Custom({
	name: "test5",
	weather_city: "Marseille",
	news_country: "fr",
	news_category: "technology",
	news_nb: 1,
	quote_theme: "inspire"
});
custom.save(function(err, custom) {
	if (err) {
		console.log("$> Error while saving.");
	} else {
		console.log("$> custom Well saved !")
	}
});
res.send("Ok");
*/