const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')
const DATABASE = 'authors_DB'

// <!-- connect mongo db with the server using mongoose -->
require('./config/mongoose.config');

// <!-- middleware  -->
app.use(express.json(), cors(), express.urlencoded({ extended: true }));

// <!-- THESE ARE YOURE ROUTES USUALLY COME AFTER BUILDING YOUR ROUTES -->
const AllMyAuthorRoutes = require("./routes/author.routes");
AllMyAuthorRoutes(app);


// <!-- VERY BOTTOM starts the server at the END -->
app.listen(8000, () => console.log(`The server is all fired up on port ${PORT}`));
// <!-- run nodemon server.js to test your server -->