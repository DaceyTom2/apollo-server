let authors = [
    {
      id: 1,
      name: 'Kate Chopin',
      books: [1,2]
    },
    {
      id: 2,
      name: 'Paul Auster',
      books: [3]
    },
    {
      id: 3,
      name: 'Tom Clancy',
      books: [4,5,6]
    }
  ];

function getAuthors() {
    return authors;
}

function getAuthorByID(id) {
  return authors.find(author => author.id == id);
}

function addAuthor(id, name) {
    authors.push(
        {
            id: id,
            name: name, 
        }
    )
}

export { getAuthors, getAuthorByID, addAuthor }