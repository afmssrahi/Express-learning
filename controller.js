const fs = require('fs');

exports.homeController = (req, res) => {
	const err = new Error('Bad Request');
	err.status = 400;
	throw err;

	fs.readFile('./pages/index.html', (err, data) => {
		if (err) {
			console.log('Error: ', err);
			res.send('<h1>Something went wrong</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
};

exports.aboutController = (req, res) => {
	fs.readFile('./pages/about.html', (err, data) => {
		if (err) {
			console.log('Error: ', err);
			res.send('<h1>Something went wrong</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
};

exports.helpController = (req, res) => {
	fs.readFile('./pages/help.html', (err, data) => {
		if (err) {
			console.log('Error: ', err);
			res.send('<h1>something went wrong</h1>');
		} else {
			res.write(data);
			res.end();
		}
	});
};
