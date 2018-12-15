/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : weather.js
*/

/* Requires */
const router = require("express").Router();
const request = require("request")
const keys = require("../config/keys").weather
const custom = require("../config/custom").weather
const translate = require("../utils/translator").weather

/* Weather */
router.get("/", function(req, res) {
	const endPoint = "https://api.openweathermap.org/"
	const url = endPoint + "data/2.5/weather?q=" + custom.city + "&appid=" + keys.appId;
	var weather = {
		city: custom.city,
		info: "",
		description: "",
		temp: 0
	}

	request.get(url, function(err, response, body) {
		var json = JSON.parse(body);

		try {
			weather.info = json.weather[0].main;
			weather.description = json.weather[0].description;
			weather.temp = json.main.temp - 273.15
			// translate to FR
			weather = translate(weather)
			res.json(weather);
		} catch (err) {
			res.json(weather);
		}
	});
});

/* Exports */
module.exports = router;
