const mongoose = require('mongoose');
const DATABASE = 'authors_DB';

mongoose.connect('mongodb://localhost/' + DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DATABASE} database`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));