/* (RU) ---------------------------------
 * Пример в котором мы достаем HTML страницы,
 * с помощью HTTP запроса
---------------------------------------*/

const fetch = require('node-fetch')

void (async() => {
	const { API_KEY } = require('../../credentials.json')

	// 1. Send request to '/api/info' route
	const resp = await fetch("http://api.datasco.ru/api/gather", {
		method: 'post',
		headers: {
			'Authorization': API_KEY,
			'Accept': 'application/json',
		  	'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			// Ссылка
			"url": "https://www.wildberries.ru/catalog/aksessuary/golovnye-ubory",
			// "bot" - сбор запросом
			"strategy": "bot"
		}),
	})

	// 2. Got result! Get the JSON object
	const result = await resp.json()

	// 3. Print the result to console
	console.log(result)
})()