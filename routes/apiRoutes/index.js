const router = require("express").Router();
const bookController = require("../../controller/bookController");

router.route("/books").post(bookController.addBook);
router.route("/books/:id").delete(bookController.deleteBook);

module.exports = router;
