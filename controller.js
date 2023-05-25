exports.homeController = (req, res) => {
	const title = 'Dynamic Title';
	res.render('pages/home', { title });
};

exports.aboutController = (req, res) => {
	const title = 'About Title';
	res.render('pages/about', { title });
};

exports.helpController = (req, res) => {
	const title = 'Help Title';
	res.render('pages/help', { title });
};
