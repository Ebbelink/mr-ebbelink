import gql from "graphql-tag";

export const ARTICLES_QUERY = gql`
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

export const ARTICLES_FOR_TAG_QUERY = gql`
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

export const ARTICLE_QUERY = gql`
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

export type ARTICLE_QUERY_RESPONSE = {
  article: Article;
};

export class Article {
  id: string = "";
  title: string = "";
  content: string = "";
  image: ArticleImage = new ArticleImage();
  categories: Category[] = [];
  published_at: Date | undefined;

  constructor(input: Partial<Article>) {
    Object.assign(this, input);
  }
}

export class ArticleImage {
  url: string = "";
};

export type Category = {
  name: string;
};
