const LibraryFields = `
  id: ID!
  name: String
  books: [Book]
`;

export default `
  type Library {
    ${LibraryFields}
  }`;
