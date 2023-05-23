const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const port = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use(globalMiddleware);

app.get('/', (req, res) => {
	fs.readFile('./pages/index.html', (err, data) => {
		if (err) {
			console.log('Error: ', err);
			res.send('<h1>Something went wrong</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
});

app.get('/about', localMiddleware, (req, res) => {
	fs.readFile('./pages/about.html', (err, data) => {
		if (err) {
			console.log('Error: ', err);
			res.send('<h1>Something went wrong</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
});

app.get('/help', (req, res) => {
	fs.readFile('./pages/help.html', (err, data) => {
		if (err) {
			console.log('Error: ', err);
			res.send('<h1>something went wrong</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
});

function globalMiddleware(req, res, next) {
	console.log(`${req.method} - ${req.url}`);
	console.log('I am global middleware');

	if (req.query.bad) {
		return res.status(400).send('Bad Request');
	}

	next();
}

function localMiddleware(req, res, next) {
	console.log('I am local middleware');

	next();
}

app.listen(port, () => {
	console.log(`Express-learning app server is running on port:${port}`);
});
