import { getAuthors, getAuthorByID } from "./authors.js"

let books = [
    {
      id: 1,
      title: 'The Awakening',
      author: getAuthorByID(1)[0],
    },
    {
      id: 2,
      title: 'City of Glass',
      author: getAuthorByID(2)[0],
    },
  ];

function getBooks() {
    return books;
}

function getBookByID(id) {
    return books.filter(book => book.id == id);
}

function addBook(id, title, author) {
    books.push(
        {
            id: id,
            title: title, 
            author: author
        }
    )
}

export { getBooks, getBookByID, addBook }