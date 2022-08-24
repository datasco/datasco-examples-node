/* (RU) ---------------------------------
 * Пример в котором мы получаем все доступную информацию
 * о нашем аккаунте, тут же мы можем посмотреть наш
 * лимит по запросам и на сколько мы его истратили.
---------------------------------------*/

const fetch = require('node-fetch')

void (async() => {
	const { API_KEY } = require('../credentials.json')

	// 1. Send request to '/api/info' route
	const resp = await fetch("http://api.datasco.ru/api/info", {
		method: 'POST',
		headers: { 'Authorization': API_KEY }
	})

	// 2. Got result! Get the JSON object
	const result = await resp.json()

	// 3. Print the result to console
	console.log(result)
})()