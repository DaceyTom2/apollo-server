import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

//Object Schema Imports
import BookTypes from "../books/graphql/types.js";
import BookQueries from "../books/graphql/queries.js";
import BookMutations from "../books/graphql/mutations.js"

import AuthorTypes from "../author/graphql/types.js";
import AuthorQueries from "../author/graphql/queries.js";

const schema = {
    typeDefs: gql`
      ${BookTypes}
      ${AuthorTypes}

      type Query {
        books(id: ID): [Book]
        authors: [Author]
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
      }
    },
  };
  
  export default makeExecutableSchema(schema);