// <!-- controller is what will do all of our CRUD -->
// <!-- import our model here! -->

// <!-- these are most of our CRUD functions -->
const Author = require('../models/authors.model');

// <!-- READ ALL -->
module.exports.findAllAuthors = (req, res) => {
    Author.find()

        // <!-- ******what we return here is what we'll see in React******* -->

        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        // <!--          alternative way         -->
        // <!--     User.findById(req.params.id) -->
        .then(oneSingleAuthor => res.json(oneSingleAuthor))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            console.log('SERVER SUCCESS')
            return res.json({ author: newlyCreatedAuthor })
        })
        .catch(err => {
            console.log('SERVER FAIL');
            return res.status(400).json(err)
        });
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}