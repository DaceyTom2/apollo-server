import { getAuthors } from "./authors.js"

let books = [
    {
      id: 1,
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      id: 2,
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

function getBooks() {
    return books;
}

function getBookByID(id) {
    return books.filter(book => book.id == id);
}

function addBook(id, title, author) {
    const book = {
        id: id,
        title: title, 
        author: author
    }
    books.push(book)
    return book
}

export { getBooks, getBookByID, addBook }