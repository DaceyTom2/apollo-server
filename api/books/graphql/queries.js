import { getBooks, getBookByID } from "../../../datasets/books.js"

export default {
    books: () => getBooks(),
    book: (_, {id}) => {
      return getBookByID(id)
    },
  };