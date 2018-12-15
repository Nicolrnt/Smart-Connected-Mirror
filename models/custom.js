/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : custom.js
*/

/* Require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Custom Schema */
const customSchema = new Schema({
	"name": String,
	"weather_city": String,
	"news_country": String,
	"news_category": String,
	"news_nb": Number,
	"quote_theme": String
});

/* Weather */
const Custom = mongoose.model("custom", customSchema);

/* Exports */
module.exports = Custom;
