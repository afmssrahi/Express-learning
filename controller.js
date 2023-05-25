exports.homeController = (req, res) => {
	const title = 'Dynamic Title';
	res.render('pages/home', { title });
};

exports.aboutController = (req, res) => {
	res.render('pages/about');
};

exports.helpController = (req, res) => {
	res.render('pages/help');
};
