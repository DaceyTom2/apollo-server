import { getAuthorByID } from "../../../datasets/authors.js"

export default {
    Book: {
        author: (book) => {
          return getAuthorByID(book.author)
        }
    },
  };