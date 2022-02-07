import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

//Object Schema Imports
import BookTypes from "../books/graphql/types.js";
import BookQueries from "../books/graphql/queries.js";
import BookMutations from "../books/graphql/mutations.js"

import AuthorTypes from "../author/graphql/types.js";
import AuthorQueries from "../author/graphql/queries.js";

import { getAuthorByID } from "../../datasets/authors.js"

const schema = {
    typeDefs: gql`
      ${BookTypes}
      ${AuthorTypes}

      type Query {
        books(id: ID): [Book]
        authors(id: ID): [Author]
      }

      type Mutation {
        addBook(id: ID, title: String, author: String): Book
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
      }
    },
  };
  
  export default makeExecutableSchema(schema);