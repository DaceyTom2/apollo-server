const AuthorFields = `
  id: ID!
  name: String
  books: [Book]
`;

export default `
  type Author {
    ${AuthorFields}
  }`;