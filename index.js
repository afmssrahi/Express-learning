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

app.get('/about', (req, res) => {
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

app.listen(port, () => {
	console.log(`Express-learning app server is running on port:${port}`);
});
