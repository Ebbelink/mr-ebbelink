import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
query homepageQuery{
  homepage{
    Title
  }  
}
`;

type HomepageQueryResult = {
  homepage: Homepage;
}

class Homepage {
  Title: string = "";
}

export {
  HOMEPAGE_QUERY,
  HomepageQueryResult,
  Homepage
};