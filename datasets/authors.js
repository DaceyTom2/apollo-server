let authors = [
    {
      id: 1,
      name: 'Kate Chopin',
    },
    {
      id: 2,
      name: 'Paul Auster',
    },
  ];

function getAuthors() {
    return authors;
}

function getAuthorByID(id) {
  return authors.filter(author => author.id == id);
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