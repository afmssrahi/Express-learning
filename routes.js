const router = require('express').Router();

const {
	homeController,
	aboutController,
	helpController,
} = require('./controller');

router.get('/', homeController);

router.get('/about', localMiddleware, aboutController);

router.get('/help', helpController);

function localMiddleware(req, res, next) {
	console.log('I am local middleware');

	next();
}

module.exports = router;
