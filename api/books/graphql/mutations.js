import { addBook } from "../../../datasets/books.js"

export default {
    addBook: (_, {id, title, author}) => { 
      return addBook(id, title, author)
    },
  };