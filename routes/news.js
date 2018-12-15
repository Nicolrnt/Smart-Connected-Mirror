/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : weather.js
*/

/* Requires */
const router = require("express").Router();
const request = require("request")
const keys = require("../config/keys").news
const custom = require("../config/custom").news

/* News */
router.get("/", function(req, res) {
	const endPoint = "https://newsapi.org/";
	const url = endPoint + "v2/top-headlines?country=" + custom.country + "&category=" + custom.category + "&apiKey=" + keys.apiKey;

	request.get(url, function(err, response, body) {
		var json = JSON.parse(body);
		var news = [];
		var i = 0;
		
		try {
			while (i < custom.nb_articles){
				console.log(json.articles[i]);
				news.push({
					category: custom.category,
					title: json.articles[i].title,
					description: json.articles[i].description,
					img: json.articles[i].urlToImage
				});
				i += 1;
			}
			res.json(news);
		} catch (err) {
			res.json({});
		}
	})
});

/* Exports */
module.exports = router;
