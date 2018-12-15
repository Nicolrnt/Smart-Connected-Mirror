/*
** Made by : Nicolas Laurent <nicolas-laurent@outlook.fr>
** Project : Connected Mirror
** File : translator.js
*/

/* Requires */

/* Weather */
const weather = function (data) {
	infos = {
		"Thunderstorm": "Orage",
		"Drizzle": "Pluie Fine",
		"Rain": "Pluie",
		"Snow": "Neige",
		"Atmosphere": "Atmosphère",
		"Clear": "Clair",
		"Clouds": "Nuages"
	};
	descriptions = {
		"Thunderstorm": {
			"thunderstorm with light rain": "Orage avec légère pluie",
			"thunderstorm with rain": "Orage avec pluie",
			"thunderstorm with heavy rain": "Orage avec forte pluie",
			"light thunderstorm": "Orage léger",
			"thunderstorm": "Orage",
			"heavy thunderstorm": "Orage fort",
			"ragged thunderstorm": "Orage violent",
			"thunderstorm with light drizzle": "Orage avec légère pluie fine",
			"thunderstorm with drizzle": "Orage avec pluie fine",
			"thunderstorm with heavy drizzle": "Orage avec forte pluie fine"
		},
		"Drizzle": {
			"light intensity drizzle": "Légère pluie fine",
			"drizzle": "Pluie fine",
			"heavy intensity drizzle": "Forte pluie fine",
			"light intensity drizzle rain": "Légère pluie fine",
			"drizzle rain": "Pluie fine",
			"heavy intensity drizzle rain": "Forte pluie fine",
			"shower rain and drizzle": "Pluie",
			"heavy shower rain and drizzle": "Forte pluie",
			"shower drizzle": "Forte pluie"
		},
		"Rain": {
			"light rain": "Pluie légère",
			"moderate rain": "Pluie modérée",
			"heavy intensity rain": "Forte pluie",
			"very heavy rain": "Très forte pluie",
			"extreme rain": "Pluie extrème",
			"freezing rain": "Pluie gelée",
			"light intensity shower rain": "Pluie légère",
			"shower rain": "Pluie",
			"heavy intensity shower rain": "Forte pluie",
			"ragged shower rain": "Pluie extrème"
		},
		"Snow": {
			"light snow": "Neige légère",
			"snow": "Neige",
			"heavy snow": "Forte neige",
			"sleet": "Neige fondue",
			"shower sleet": "Forte neige fondue",
			"light rain and snow": "Pluie légère et neige",
			"rain and snow": "Pluie et neige",
			"light shower snow": "Neige légère",
			"shower snow": "Forte neige",
			"heavy shower snow": "Très forte neige"
		},
		"Atmosphere": {
			"mist": "Brouillard",
			"smoke": "Fumée",
			"haze": "Brume",
			"sand, dust whirls": "Tourbillon de poussière",
			"fog": "Brouillard",
			"sand": "Sable",
			"dust": "Poussière",
			"volcanic ash": "Cendre volcanique",
			"squalls": "Poussière",
			"tornado": "Tornade"
		},
		"Clear": {
			"clear sky": "Ciel clair"
		},
		"Clouds": {
			"few clouds": "Quelques nuages",
			"scattered clouds": "Nuages éparpillés",
			"broken clouds": "Nuages cassés",
			"overcast clouds": "Ciel couvert"
		}
	};
	trans = {
		info: infos[data.info],
		description: descriptions[data.info][data.description],
		temp: data.temp
	};

	return (trans);
}

/* Exports */
module.exports = { weather };


