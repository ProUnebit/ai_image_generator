// import { mult, sum } from './modules/calc.js';

// console.log(sum(3, 4));
// console.log(mult(3, 4));

//////////////////////////////////////

const path = require('path');
const express = require('express');
// const fs = require('fs');
const dotenv = require('dotenv').config();
// const router = express.Router();

const port = process.env.PORT || 5000;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, './')));

app.use('/openai', require('./routes/openaiRoutes'));

// router.get("/", (req, res) => {
//     res.render("index");
// });
// app.use("/", router);
     

// fs.readFile('./index.html');

// app.get("/", (req, res) => {
//     // res.send("Express on Vercel");
//     // res.sendFile('./index.html');
//     // res.sendFile(path.resolve(__dirname, './index.html')); 
//     res.sendFile(path.join(__dirname + 'index.html'));
// })

app.listen(port, () => console.log(`Server started on port ${port}`));