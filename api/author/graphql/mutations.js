import { addAuthor, deleteAuthor } from "../../../datasets/authors.js";

export default {
  addAuthor: async (_, { id, name, books }) => {
    if (addAuthor(id, name, books)) {
      return { success: true, message: "Author added" };
    } else {
      return { success: false, message: "Failed to add author" };
    }
  },
  deleteAuthor: async (_, { id }) => {
    if (deleteAuthor(id)) {
      return { success: true, message: "Author deleted" };
    } else {
      return { success: false, message: "Failed to delete author" };
    }
  },
};
