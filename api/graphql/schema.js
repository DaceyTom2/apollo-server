import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

//Object Schema Imports
import BookTypes from "../books/graphql/types.js";
import BookQueries from "../books/graphql/queries.js";
import BookMutations from "../books/graphql/mutations.js"

import AuthorTypes from "../author/graphql/types.js";
import AuthorQueries from "../author/graphql/queries.js";
import AuthorMutations from "../author/graphql/mutations.js";

import LibraryTypes from "../library/graphql/types.js";
import LibraryQueries from "../library/graphql/queries.js";
import LibraryMutations from "../library/graphql/mutations.js";

import { getAuthorByID } from "../../datasets/authors.js"
import { getBookByID } from "../../datasets/books.js"

const schema = {
    typeDefs: gql`
      ${BookTypes}
      ${AuthorTypes}
      ${LibraryTypes}

      type Response {
        success: Boolean
        message: String
      }

      type Query {
        books(id: ID): [Book]
        authors(id: ID): [Author]
        libraries(id: ID): [Library]
      }

      type Mutation {
        addBook(id: ID!, title: String, author: ID): Response
        deleteBook(id: ID!): Response
        addAuthor(id: ID!, name: String, books: [ID]): Response
        deleteAuthor(id: ID!): Response
        addLibrary(id: ID!, name: String, books: [ID]): Response
        deleteLibrary(id: ID!): Response
      }
    `,
    resolvers: {
      Query: {
        ...BookQueries,
        ...AuthorQueries,
        ...LibraryQueries,
      },
      Mutation: {
        ...BookMutations,
        ...AuthorMutations,
        ...LibraryMutations,
      },
      Book: {
        author: (book) => {
          return getAuthorByID(book.author)
        }
      },
      Author: {
        books: (author) => {
          return author.books.map(x => getBookByID(x))
        }
      },
      Library: {
        books: (author) => {
          return author.books.map(x => getBookByID(x))
        }
      },
    },
  };
  
  export default makeExecutableSchema(schema);