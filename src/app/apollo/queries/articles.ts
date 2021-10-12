import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      categories {
        name
      }
      image {
        url
      }
    }
  }
`;

const ARTICLES_FOR_TAG_QUERY = gql`
query articlesByQategory($categories: [String]){
  articles(where: {categories:{name:$categories}}){
    id
    title
    content
    image {
      url
    }
    categories {
      id
      name
    }
    published_at
  }
}
`;

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      image {
        url
      }
      categories {
        name
      }
      published_at
    }
  }
`;

export {
  ARTICLE_QUERY,
  ARTICLES_QUERY,
  ARTICLES_FOR_TAG_QUERY
};
