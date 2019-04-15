const router = require("express").Router();
const Book = require('../../models/Book');

// Matches with "/api/books"
/* router.route("/")
    .get(booksController.findAll)
    //.post(booksController.create); */


//@routes        Get api/search/test
// @description  Test search routes
//@access        Public
router.get('/test', (req, res) => res.json({ msg: " Search Works" }));

router.get('/search', (req, res) => {

    Book.findAll({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
    }).then(search => {
        //res.status(400).json;
        res.json(search);
    })
})


//api ajax caller

module.exports = router;