'use strict';
import express from "express";
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'testheroku')));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
