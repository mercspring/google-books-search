export default {
    searchBooks: function (searchTerm) {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDIs5sOCJ7O5R3GMV6_TIipSw1CHC2fom8`)
    }

}