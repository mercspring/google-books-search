import axios from "axios";
export default {
    searchBooks: function (searchTerm) {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDIs5sOCJ7O5R3GMV6_TIipSw1CHC2fom8`)
    },
    saveBook: function(data){
        return axios.post("/api/books", data);
    },
    deleteBook: function(id){
        console.log(id)
        return axios.delete("/api/books/"+id)

    },
    getBooks: function(books){
        return axios.get("/api/books");

    }
}