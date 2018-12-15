/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : weather.js
*/

/* Requires */
const router = require("express").Router();
const request = require("request")
const keys = require("../config/keys").news
const Custom = require("../models/custom");

/* News */
async function getCountry() {
	return ((await Custom.findOne({name: "custom"})).news_country);
}

async function getCategory() {
	return ((await Custom.findOne({name: "custom"})).news_category);
}

async function getNbArticle() {
	return ((await Custom.findOne({name: "custom"})).news_nb);
}

router.get("/", async function(req, res) {
	const endPoint = "https://newsapi.org/";
	const country = await getCountry();
	const category = await getCategory();
	const nb_articles = await getNbArticle();
	const url = endPoint + "v2/top-headlines?country=" + country + "&category=" + category + "&apiKey=" + keys.apiKey;

	request.get(url, function(err, response, body) {
		var json = JSON.parse(body);
		var news = [];
		var i = 0;
		
		try {
			while (i < nb_articles){
				news.push({
					category: category,
					title: json.articles[i].title,
					description: json.articles[i].description,
					img: json.articles[i].urlToImage
				});
				i += 1;
			}
			res.json(news);
		} catch (err) {
			console.log(err);
			res.json({});
		}
	})
});

/* Exports */
module.exports = router;
