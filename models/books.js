const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Books = new Schema({
  title: {
    type: String,
  },
  authors: {
    type: Array,
  },
  description: {
    type: string,
  },

  image: {
    type: String,
  },
  link: {
    type: String,
  },

});

const Books = mongoose.model("Books", Books);

module.exports = Books;