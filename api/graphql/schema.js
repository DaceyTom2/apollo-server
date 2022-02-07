import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

//Object Schema Imports
import BookTypes from "../books/graphql/types.js";
import BookQueries from "../books/graphql/queries.js";

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
    `,
    resolvers: {
      Query: {
        ...BookQueries,
        ...AuthorQueries,
      },
    },
  };
  
  export default makeExecutableSchema(schema);