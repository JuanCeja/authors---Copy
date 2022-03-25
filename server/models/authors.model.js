const mongoose = require('mongoose');


// <!-- the schema is next. schema is the rules that the entries in the db must follow  -->
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minlength: [3, "Author name must be atleast 3 characters long"]
    }
}, { timestamps: true });

// <!-- the model. this is what we use to make actual queries to the DB -->
const Author = mongoose.model('Author', AuthorSchema);

// <!-- export the model -->
module.exports = Author;