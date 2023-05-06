const express = require('express');

const port = 4000;

const app = express();

app.get('/', (req, res) => {
	res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Express.js</title>

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            display: flex;
            justify-content: center;
            padding: 50px;
            margin: 50px;
            background-color: #ddd;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <div>
            <h1>I am Home Route</h1>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis a blanditiis impedit voluptates. Omnis maxime, vero itaque, fuga rem ducimus consectetur quas eveniet doloremque perspiciatis eaque earum voluptas. Excepturi, illum!
            </div>
        </div>
    </header>
</body>
</html>
    `);
});

app.get('/about', (req, res) => {
	res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Express.js</title>

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            display: flex;
            justify-content: center;
            padding: 50px;
            margin: 50px;
            background-color: #ddd;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <div>
            <h1>I am about Route</h1>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis a blanditiis impedit voluptates. Omnis maxime, vero itaque, fuga rem ducimus consectetur quas eveniet doloremque perspiciatis eaque earum voluptas. Excepturi, illum!
            </div>
        </div>
    </header>
</body>
</html>
    `);
});

app.get('/help', (req, res) => {
	res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Express.js</title>

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            display: flex;
            justify-content: center;
            padding: 50px;
            margin: 50px;
            background-color: #ddd;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <div>
            <h1>I am help Route</h1>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis a blanditiis impedit voluptates. Omnis maxime, vero itaque, fuga rem ducimus consectetur quas eveniet doloremque perspiciatis eaque earum voluptas. Excepturi, illum!
            </div>
        </div>
    </header>
</body>
</html>
    `);
});

app.listen(port, () => {
	console.log(`Express-learning app server is running on port:${port}`);
});
