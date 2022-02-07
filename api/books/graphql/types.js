const BookFields = `
  id: ID!
  title: String
  author: String
`;

export default `
  type Book {
    ${BookFields}
  }`;