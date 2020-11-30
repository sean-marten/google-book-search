import axios from "axios";

export default {
  search: function (search, limit) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${limit}`
    );
  },
  getAllBooks: function () {
    return axios.get("/api/books");
  },
  addBook: function (author, title, description, image, link) {
    return axios.post("/api/books", {
      author,
      title,
      description,
      image,
      link,
    });
  },
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};
