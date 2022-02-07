const BookFields = `
  title: String
  author: String
`;

export default `
  type Book {
    ${BookFields}
  }`;