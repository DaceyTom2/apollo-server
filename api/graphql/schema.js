import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

//Object Schema Imports
import BookTypes from "../books/graphql/types.js";
import BookQueries from "../books/graphql/queries.js";

const schema = {
    typeDefs: gql`
      ${BookTypes}

      type Query {
        books: [Book]
      }
    `,
    resolvers: {
      Query: {
        ...BookQueries,
      },
    },
  };
  
  export default makeExecutableSchema(schema);