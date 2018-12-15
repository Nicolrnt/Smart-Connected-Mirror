/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : weather.js
*/

/* Requires */
const router = require("express").Router();
const request = require("request")
const custom = require("../config/custom").quote

/* Quote */
router.get("/", function(req, res) {
	const endPoint = "http://quotes.rest/";
	const url = endPoint + "qod.json?category=" + custom.theme;
	var quote = {
		text: "I look so fabulous today !",
		author: "Myself"
	};

	request.get(url, function(err, response, body) {
		try {
			console.log(body);
			var json = JSON.parse(body);
			
			quote.text = json.contents.quotes[0].quote;
			quote.author = json.contents.quotes[0].author;
			res.json(quote);
		} catch (err) {
			res.json(quote);
		}
	});
});

/* Exports */
module.exports = router;
