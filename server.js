const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const mongoose = re  quire('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});