import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      basePath
    }
  }
`;

export default CATEGORIES_QUERY;