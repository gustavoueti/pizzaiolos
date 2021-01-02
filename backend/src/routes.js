const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
	return response.json({
		Site: "Pizzaria",
		Slogan: "Melhores Pizzas"
	})
})

module.exports = routes;