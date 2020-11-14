const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
  },
  authors: {
    type: Array,
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

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;