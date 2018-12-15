/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : custom.js
*/

/* Require */

/* Weather */
const weather = {
	// Enter wherever city you live in
	city: "Marseille"
}

/* News */
const news = {
	// choose country code from :
	//    ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr
	//    hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz
	//    ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
	country: "fr",
	// choose category from :
	//    business entertainment general health
	//    science sports technology
	category: "technology",
	// choose a number between 1 and 3
	nb: 1
}

/* Quote */
const quote = {
	// choose theme from :
	//    funny management sports
	//    life inspire love
	theme: "inspire"
}

/* Exports */
module.exports = { weather, news, quote };
