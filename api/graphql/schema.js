import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

//Object Schema Imports
import BookTypes from "../books/graphql/types.js";
import BookQueries from "../books/graphql/queries.js";
import BookMutations from "../books/graphql/mutations.js"

import AuthorTypes from "../author/graphql/types.js";
import AuthorQueries from "../author/graphql/queries.js";

import { getAuthorByID } from "../../datasets/authors.js"
import { getBookByID } from "../../datasets/books.js"

const schema = {
    typeDefs: gql`
      ${BookTypes}
      ${AuthorTypes}

      type Response {
        success: Boolean
        message: String
      }

      type Query {
        books(id: ID): [Book]
        authors(id: ID): [Author]
      }

      type Mutation {
        addBook(id: ID, title: String, author: String): Response
      }
    `,
    resolvers: {
      Query: {
        ...BookQueries,
        ...AuthorQueries,
      },
      Mutation: {
        ...BookMutations,
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
    },
  };
  
  export default makeExecutableSchema(schema);