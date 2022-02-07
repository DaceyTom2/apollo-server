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

function addAuthor(id, name) {
    authors.push(
        {
            id: id,
            name: name, 
        }
    )
}

export { getAuthors, addAuthor }