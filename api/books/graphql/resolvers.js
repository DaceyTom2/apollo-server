import { getAuthorByID } from "../../../datasets/authors.js"
import { getLibrariesByIDs } from "../../../datasets/libraries.js"

export default {
    Book: {
        author: (book) => {
          return getAuthorByID(book.author)
        },
        library: (book) => {
            return getLibrariesByIDs(book.library)
        }
    },
  };