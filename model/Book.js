const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Book = model("Book", BookSchema);

module.exports = Book;
