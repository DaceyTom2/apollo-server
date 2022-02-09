const BookFields = `
  id: ID!
  title: String
  author: Author
  library: [Library]
`;

export default `
  type Book {
    ${BookFields}
  }`;