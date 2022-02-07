let books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

function getBooks() {
    return books;
}

function addBook(title, author) {
    books.push(
        {
            title: title, 
            author: author
        }
    )
}

export { getBooks, addBook }