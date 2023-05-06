const express = require('express');

const app = express();
const port = 4000;

app.listen(port, () => {
	console.log(`Express-learning app server is running on port:${port}`);
});
