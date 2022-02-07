const BookFields = `
  id: ID!
  title: String
  author: Author
`;

export default `
  type Book {
    ${BookFields}
  }`;