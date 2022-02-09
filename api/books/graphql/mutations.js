import { addBook, deleteBook } from "../../../datasets/books.js";

export default {
  addBook: async (_, { id, title, author, library}) => {
    if (addBook(id, title, author, library)) {
      return { success: true, message: "Book added" };
    } else {
      return { success: false, message: "Failed to add book" };
    }
  },
  deleteBook: async (_, { id }) => {
    if (deleteBook(id)) {
      return { success: true, message: "Book deleted" };
    } else {
      return { success: false, message: "Failed to delete book" };
    }
  },
};
